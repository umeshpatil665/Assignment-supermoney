import React, {

  useMemo,
 
} from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  
} from "../../ui/select";
import { Label } from "../../ui/label";

interface JobIdProps {
  dataQAkey: string;
  lableClass?: string;
  lable?: string;
  value: any;
  name: string;
  options: any;
  errorMessage?: string;
  onChange?: (value: string) => void;
  id?: string;
  isLoading: boolean;
  subtext?: string;
}

const DropdownTemplate: React.FC<JobIdProps> = ({
  id,
  lableClass,
  subtext,
  lable,
  name,
  value,
  options,
  isLoading,
  onChange,
  errorMessage,
  dataQAkey,
}) => {
  const _idData = useMemo(() => (options ? options : []), [options]);

  const handleValueChange = (selectedValue: any) => {
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 font-sans">
      <div className="font-normal">
        <Label
          htmlFor={id}
          className={`text-form-color text-sm   ${lableClass}`}
        >
          {lable}
        </Label>
        {subtext ? (
          <p className="text-xs  font-roboto text-form-sublable-color">
            {subtext}
          </p>
        ) : (
          <></>
        )}
      </div>

      <div>
        <Select
          value={value || ""}
          onValueChange={handleValueChange}
          disabled={isLoading}
        >
          <SelectTrigger className=" border border-input border-[#B9B9B9] ">
            {/* <SelectValue className="text-xs font-medium text-gray-500" placeholder={name} /> */}
            <div className="text-black text-xs font-normal ">
              {_idData.filter((cur: any) => cur?.value === value)[0]?.label ||
                name}
            </div>
          </SelectTrigger>
          <SelectContent id={dataQAkey}>
            <SelectGroup>
              <SelectLabel className="text-black text-sm font-medium ">
                {name}
              </SelectLabel>

              {_idData.map((cur: any, id: number) => {
                return (
                  <SelectItem
                    className="text-xs font-medium text-black "
                    value={cur?.value}
                    key={`${cur?.label}-${id}`}
                  >
                    {cur?.label}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
        <p className="text-xs text-red-600 ml-2 font-normal">{errorMessage}</p>
      </div>
    </div>
  );
};

export default DropdownTemplate;
