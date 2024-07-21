import { Box, Typography } from "@mui/material";
import React from "react";
import { GenerateButton } from "../ParaGenerator/GenerateButton";
import { MyOTPField } from "./MyOTPField";
import { useRecoilValue } from "recoil";
import { checkOtpAtom, otpAtom } from "../../state/Otp";
import { useSnackbar } from 'notistack';

export const OtpVerify = React.memo(function OtpVerify() {
  const { enqueueSnackbar } = useSnackbar();
  const otpValue = useRecoilValue(otpAtom);
  const CheckotpValue = useRecoilValue(checkOtpAtom);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (otpValue === CheckotpValue) {
      enqueueSnackbar('OTP verified successfully!', { variant: 'success' });
    } else {
      enqueueSnackbar('OTP verification failed!', { variant: 'error' });
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          width: "100%",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{
            width: "100%",
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography variant="h3" textAlign={"center"}>
            Enter OTP {otpValue}
          </Typography>
          <MyOTPField />
          <GenerateButton name="Verify OTP" />
        </Box>
      </Box>
    </>
  );
});
