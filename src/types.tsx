export interface LoginInterface {
  username: string;
  password: string;
  confirmPassword: string;
}

export interface AgreementsInterface {
  isAgreePersonalData: boolean;
  isAgreeCookiePolicy: boolean;
}

export type Subscription = 'free' | 'monthly' | 'yearly';

type Gender = 'male' | 'female';

export interface PersonalInfoInterface {
  firstName: string;
  lastName: string;
  middleName: string;
  birthday: string;
  email: string;
  gender: Gender;
  isAdult: boolean;
}
