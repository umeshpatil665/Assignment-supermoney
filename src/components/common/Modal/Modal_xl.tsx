
import React from 'react'
import { DialogContent, DialogHeader, Dialog, DialogTitle,DialogOverlay } from '../../ui/dialog_xl'
interface FormPopupProps {
    open: boolean;
    setOpen?: (val: boolean) => void
    children?: React.ReactNode
}
const Modal_xl = ({ open, setOpen, children }: FormPopupProps) => {

    return (

        <Dialog open={open} onOpenChange={setOpen} >
                         <DialogOverlay
          onClick={(e) => {
            e.stopPropagation();
          }}
       
        />
      
            <DialogContent className="w-full h-[70%]  flex flex-col items-center px-2 z-999 border border-border_primaryDarkBlue" onPointerDownOutside={(event) => event.preventDefault()}>
            <DialogTitle></DialogTitle>
                <div className='w-full h-full py-2 no-scrollbar overflow-y-auto'>
                {children}
                </div>
               
            </DialogContent>
        </Dialog>

    )
}

export default Modal_xl
