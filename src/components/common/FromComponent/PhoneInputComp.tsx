import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface PhoneInputCompProps {
  label?: string;
  labelClass?: string;
  errorMessage?: string;
  onChange: (phone: string,countrycode:string) => void;
  value?: string;
  id: string;
}

const PhoneInputComp = ({
  onChange,
  errorMessage,
  label,
  labelClass,
  id,
  value = "",
}: PhoneInputCompProps) => {
  const [phone, setPhone] = useState(value);
  const [countryCode, setCountryCode] = useState("+91"); // Default country code

  const handleChange = (value: string, data: any) => {
    const dialCode = `${data.dialCode}`; // Extract country code
    const phoneNumber = value.startsWith(data.dialCode)
      ? value.slice(data.dialCode.length).trim()
      : value;

    setCountryCode(dialCode); 
    setPhone(phoneNumber); 
    onChange(phoneNumber,dialCode); 
  };

  return (
    <div className="w-full my-2">
    
      {label && (
        <Label htmlFor={id} className={`text-form-color text-sm font-normal ml-2 ${labelClass}`}>
          {label}
        </Label>
      )}

     
      <PhoneInput
        country={"in"}
        value={`+${value}`} 
        onChange={handleChange}
        countryCodeEditable={false} 
        disableDropdown={false} 
        inputProps={{
          name: id,
          required: true,
          autoFocus: true,
        }}
        placeholder="Enter Mobile Number"
        inputStyle={{'width':'100%'}}
      />

      {/* Error Message */}
      {errorMessage && <p className="text-xs text-red-600 ml-2 font-normal">{errorMessage}</p>}
    </div>
  );
};

export default PhoneInputComp;
