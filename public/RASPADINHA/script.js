document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('scratch-grid');

    // --- Configuração da Lógica ---
    const totalCards = 9;

    // Estado do Jogo
    let gameState = [];

    // Flag de Vitória Global
    let gameWon = false;

    // Definição dos Valores
    const winningValue = 'discount_winning.png'; // 15%

    // Valores não-vencedores
    const nonWinningValues = [
        'discount_1.png', 'discount_1.png', // 2x 10%
        'discount_2.png', 'discount_2.png', // 2x 8%
        'discount_3.png', 'discount_4.png'  // Outros
    ];

    // Preload Coin Image
    const coinImg = new Image();
    coinImg.src = 'coin_final_v2.webp';

    coinImg.onload = () => setTimeout(initGame, 50);
    coinImg.onerror = () => initGame();

    // Audio
    const scratchAudio = new Audio('scratch.mp3');
    const winAudio = new Audio('win.mp3');
    const lineAudio = new Audio('line.mp3');
    scratchAudio.loop = true;
    scratchAudio.volume = 1.0;

    // --- Inicialização ---
    function initGame() {
        grid.innerHTML = '';
        gameState = [];

        // 1. Embaralhar
        const currentNonWinners = [...nonWinningValues].sort(() => Math.random() - 0.5);

        // 2. Definir posições
        const winRow0 = Math.floor(Math.random() * 3);
        const winRow1 = Math.floor(Math.random() * 3) + 3;
        const winRow2 = 7;

        for (let i = 0; i < totalCards; i++) {
            let valor;

            if (i === winRow0 || i === winRow1 || i === winRow2) {
                valor = winningValue;
            } else {
                valor = currentNonWinners.pop();
            }

            const cardState = {
                id: i,
                valorCasa: valor,
                porcentagemRaspada: 0,
                casaRevelada: false,
                element: null
            };
            gameState.push(cardState);

            const cardElement = createCardElement(i, valor);
            cardState.element = cardElement;
            grid.appendChild(cardElement);

            requestAnimationFrame(() => initCanvas(cardElement, cardState));
        }

        // Setup Grid Interaction (Chamada única ou segura de repetir)
        // Como o grid container é estático no HTML, o listener pode ser anexado fora.
        // Mas vamos chamar aqui para garantir ordem.
    }

    function createCardElement(index, value) {
        const wrapper = document.createElement('div');
        wrapper.className = 'card-wrapper';

        const label = document.createElement('div');
        label.className = 'scratch-label';
        label.textContent = 'RASPE AQUI';
        wrapper.appendChild(label);

        const card = document.createElement('div');
        card.className = 'scratch-card';
        card.dataset.index = index;
        card.dataset.value = value;

        const content = document.createElement('div');
        content.className = 'card-content';
        content.innerHTML = `<img src="${value}" alt="Prêmio" draggable="false">`;

        const canvas = document.createElement('canvas');
        canvas.className = 'scratch-canvas';

        card.appendChild(content);
        card.appendChild(canvas);
        wrapper.appendChild(card);

        return wrapper;
    }

    function initCanvas(wrapper, cardState) {
        const canvas = wrapper.querySelector('canvas');
        const card = wrapper.querySelector('.scratch-card');
        const ctx = canvas.getContext('2d');
        const width = card.offsetWidth;
        const height = card.offsetHeight;
        const dpr = window.devicePixelRatio || 1;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        if (coinImg.complete && coinImg.naturalWidth !== 0) {
            const size = Math.max(width, height) * 1.65;
            const x = (width - size) / 2;
            const y = (height - size) / 2;
            ctx.drawImage(coinImg, x, y, size, size);
        } else {
            ctx.fillStyle = '#C5A028';
            ctx.fillRect(0, 0, width, height);
        }

        // EXPONDO a função scratch para ser chamada pelo handler do Grid
        canvas.scratch = (clientX, clientY) => {
            const rect = canvas.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath();
            ctx.arc(x, y, 20, 0, Math.PI * 2);
            ctx.fill();

            // Lógica direta (sem throttling) para resposta imediata
            updateScratchPercentage(cardState, ctx, width, height);
        };
    }

    // --- HANDLER GLOBAL DO GRID (Opção 2 - Contínuo) ---
    function setupGridInteraction() {
        let isScratching = false;

        grid.addEventListener('pointerdown', (e) => {
            if (e.target.classList.contains('scratch-canvas')) {
                isScratching = true;
                grid.setPointerCapture(e.pointerId); // Captura no GRID

                scratchAudio.play().catch(() => { });
                if (navigator.vibrate) navigator.vibrate(5);

                const tutorial = document.getElementById('hand-tutorial');
                if (tutorial && tutorial.style.display !== 'none') {
                    tutorial.style.opacity = '0';
                    setTimeout(() => tutorial.style.display = 'none', 500);
                }

                // Raspa o inicial (no target direto)
                if (e.target.scratch) e.target.scratch(e.clientX, e.clientY);
            }
        });

        grid.addEventListener('pointermove', (e) => {
            if (!isScratching) return;
            e.preventDefault(); // Previne scroll

            // Detecta qual elemento está embaixo do dedo
            const element = document.elementFromPoint(e.clientX, e.clientY);

            if (element && element.classList.contains('scratch-canvas') && typeof element.scratch === 'function') {
                element.scratch(e.clientX, e.clientY);
                if (scratchAudio.paused) scratchAudio.play().catch(() => { });
            }
        });

        const stopScratching = (e) => {
            if (!isScratching) return;
            isScratching = false;
            grid.releasePointerCapture(e.pointerId);
            scratchAudio.pause();
            scratchAudio.currentTime = 0;
        };

        grid.addEventListener('pointerup', stopScratching);
        grid.addEventListener('pointercancel', stopScratching);
    }

    // Inicia ouvintes do grid imediatamente
    setupGridInteraction();

    // --- Lógica Principal ---

    function updateScratchPercentage(cardState, ctx, width, height) {
        if (cardState.casaRevelada) return;

        try {
            const dpr = window.devicePixelRatio || 1;
            const imageData = ctx.getImageData(0, 0, width * dpr, height * dpr);
            const pixels = imageData.data;
            let transparentPixels = 0;
            const sampleRate = 10;
            const totalSampled = (pixels.length / 4) / sampleRate;

            for (let i = 0; i < pixels.length; i += 4 * sampleRate) {
                if (pixels[i + 3] < 128) {
                    transparentPixels++;
                }
            }

            cardState.porcentagemRaspada = (transparentPixels / totalSampled) * 100;

            // REGRA 1 (Continuação): Se >= 12%, definir casaRevelada = true
            if (cardState.porcentagemRaspada >= 12) {
                revealCard(cardState);
            }

        } catch (e) {
            console.error("Erro ao ler pixels (CORS ou contexto):", e);
            // Fallback simples baseada em contagem de eventos se necessário, 
            // mas o request foca na lógica de porcentagem.
            // Para garantir robustez:
            cardState.porcentagemRaspada += 1.5; // Incremento artificial por movimento
            if (cardState.porcentagemRaspada >= 12) {
                revealCard(cardState);
            }
        }
    }

    function revealCard(cardState) {
        if (cardState.casaRevelada) return;
        cardState.casaRevelada = true;
        checkVictoryCondition();
    }

    function checkVictoryCondition() {
        if (gameWon) return;

        const counts = {};
        gameState.forEach(card => {
            if (card.casaRevelada) {
                if (!counts[card.valorCasa]) counts[card.valorCasa] = 0;
                counts[card.valorCasa]++;
            }
        });

        console.log("Checking Victory. Counts:", counts); // DEBUG LOG

        for (const valor in counts) {
            if (counts[valor] >= 3) {
                console.log("Victory Triggered for:", valor); // DEBUG LOG
                ganharPremio(valor);
                break;
            }
        }
    }

    function ganharPremio(valorCasa) {
        gameWon = true;

        setTimeout(() => {
            winAudio.play().catch(() => { });
            startConfetti();

            gameState.forEach(card => {
                const cardEl = card.element.querySelector('.scratch-card');
                if (card.valorCasa === valorCasa) {
                    cardEl.classList.add('winner');
                } else {
                    cardEl.style.opacity = '0.4';
                    cardEl.style.filter = 'grayscale(0.5)';
                }
            });

            const winningCardsElements = gameState
                .filter(c => c.valorCasa === valorCasa)
                .sort((a, b) => a.id - b.id)
                .map(c => c.element.querySelector('.scratch-card'));

            drawWinningLine(winningCardsElements);

            setTimeout(() => {
                const modal = document.getElementById('win-modal');
                if (modal) {
                    modal.classList.add('visible');
                    const line = document.getElementById('winning-line-svg');
                    if (line) line.remove();
                }
            }, 2000);

        }, 500);
    }

    // --- Efeitos Visuais ---
    function drawWinningLine(cardElements) {
        const existingLine = document.getElementById('winning-line-svg');
        if (existingLine) existingLine.remove();

        const gridContainer = document.querySelector('.scratch-grid');
        if (!gridContainer) return;

        const gridRect = gridContainer.getBoundingClientRect();

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.id = 'winning-line-svg';
        svg.style.position = 'absolute';
        svg.style.top = '0';
        svg.style.left = '0';
        svg.style.width = '100%';
        svg.style.height = '100%';
        svg.style.pointerEvents = 'none';
        svg.style.zIndex = '20';

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        let d = '';
        cardElements.forEach((card, i) => {
            const rect = card.getBoundingClientRect();
            const x = (rect.left - gridRect.left) + (rect.width / 2);
            const y = (rect.top - gridRect.top) + (rect.height / 2);

            if (i === 0) d += `M ${x} ${y}`;
            else d += ` L ${x} ${y}`;
        });

        path.setAttribute("d", d);
        path.setAttribute("stroke", "#FFD700");
        path.setAttribute("stroke-width", "8");
        path.setAttribute("stroke-linecap", "round");
        path.setAttribute("stroke-linejoin", "round");
        path.setAttribute("fill", "none");

        const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
        filter.id = "glow";
        filter.innerHTML = `<feGaussianBlur stdDeviation="4.5" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>`;
        defs.appendChild(filter);
        svg.appendChild(defs);
        path.setAttribute("filter", "url(#glow)");

        const length = 1000;
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        path.style.animation = "dash 1s linear forwards";

        if (!document.getElementById('line-anim-style')) {
            const style = document.createElement('style');
            style.id = 'line-anim-style';
            style.innerHTML = `@keyframes dash { to { stroke-dashoffset: 0; } }`;
            document.head.appendChild(style);
        }

        svg.appendChild(path);
        gridContainer.appendChild(svg);

        const lineAudio = new Audio('line.mp3');
        lineAudio.play().catch(() => { });
    }

    function startConfetti() {
        const colors = ['#ffd700', '#ff0000', '#ffffff', '#800080'];
        for (let i = 0; i < 100; i++) {
            const c = document.createElement('div');
            c.style.position = 'fixed';
            c.style.left = Math.random() * 100 + 'vw';
            c.style.top = '-10px';
            c.style.width = Math.random() * 10 + 5 + 'px';
            c.style.height = Math.random() * 10 + 5 + 'px';
            c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            c.style.zIndex = '1000';
            c.style.transform = `rotate(${Math.random() * 360}deg)`;
            document.body.appendChild(c);

            const anim = c.animate([
                { transform: `translate(0,0)`, opacity: 1 },
                { transform: `translate(${Math.random() * 100 - 50}px, 100vh) rotate(${Math.random() * 720}deg)`, opacity: 0 }
            ], { duration: Math.random() * 2000 + 1500, easing: 'cubic-bezier(0.25,0.46,0.45,0.94)', fill: 'forwards' });
            anim.onfinish = () => c.remove();
        }
    }

    const modalBtn = document.getElementById('modal-claim-btn');
    if (modalBtn) {
        modalBtn.addEventListener('click', () => {
            window.top.location.replace('/Oferta/');
        });
    }
});
