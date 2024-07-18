import { atom, atomFamily } from "recoil";

export const Age = atom({
    key: 'age',
    default: 10, 
  });

export const details = atomFamily({
  key: 'details',
  default: ({ name, amount }) => ({
    name,
    amount,
  }),
});