import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginInterface {
  username: string;
  password: string;
}

type Subscription = 'free' | 'monthly' | 'yearly';

interface PersonalInfoInterface {
  firstName: string;
  lastName: string;
  middleName: string;
  birthday: string;
  email: string;
  gender: 'male' | 'female';
  isAdult: boolean;
}

interface UserState {
  login: LoginInterface;
  subscription: Subscription;
  personalInfo: PersonalInfoInterface;
  creditCard: string;
  isAgreePersonalData: boolean;
  isAgreeCookiePolicy: boolean;
}

const initialState: UserState = {
  login: {
    username: '',
    password: '',
  },
  subscription: 'free',
  personalInfo: {
    firstName: '',
    lastName: '',
    middleName: '',
    birthday: '',
    email: '',
    gender: 'male',
    isAdult: false,
  },
  creditCard: '',
  isAgreePersonalData: false,
  isAgreeCookiePolicy: false,
};

export const userSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    storeLogin: (state, action: PayloadAction<LoginInterface>) => {
      state.login = action.payload;
    },
  },
});

export const { storeLogin } = userSlice.actions;
export default userSlice.reducer;
