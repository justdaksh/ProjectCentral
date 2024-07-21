import React, { useState, useRef } from "react";
import { TextField, Box } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { checkOtpAtom } from "../../state/Otp";

export const MyOTPField = React.memo(function MyOTPField() {
  const  setCheckOtpAtomValue = useSetRecoilState(checkOtpAtom);
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      const otpString = newOtp.join('');
      setCheckOtpAtomValue(parseInt(otpString, 10) || 0);
      if (value !== '' && index < 4) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
      {otp.map((digit, index) => (
        <TextField
          key={index}
          inputRef={inputRefs[index]}
          value={digit}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          variant="outlined"
          color="secondary"
          inputProps={{
            maxLength: 1,
            style: { textAlign: 'center' }
          }}
          sx={{ width: '3rem' }}
        />
      ))}
    </Box>
  );
});