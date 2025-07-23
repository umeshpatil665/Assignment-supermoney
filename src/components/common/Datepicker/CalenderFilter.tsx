import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { CalendarIcon } from "lucide-react";

import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { cn } from "../../../helpers";
import { PopoverContent } from "../../ui/popover";
import { Calendar } from "../../ui/calendar";
import dayjs from "dayjs";
interface CalenderFilterProps {
  dts: any;
  // setDate:(dt:Date)=>void,
  onchange: (dt: any) => void;
  toDate?:any
}

const CalenderFilter = ({ dts, onchange,toDate }: CalenderFilterProps) => {
  
  const [date, setDate] = useState<Date>();
  const [datestring, setDateString] = useState("");
  const handleValueChange = (selectedValue: any) => {
    setDate(selectedValue);
    if (onchange) {
      
      onchange(dayjs(new Date(selectedValue)).format("YYYY-MM-DD"));
    }
  };

  useEffect(() => {
    if (dts) {
      let [year, month, day]: any = dts && dts?.toString().split("-");
      setDate(new Date(dts));
    }
  }, []);

  useEffect(() => {
    let dt = date
      ? dayjs(new Date(date)).format("DD MMM,YYYY dddd")
      : "Pick a date";
    setDateString(dt);
  }, [date]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-between text-left  font-normal  border border-input border-[#B9B9B9] ",
            !date && "text-muted-foreground"
          )}
        >
          <span className="text-xs font-bold text-grayLable">
            {datestring}
          </span>
          <CalendarIcon className="mr-2 h-4 w-4 text-grayLable" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleValueChange}
          initialFocus
          toDate={toDate}
        />
      </PopoverContent>
    </Popover>
  );
};
export default CalenderFilter;
