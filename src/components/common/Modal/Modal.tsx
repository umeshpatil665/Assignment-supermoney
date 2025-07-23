
import React from 'react'
import { DialogContent, DialogHeader, Dialog, DialogTitle,DialogOverlay } from '../../ui/dialog'

interface FormPopupProps {
    open: boolean;
    setOpen?: (val: boolean) => void
    children?: React.ReactNode
}
const Modal = ({ open, setOpen, children }: FormPopupProps) => {
    
    return (

        <Dialog open={open} onOpenChange={setOpen} >
                  <DialogOverlay
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
       
            <DialogContent className="w-[100%] flex flex-col items-center px-2 z-999 border-border_primaryDarkBlue" >
            <DialogTitle></DialogTitle>
                {children}
            </DialogContent>
        </Dialog>

    )
}

export default Modal
