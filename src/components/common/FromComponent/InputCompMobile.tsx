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
  type:string
}
const InputCompMobile: React.FC<InputsComp> = ({ lable, lableClass, errorMessage, cls,type, regex, onchange, value, ...rest }) => {
//   const regexx = /^\d*\.?\d*$/;
const regexx=/^\d{0,10}$/;
  return (
    <div className='w-full my-2'>
      <Label htmlFor={rest.id} className={`text-form-color text-sm font-normal ml-2  ${lableClass}`}>{lable}</Label>
      <Input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        
          if (regex && regex) {
            // let cleanedValue = e.target.value.replace(regexx, "");
            // onchange && onchange(Number(cleanedValue))
            const { value } = e.target;
            if (regexx.test(value)&& value.length<=10) {
                onchange && onchange(value)
            }
          } else {
            onchange && onchange(e.target.value)
          }
        }}
        type={type}
       
        {...rest}
        className={`block w-full border border-input border-[#B9B9B9]   rounded-md py-1.5  pr-20 placeholder:text-fromLable placeholder:text-xs  ${cls}`} />
      <p className='text-xs text-red-600 ml-2 font-normal'>{errorMessage}</p>
    </div>
  )
}

export default InputCompMobile

