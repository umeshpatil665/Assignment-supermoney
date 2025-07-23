import { useEffect, useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/helpers";
import { CalendarIcon } from "lucide-react";
import dayjs from "dayjs";

interface CalenderFilterProps {
    dts: any;
    // setDate:(dt:Date)=>void,
    onchange: (dt: any) => void;
   
  }

const years = Array.from(
  { length: 100 },
  (_, i) => new Date().getFullYear() - i
);
const months = Array.from({ length: 12 }, (_, i) =>
  new Date(2000, i).toLocaleString("default", { month: "long" })
);
const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));

const DateOfBirth = ({dts,onchange}:CalenderFilterProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth()
  );
  const [datestring, setDateString] = useState("");
  const handleValueChange = (selectedValue: any) => {
    setSelectedDate(selectedValue);
    if (onchange) {
      // onchange(selectedValue);
      onchange(dayjs(new Date(selectedValue)).format("YYYY-MM-DD"));
    }
  };
  useEffect(() => {
    let dt = selectedDate
      ? dayjs(new Date(selectedDate)).format("DD MMM,YYYY dddd")
      : "Pick a date";
    setDateString(dt);
  }, [selectedDate]);

  const [month, setMonth] = useState(new Date(selectedYear, selectedMonth));

useEffect(() => {
  setMonth(new Date(selectedYear, selectedMonth));
}, [selectedYear, selectedMonth]);

  return (
    <Popover>
      <PopoverTrigger asChild>
      <Button
          variant={"outline"}
          className={cn(
            "w-full justify-between text-left  font-normal  border border-input border-[#B9B9B9] ",
            !selectedDate && "text-muted-foreground"
          )}
        >
          <span className="text-xs font-bold text-grayLable">
            {datestring}
          </span>
          <CalendarIcon className="mr-2 h-4 w-4 text-grayLable" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2 text-sm" align="start">
        {/* <Card className="w-full max-w-sm p-4">
          <CardContent className="flex flex-col space-y-4"> */}
            <div className="flex space-x-4">
              <Select
                onValueChange={(value) => setSelectedYear(Number(value))}
                defaultValue={String(selectedYear)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {years.map((year) => (
                    <SelectItem key={year} value={String(year)}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Month Selection */}
              <Select
                onValueChange={(value) =>
                  setSelectedMonth(months.indexOf(value))
                }
                defaultValue={months[selectedMonth]}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month, index) => (
                    <SelectItem key={index} value={month}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={handleValueChange}
            //   month={new Date(selectedYear, selectedMonth)}
              fromYear={years[years.length - 1]}
              toYear={years[0]}
              className="text-sm"
              disabled={{ before: new Date(1900, 0, 1), after:yesterday }}
              month={month}
              onMonthChange={setMonth} 
            />

            {/* Selected Date */}
            {selectedDate && (
              <p className="text-center text-sm text-gray-600">
                Selected Date: {format(selectedDate, "PPP")}
              </p>
            )}
          {/* </CardContent>
        </Card> */}
      </PopoverContent>
    </Popover>
  );
};

export default DateOfBirth;
