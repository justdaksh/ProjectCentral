import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { OtpVerify } from "./OtpVerify";
import { loginCompletedState } from "../../state/Otp";
import { SnackbarProvider } from "notistack";

export function ProtectedOtpVerify() {
  const loginCompleted = useRecoilValue(loginCompletedState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginCompleted) {
      navigate("/Login");
    }
  }, [loginCompleted, navigate]);

  return (
    <SnackbarProvider maxSnack={3}>
      <OtpVerify />
    </SnackbarProvider>
  );
}

export default ProtectedOtpVerify;
