import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { errorReducerState, updateResetError } from "../../redux/Slicer/errorHadlingSlicer";
import { RootState } from "src/redux/store";
import { Toaster, toast } from "sonner";

import { ENUM_STATUS_CODE } from "../../helpers";
import { useLocation } from "react-router-dom";

const ErrorBoundryMain = () => {
  const { errorMessage, isError, isWarning, warningMessage, errorCode, successMessage } = useSelector(
    (state: RootState) => errorReducerState(state)
  );
  // const { toast } = useToast();
  const dispatch = useDispatch();
  // const { logoutHandling,currentUser } = useAuth();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isError && errorMessage) {
      toast.error(errorMessage, { duration: 2000 });
    } else if (isWarning && warningMessage) {
      toast.warning(warningMessage, { duration: 3000 });
    }

    dispatch(updateResetError());
  }, [errorMessage, isError, isWarning, warningMessage, errorCode, dispatch]);

  useEffect(() => {
    switch (errorCode) {
      case ENUM_STATUS_CODE?.AUTHENDICATE:
      case ENUM_STATUS_CODE?.RUN_TIME_ERROR:
      case ENUM_STATUS_CODE?.EXIXTS_CONTACT:
        if (errorMessage) {
          toast.error(errorMessage, { duration: 2000 });
        }

        break;

      case ENUM_STATUS_CODE?.SUCCESS:
      case ENUM_STATUS_CODE?.CREATE:
        if (successMessage) {
          toast.success(successMessage, { duration: 2000 });
        }
        break;

      case ENUM_STATUS_CODE?.SESSION_EXPIRED:
        toast.warning(errorMessage || "Session expired or invalid", {
          duration: 2000,
        });
        break;

      default:
        break;
    }

    dispatch(updateResetError());
  }, [errorCode, successMessage, errorMessage, dispatch]);

  return (
    <div>
      {pathname.includes("auth") || pathname.includes("trade") ? (
        <Toaster position="top-center" richColors />
      ) : (
        <Toaster position="top-right" richColors />
      )}
      {/* <Toaster position="top-right" richColors /> */}
    </div>
  );
};

export default ErrorBoundryMain;
