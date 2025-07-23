import React, { InputHTMLAttributes } from 'react'
import { Input } from '../../ui/input'
import { Label } from '../../ui/label'
interface InputsComp extends InputHTMLAttributes<HTMLInputElement> {

  lable?: string
  lableClass?: string,
  errorMessage?: string
  cls?: string
  regex?: any
  onchange: (e: any) => void
  value?: any;
  type:string,
  subtext?:string
}
const InputTemplate: React.FC<InputsComp> = ({ lable, lableClass,subtext, errorMessage, cls,type, regex, onchange, value, ...rest }) => {
  const regexx = /^\d*\.?\d*$/;
 
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-2 font-sans'>
        <div className='font-normal'>
        <Label htmlFor={rest.id} className={`text-form-color text-sm   ${lableClass}`}>{lable}</Label>
        {subtext?<p className='text-xs  font-roboto text-form-sublable-color'>{subtext}</p>:<></>}
        </div>
      
      <div>
      <Input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
         
          if (regex && regex) {
          
            const { value } = e.target;
            if (regexx.test(value)) {
                onchange && onchange(value)
            }
          } else {
            onchange && onchange(e.target.value)
          }
        }}
        type={type}
       
        {...rest}
        className={`block w-full border border-input border-[#B9B9B9]   rounded-md py-1.5  placeholder:text-fromLable placeholder:text-xs  ${cls}`} />
      <p className='text-xs text-red-600 ml-2 font-normal'>{errorMessage}</p>
      </div>
   
    </div>
  )
}

export default InputTemplate

