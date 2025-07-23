import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { X } from "lucide-react";

import { Label } from "@/components/ui/label";

interface Option {
  label: string;
  value: string;
}

interface MultiSelectDropdownProps {
  dataQAkey?: string;
  labelClass?: string;
  label?: string;
  name: string;
  value: string[]; // Array of selected values (controlled)
  options: Option[]; // Array of all selectable options
  errorMessage?: string;
  onChange?: (value: string[]) => void;
  id?: string;
  isLoading?: boolean;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  id,
  labelClass,
  label,
  name,
  value = [],
  options = [],
  isLoading = false,
  onChange,
  errorMessage,
}) => {
 const [open,setOpen]=useState(false)
  const selectedValues = Array.from(new Set(value));
  
  // Handle adding a new option
  const handleSelectOption = (selectedValue: string) => {
   
    if (!onChange) return;

    if (selectedValues.includes(selectedValue)) {
      return;
    }

    const updatedValues = [...selectedValues, selectedValue];

    // Debug log
 
    onChange && onChange(updatedValues);
  };

  // Handle removing an option
  const handleRemoveOption = (removedValue: string) => {
    if (!onChange) return;
    const updatedValues = selectedValues.filter(
      (item) => item !== removedValue
    );

    onChange(updatedValues);
  };

  return (
    <div className="w-full mt-2" id={id}>
      {/* Label */}
      {label && (
        <Label
          htmlFor={id}
           className={`text-form-color text-sm font-normal ml-2  ${labelClass}`}
        >
          {label}
        </Label>
      )}

      <Popover  open={open} onOpenChange={setOpen}>
        {/* Trigger */}
        <PopoverTrigger asChild>
          <div
            onClick={()=>setOpen(!open)}
            className="w-full flex items-center justify-start flex-wrap min-h-[38px] border border-[#B9B9B9] rounded-md p-1"
          >
            {selectedValues.length > 0 ? (
              selectedValues.map((cur: string) => (
                <div
                  key={cur}
                  className="flex items-center mr-2 mb-1 px-2 py-1 border border-gray-300 rounded"
                >
                  <span className="mr-1">{cur}</span>
                  <X
                    className="w-4 h-4 cursor-pointer"
                    data-id={cur}
                    onClick={(e) => {
                      e.stopPropagation(); 
                      handleRemoveOption(cur);
                    }}
                
                  />
                </div>
              ))
            ) : (
              <span className="text-gray-400 text-sm">Select...</span>
            )}
          </div>
        </PopoverTrigger>

        {/* Popover Content */}
        <PopoverContent className="w-80 max-h-60 overflow-auto p-0">
          {isLoading ? (
            <div className="p-4 text-sm text-gray-500">Loading...</div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {options && options.length > 0 ? (
                options.map((opt: Option, index: number) => (
                  <li
                    key={index}
                    onClick={(e: any) => {
                      e.stopPropagation();
                      handleSelectOption(opt.value);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    {opt.label}
                  </li>
                ))
              ) : (
                <li className="p-4 text-sm text-gray-500">No options</li>
              )}
            </ul>
          )}
        </PopoverContent>
      </Popover>

      {/* Error Message */}
      {errorMessage && (
        <p className="text-xs text-red-600 ml-2 font-normal mt-1">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
