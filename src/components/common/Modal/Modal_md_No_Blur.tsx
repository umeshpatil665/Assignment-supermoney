import React from "react";
import {
  DialogContent,
  DialogHeader,
  Dialog,
  DialogTitle,
  DialogOverlay,
} from "../../ui/dialog_no_blur";
interface FormPopupProps {
  open: boolean;
  setOpen?: (val: boolean) => void;
  children?: React.ReactNode;
}
const Modal_md_No_Blur = ({ open, setOpen, children }: FormPopupProps) => {

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogOverlay
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
      
      <DialogContent className="w-[100%] min-h-max flex flex-col items-center px-2 z-9999 border border-border_primaryDarkBlue "
        onPointerDownOutside={(event) => event.preventDefault()}>
        <DialogTitle></DialogTitle>
        <div className="w-full min-h-max scrollbar-thumb-sky-300 scrollbar-track-sky-100 scrollbar-thin overflow-y-auto">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal_md_No_Blur;
