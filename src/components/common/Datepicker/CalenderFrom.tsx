import React, { InputHTMLAttributes } from 'react'
import { Label } from '../../ui/label'
import CalenderFilter from './CalenderFilter'
interface InputsComp  {

  lable?: string
  lableClass?: string,
  errorMessage?: string
  cls?: string
id:string
  onchange: (e: any) => void
  value?: any;

}
const CalenderFrom: React.FC<InputsComp> = ({ lable, lableClass, errorMessage, cls, onchange, value, id}) => {
  
  return (
    <div className='w-full my-2'>
           <Label
              htmlFor={id}
              className={`text-form-color text-sm font-normal ml-2  ${lableClass}`}
            >
              {lable}
            </Label>
      <CalenderFilter dts={value||""} onchange={(e:string)=>onchange(e)} />
      <p className='text-xs text-red-600 ml-2 font-normal'>{errorMessage}</p>
    </div>
  )
}

export default CalenderFrom

