import { atom } from "recoil";

export const otpAtom = atom({
    key: 'otpAtom',
    default:''
})

export const numberAtom = atom ({
    key: 'numberAtom',
    default: ''

})

export const checkOtpAtom = atom({
    key: 'checkOtpAtom',
    default: ''
})

export const loginCompletedState = atom({
  key: 'loginCompletedState',
  default: false,
});