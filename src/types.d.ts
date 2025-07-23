// export interface User {
//     accessToken: string;
//     refreshToken: string;
// }

import { IRegistration } from "./Modules/Auth/Regsitration/Components/steps/modules";

interface UserData {
    "typeOfCompany": any,
    "rcNumber": any,
    "comapnyName": any,
    "countrycode": any,
    "businessPhoneNumber": any,
    "businessEmail": any,
    "comapnyAddress1": any,
    "comapnyAddress2": any,
    "typeOfRepresentative": any,
    "designationOfRepresentative": any,
    "nameOfRepresentive": any,
    "NationalIdentificationNumber": any,
    "nationality": any,
    "bankVerificationNumber": any,
    "passportNumber": any,
    "passportExpiry": any,
    "cerpacNumber": any,
    "cerpacExpiry": any,
    "password": any,
    "securityQuestion1": any,
    "securityAnswer1": any,
    "securityQuestion2": any,
    "securityAnswer2": any,
    "securityQuestion3": any,
    "securityAnswer3": any,
    "is_emial_verified": any,
    "accessToken": any,
    "refreshToken": any
}

interface ILogin {
    isLoggedIn: boolean;
    isLoading: boolean;
    error: boolean;
    errorMessasge: string | undefined,
    user: any;
    accessToken: string;
    refreshToken: string;
    user_id: string | undefined;
    attempts: number,
    bussienssEmail: string | undefined;
    isNewUser: boolean
}

interface LoginResponse {
    accessToken: string;
    refreshToken: string | undefined
}

interface IregistrationRequest {
    activeTab: number,
    registrationData: IRegistration,
    isLoading: boolean,
    error: boolean,
    message: string | undefined,
    totalTabs: number
}

interface ICreateNewEmployeePostData {
    surname: any,
    userid: any,
    givenname: any,
    mereg_no: any,
    typeOfEmployee: any,
    designation: any,
    countryorigin: any,
    nationality: any,
    dob: any,
    sex: any,
    ismarried: any,
    passportnumber: any,
    passportexpiry: any,
    uploadpassport: any,
    cerpac_number: any,
    cerpac_expiry: any,
    cerpac_front: any,
    cerpac_back: any,
    visatype: any,
    visanumber: any,
    visaexpiracydate: any,
    workstatus: any,
    comapnyname: any,
    empnumber: any,
    empcode: any,
    empemail: any,
    empadress1: any,
    empaddress2: any,
    country: any,
    state: any,
    city: any,
    zipcode: any,
    employee_profile_photo: any,
    dependent: any
}

interface ILoginRequestData {
    businessEmail?: string;
    password?: string
}

interface IgetUserByTokenRequest {
    
    accessToken: string
}

interface UserProfile {
    // Define the structure of the user profile here
    // For example: name: string, age: number, etc.
}

type IsomeFiledRequired = {
    designation_of_representative: boolean;
    name_of_representative: boolean;
    national_identification_number: boolean;
    nationality_of_representative: boolean;
    bank_verification_number: boolean;
    passport_number: boolean;
    passport_expiry: boolean;
    cerpac_number: boolean;
    cerpac_expiry: boolean;
};


type optionsType = {
    value: string;
    label: string;
    icons?: string;
    disabled?: boolean;
    key?: string;
  };