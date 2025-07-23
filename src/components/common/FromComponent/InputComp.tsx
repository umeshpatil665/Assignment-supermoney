import React, { InputHTMLAttributes } from "react";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Regex } from "lucide-react";
interface InputsComp extends InputHTMLAttributes<HTMLInputElement> {
  lable?: string;
  lableClass?: string;
  errorMessage?: string;
  cls?: string;
  regex?: any;
  onchange: (e: any) => void;
  value?: any;
  type: string;
}
const InputComp: React.FC<InputsComp> = ({
  lable,
  lableClass,
  errorMessage,
  cls,
  type,
  regex,
  onchange,
  value,
  ...rest
}) => {
  // const regexx = new Regex(re);

  return (
    <div className="w-full ">
      <Label htmlFor={rest.id} className={`text-form-color text-sm font-normal ml-2  ${lableClass}`}>
        {lable}
      </Label>
      <Input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const newValue = e.target.value;
          if (regex) {
            if (newValue === "" || regex.test(newValue)) {
              onchange(newValue);
            }
          } else {
            onchange(newValue);
          }
        }}
        type={type}
        {...rest}
        className={`block w-full border border-input border-[#B9B9B9]   rounded-md py-1.5   placeholder:text-fromLable placeholder:text-xs  ${cls}`}
      />
      <p className="text-xs text-red-600 ml-2 font-normal">{errorMessage}</p>
    </div>
  );
};

export default InputComp;
