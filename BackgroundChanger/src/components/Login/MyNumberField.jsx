import { TextField } from "@mui/material"
import React from "react"
import { useRecoilState } from "recoil";
import { numberAtom } from "../../state/Otp";

export const MyNumberField = React.memo(function MyNumberField(){
    const [numberValue , setnumberValue] = useRecoilState(numberAtom);
    const handleChange = (event) => {
        setnumberValue(parseInt(event.target.value,10) || numberValue);
    }
    return (
        <>
          <TextField
          color="secondary"
          label="Enter Your Number"
          defaultValue="+91"
          onChange={handleChange}
        >
        </TextField>
        </>
    )
});