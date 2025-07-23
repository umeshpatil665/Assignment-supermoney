import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
const QUERIES = {
  USERS_LIST: "users-list",
};

const camelCase = (input: any): string | undefined => {
  if (typeof input !== "string") {
    console.error("Expected a string but received:", input);
    return undefined; // Or handle it differently
  }

  return input.replace(/[\W_]+(.|$)/g, (_: any, chr: string) => " " + chr.toUpperCase()).trim();
};

export const toPercent = (value: any) => {
  return (value * 100).toFixed(2);
};

export const convertMinutesToHoursAndMinutes = (mins: number): string => {
  const hours = Math.floor(mins / 60);
  const remainingMinutes = mins % 60;

  return remainingMinutes == 0 ? `${hours} h` : `${hours} h ${remainingMinutes} m`;
};

export enum ENUM_STATUS_CODE {
  SUCCESS = 200,
  AUTHENDICATE = 401,
  CREATE = 201,
  RUN_TIME_ERROR = 503,
  SESSION_EXPIRED = 440,
  ACCESS_DENIED = 403,
  EXIXTS_CONTACT = 400,
}

let ERROR_CODES = [400, 500, 404, 503, 403];

export const NUMBER_PATTERN = "^[0-9]+$";
export const REGEXP_ONLY_DIGITS_AND_CHARS = "^[a-zA-Z0-9]+$";

export { QUERIES, ERROR_CODES };
