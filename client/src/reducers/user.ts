import { ToggleFocus } from '@components/UserToggle';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

interface UserCommonInfo {
  email: string;
  name: string;
  password: string;
  phone: string;
}

export interface UserInfo extends UserCommonInfo {
  payment: {
    bank: string;
    creditNumber: string;
    expiryDate: string;
    cvc: number;
  };
}

export interface DriverInfo extends UserCommonInfo {
  driver: {
    licenseNumber: string;
    car: {
      carType: string;
      carNumber: string;
    };
  };
}

export interface SignUpRequest {
  type: typeof SIGN_UP_REQUEST;
  data: UserInfo | DriverInfo;
  userType: ToggleFocus;
}

export interface SignUpSuccess {
  type: typeof SIGN_UP_SUCCESS;
}

export interface SignUpFailure {
  type: typeof SIGN_UP_FAILURE;
  error: string;
}

// 회원가입 액션 크링
export const signUpRequest = (
  data: UserInfo | DriverInfo,
  userType: ToggleFocus,
): SignUpRequest => ({
  type: SIGN_UP_REQUEST,
  data,
  userType,
});
export const signUpSuccess = (): SignUpSuccess => ({ type: SIGN_UP_SUCCESS });
export const signUpFailure = (error: string): SignUpFailure => ({
  type: SIGN_UP_FAILURE,
  error,
});
