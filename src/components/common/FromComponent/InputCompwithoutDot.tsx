import React, { InputHTMLAttributes } from "react";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
interface InputsComp extends InputHTMLAttributes<HTMLInputElement> {
  lable?: string;
  lableClass?: string;
  errorMessage?: string;
  cls?: string;
  regex?: any;
  onchange?: (e: any) => void;
  value?: any;
  type: string;
  maxLength?:number
}
const InputCompwithoutDot: React.FC<InputsComp> = ({
  lable,
  lableClass,
  type,
  errorMessage,
  cls,
  regex,
  onchange,
  value,
maxLength,
  ...rest
}) => {
  // const regexx = /^\d*\.?\d*$/;
  //   const regexx = /^\.?\d*\.?\d*$/
  const regexx = /^[0-9]*$/;
  const handleKeyDown = (e: any) => {
    if (type === "number" && regex) {
      if (e.key === "." || e.key === "e" || e.key === "+" || e.key === "-") {
        e.preventDefault();
      } else return;
    } else return;
  };
  return (
    <div className="w-full my-2">
      <Label
        htmlFor={rest.id}
         className={`text-form-color text-sm font-normal ml-2  ${lableClass}`}
      >
        {lable}
      </Label>
      <Input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
         
          if (regex && regex) {
            const { value } = e.target;
            if ((maxLength && value.length <= maxLength)&&regexx.test(value)) {
              onchange && onchange(value);
            }
          } else {
            onchange && onchange(e.target.value);
          }
        }}
        {...rest}
        type={type}
        maxLength={maxLength}
        onKeyDown={handleKeyDown}
      
        className={`block w-full border border-input border-[#B9B9B9] rounded-md py-1.5  pr-20 placeholder:text-gray-400 placeholder:text-xs  ${cls}`}
      />
      <p className="text-sm text-red-600 ml-2 font-medium">{errorMessage}</p>
    </div>
  );
};

export default InputCompwithoutDot;
