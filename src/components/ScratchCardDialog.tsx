import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface ScratchCardDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ScratchCardDialog = ({ open, onOpenChange }: ScratchCardDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl w-[95vw] h-[90vh] p-0 border-none bg-transparent overflow-hidden">
        <iframe 
          src="/RASPADINHA/index.html" 
          className="w-full h-full border-none rounded-lg"
          title="Raspadinha"
        />
      </DialogContent>
    </Dialog>
  );
};
