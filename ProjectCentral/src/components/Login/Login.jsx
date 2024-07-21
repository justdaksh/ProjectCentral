import { Box, Typography } from "@mui/material";
import { GenerateButton } from "../ParaGenerator/GenerateButton";
import { MyNumberField } from "./MyNumberField";
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from "recoil";
import { loginCompletedState, otpAtom } from "../../state/Otp";

export function Login() {
  const setotpAtom = useSetRecoilState(otpAtom);
  const setLoginCompleted = useSetRecoilState(loginCompletedState);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    setotpAtom(Math.floor(Math.random() * 90000) + 10000);
    setLoginCompleted(true);
    navigate('/Login/otpVerification');
  };
  return (
    <>
      <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            width: '100%',
            padding: '20px',
            boxSizing: 'border-box',
        }}
      >
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{
            width: '100%',
            maxWidth: '500px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <Typography variant="h3" textAlign={"center"}>Login Via OTP</Typography>
          <MyNumberField />
          <GenerateButton name="Send OTP" />
        </Box>
      </Box>
    </>
  );
}
