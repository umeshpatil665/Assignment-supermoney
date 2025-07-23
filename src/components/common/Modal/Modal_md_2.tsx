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
const Modal_md_2 = ({ open, setOpen, children }: FormPopupProps) => {
 
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogOverlay
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
    
      <DialogContent className="w-[90%] md:w-[75%] lg:w-[100%] min-h-max flex flex-col items-center px-2 z-9999 border border-primary  rounded-lg"
        onPointerDownOutside={(event) => event.preventDefault()}>
          <DialogTitle></DialogTitle>
        <div className="w-full min-h-max scrollbar-thumb-sky-300 scrollbar-track-sky-100 scrollbar-thin overflow-y-auto">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal_md_2;
