import React from "react";
import {
  DialogContent,
  DialogHeader,
  Dialog,
  DialogTitle,
  DialogOverlay,
} from "../../ui/dialog_md";
interface FormPopupProps {
  open: boolean;
  setOpen?: (val: boolean) => void;
  children?: React.ReactNode;
}
const Modal_md = ({ open, setOpen, children }: FormPopupProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogOverlay
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
     
      <DialogContent className="w-[100%] h-[90%] flex flex-col items-center px-2 z-9999 border border-border_primaryDarkBlue over"
      onPointerDownOutside={(event) => event.preventDefault()}>
         <DialogTitle></DialogTitle>
        <div className="w-full h-full scrollbar-thumb-sky-300 scrollbar-track-sky-100 scrollbar-thin overflow-y-auto">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal_md;
