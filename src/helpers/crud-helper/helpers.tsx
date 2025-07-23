import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
// @ts-ignore
import qs from "qs";
import { ID, QueryResponseContextProps, QueryState } from "./models";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { optionsType } from "../../types";

export const prepareFilterOptions = (data: any, type = "id", codeKey = "code", shoeCode = false) => {
  const preparedResponse =
    data &&
    data?.map((v: any, indx: number): optionsType => {
      return {
        label:
          (v.name || "" || v.district_name || v.feeder_name || v.first_name + " " + v.last_name)?.trim() +
          "" +
          (shoeCode && codeKey && codeKey in v && v[codeKey] && (v[codeKey] != null || v[codeKey] != "null")
            ? " (" + v[codeKey] + ")"
            : ""),
        value: type == "id" ? (v.id || v.district_id || v.feeder_id || v.id || v.user_id)?.trim() : v.code?.trim(),
      };
    });
  return preparedResponse || [];
};

function createResponseContext<T>(initialState: QueryResponseContextProps<T>) {
  return createContext(initialState);
}

function isNotEmpty(obj: unknown) {
  return obj !== undefined && obj !== null && obj !== "";
}

// Example: page=1&items_per_page=10&sort=id&order=desc&search=a&filter_name=a&filter_online=false
function stringifyRequestQuery(state: QueryState): string {
  const pagination = qs.stringify(state, { filter: ["page", "items_per_page"], skipNulls: true });
  const sort = qs.stringify(state, { filter: ["sort", "order"], skipNulls: true });
  const search = isNotEmpty(state.search) ? qs.stringify(state, { filter: ["search"], skipNulls: true }) : "";

  const filter = state.filter
    ? Object.entries(state.filter as Object)
        .filter((obj) => isNotEmpty(obj[1]))
        .map((obj) => {
          return `${obj[0]}=${obj[1]}`;
        })
        .join("&")
    : "";

  const _fkey = qs.stringify(state, { filter: ["_fkey"], skipNulls: true });
  const _level = qs.stringify(state, { filter: ["_level"], skipNulls: true });
  const name = qs.stringify(state, { filter: ["name"], skipNulls: true });

  const _f =
    state.f && Object.keys(state.f).length > 0
      ? Object.entries(state.f as Object)
          .filter((obj) => isNotEmpty(obj[1]))
          .map((obj) => {
            return `${obj[0]}:${obj[1]}`;
          })
          .join(";")
      : "";

  const final_f = state.f && _f && Object.values(state.f).every((o: any) => o !== undefined) ? `f=${_f}` : "";

  const _q =
    state.q && Object.keys(state?.q).length > 0
      ? Object.entries(state.q as Object)
          .filter((obj) => isNotEmpty(obj[1]))
          .map((obj) => {
            return `${obj[0]}:${obj[1]}`;
          })
          .join(";")
      : "";

  const final_q =
    state.q && Object.keys(state?.q).length > 0 && Object.values(state.q).every((o: any) => o !== undefined)
      ? `q=${_q}`
      : "";

  return [pagination, sort, search, filter, name, _fkey, _level, final_f, final_q].filter((f) => f !== "").join("&");
  //.toLowerCase()
}

function stringifyObjectToRequestQuery(object: any): string {
  const filter = object
    ? Object.entries(object as Object)
        .filter((obj) => isNotEmpty(obj[1]))
        .map((obj) => {
          return `${obj[0]}=${obj[1]}`;
        })
        .join("&")
    : "";

  return [filter].filter((f) => f).join("&");
  // .toLowerCase()
}

function parseRequestQuery(query: string): QueryState {
  const cache: unknown = qs.parse(query);
  return cache as QueryState;
}

function calculatedGroupingIsDisabled<T>(isLoading: boolean, data: Array<T> | undefined): boolean {
  if (isLoading) {
    return true;
  }

  return !data || !data.length;
}

function calculateIsAllDataSelected<T>(data: Array<T> | undefined, selected: Array<ID>): boolean {
  if (!data) {
    return false;
  }

  return data.length > 0 && data.length === selected.length;
}

function groupingOnSelect(id: ID, selected: Array<ID>, setSelected: Dispatch<SetStateAction<Array<ID>>>) {
  if (!id) {
    return;
  }

  if (selected.includes(id)) {
    setSelected(selected.filter((itemId) => itemId !== id));
  } else {
    const updatedSelected = [...selected];
    updatedSelected.push(id);
    setSelected(updatedSelected);
  }
}

function groupingOnSelectAll<T>(
  isAllSelected: boolean,
  setSelected: Dispatch<SetStateAction<Array<ID>>>,
  data?: Array<T & { id?: ID }>
) {
  if (isAllSelected) {
    setSelected([]);
    return;
  }

  if (!data || !data.length) {
    return;
  }

  setSelected(data.filter((item) => item.id).map((item) => item.id));
}

// Hook
function useDebounce(value: string | undefined, delay: number) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function print(data?: any) {}

function time_convert(num: number) {
  // Calculate the number of hours by dividing num by 60 and rounding down
  var hours = Math.floor(num / 60);

  // Calculate the remaining minutes by taking the remainder when dividing num by 60
  var minutes = num % 60;

  // Return the result as a string in the format "hours:minutes"
  return hours + ":" + minutes + "h";
}

export {
  createResponseContext,
  stringifyRequestQuery,
  parseRequestQuery,
  calculatedGroupingIsDisabled,
  calculateIsAllDataSelected,
  groupingOnSelect,
  groupingOnSelectAll,
  useDebounce,
  isNotEmpty,
  stringifyObjectToRequestQuery,
  cn,
  print,
  time_convert,
};
