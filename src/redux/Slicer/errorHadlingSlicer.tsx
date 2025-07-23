import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";

interface ErrorBounderyState {
    isError: boolean,
    errorMessage: string | undefined
    warningMessage: string | undefined
    isWarning: boolean,
    errorCode:number|null,
    successMessage:string | undefined
    infoMessage:string|undefined,
    isInfo:boolean
}

const initialState: ErrorBounderyState = {
    errorMessage: undefined,
    warningMessage:undefined,
    isError: false,
    isWarning:false,
    errorCode:null,
    successMessage:undefined,
    infoMessage:undefined,
    isInfo:false
}


export const errorHadlingSlicer = createSlice({
    name: 'errorHadlingSlicer',
    initialState,
    reducers: {
        updateError: (state, action: PayloadAction<any>) => {
            state.isError = true;
            state.errorMessage = action.payload;
            state.warningMessage=undefined;
            state.infoMessage=undefined
         
        },
        updateSuccessMess: (state, action: PayloadAction<any>) => {
       
            state.successMessage = action.payload;
            state.warningMessage=undefined
            state.infoMessage=undefined
        },
        updateResetError: (state) => {
            state.isError = false;
            state.isWarning=false
            state.errorMessage = undefined;
            state.warningMessage=undefined
            state.errorCode=null
            state.successMessage=undefined
            state.isInfo=false;
            state.infoMessage=undefined
        },
        updateWarning: (state, action: PayloadAction<any>) => {
            state.isWarning = true;
            state.warningMessage = action.payload;
            state.errorMessage=undefined
            state.infoMessage=undefined
        },
        updateErrorCode:(state, action: PayloadAction<any>) => {
            
            state.errorCode = action.payload;
       
        },
        updateInfo:(state, action: PayloadAction<any>) => {
            state.isInfo = true;
            state.infoMessage = action.payload;
            state.errorMessage=undefined
            state.warningMessage=undefined
        },

    }
})


export const { updateError, updateResetError,updateWarning,updateErrorCode,updateSuccessMess,updateInfo } = errorHadlingSlicer.actions;
export const errorReducerState = (state: RootState) => state.errorBoundry;
export default errorHadlingSlicer.reducer;


