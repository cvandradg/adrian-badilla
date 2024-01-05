import { createAction, props } from '@ngrx/store';
import { User } from 'firebase/auth';
import { AppError, NothingOr } from '../types/general-types';

export const showLoading = createAction('[SharedStore Page] showLoading');
export const hideLoading = createAction('[SharedStore Page] hideLoading');
export const signOut = createAction('[SharedStore Page] Sign Out');

export const toggleSidenavbar = createAction(
  '[SharedStore Page] Toggle Sidenavbar'
);

export const createAccount = createAction('[SharedStore Page] Create Account');

export const accessAccount = createAction(
  '[SharedStore Page] Access Account',
  props<{ user: string; pass: string }>()
);
export const getAccessSuccess = createAction(
  '[SharedStore Page] Get Access Success',
  props<{ user: User }>()
);
export const getAccessFailure = createAction(
  '[SharedStore Page] Get Access Failure',
  props<AppError>()
);

export const getSession = createAction('[SharedStore Page] Get Session');
export const getSessionSuccess = createAction(
  '[SharedStore Page] Get Session Success',
  props<{ user: User }>()
);
export const getSessionFailure = createAction(
  '[SharedStore Page] Get Session Failure',
  props<AppError>()
);

export const googleSignin = createAction('[SharedStore Page] Google Signin');
export const googleSigninSuccess = createAction(
  '[SharedStore Page] Google Signin Success',
  props<{ user: User }>()
);
export const googleSigninFailure = createAction(
  '[SharedStore Page] Google Signin Failure',
  props<AppError>()
);

export const requestPassReset = createAction(
  '[SharedStore Page] Request Pass Reset',
  props<{ email: string }>()
);

export const actionFailure = createAction(
  '[SharedStore Page] On Action Failure',
  props<AppError>()
);

export const storeUser = createAction(
  '[SharedStore Page] Store User Info',
  props<{ user: NothingOr<User> }>()
);
export const sendEmailVerification = createAction(
  '[SharedStore Page] Send Email Verification',
  props<{ user: User }>()
);
