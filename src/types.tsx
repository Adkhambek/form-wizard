export type Subscription = 'free' | 'monthly' | 'yearly';

export type Gender = 'male' | 'female';

export interface PersonalInfoInterface {
  firstName: string;
  lastName: string;
  middleName: string;
  birthday: string;
  email: string;
  gender: Gender;
  isAdult: boolean;
}
