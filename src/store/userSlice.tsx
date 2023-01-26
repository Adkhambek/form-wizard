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

interface AgreementsInterface {
  isAgreePersonalData: boolean;
  isAgreeCookiePolicy: boolean;
}

interface UserState {
  login: LoginInterface;
  subscription: Subscription;
  personalInfo: PersonalInfoInterface;
  creditCard: string;
  agreements: AgreementsInterface;
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
  agreements: {
    isAgreePersonalData: false,
    isAgreeCookiePolicy: false,
  },
};

export const userSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    storeLogin: (state, action: PayloadAction<LoginInterface>) => {
      state.login = action.payload;
    },
    storeSubscription: (state, action: PayloadAction<Subscription>) => {
      state.subscription = action.payload;
    },
    storePersonalInfo: (
      state,
      action: PayloadAction<PersonalInfoInterface>
    ) => {
      state.personalInfo = action.payload;
    },
    storeCreditCard: (state, action: PayloadAction<string>) => {
      state.creditCard = action.payload;
    },
    storeAgreements: (state, action: PayloadAction<AgreementsInterface>) => {
      state.agreements = action.payload;
    },
  },
});

export const {
  storeLogin,
  storeSubscription,
  storePersonalInfo,
  storeCreditCard,
  storeAgreements,
} = userSlice.actions;

export default userSlice.reducer;
