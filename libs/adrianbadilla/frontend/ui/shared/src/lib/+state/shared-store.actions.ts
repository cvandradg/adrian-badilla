import { createAction, props } from '@ngrx/store';

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
  props<{ userInfo: any }>()
);
export const getAccessFailure = createAction(
  '[SharedStore Page] Get Access Failure',
  props<{ status: boolean; message: string; error: any }>()
);

export const getSession = createAction('[SharedStore Page] Get Session');
export const getSessionSuccess = createAction(
  '[SharedStore Page] Get Session Success',
  props<{ userInfo: any }>()
);
export const getSessionFailure = createAction(
  '[SharedStore Page] Get Session Failure',
  props<{ status: boolean; message: string; error: any }>()
);

export const googleSignin = createAction('[SharedStore Page] Google Signin');
export const googleSigninSuccess = createAction(
  '[SharedStore Page] Google Signin Success',
  props<{ userInfo: any }>()
);
export const googleSigninFailure = createAction(
  '[SharedStore Page] Google Signin Failure',
  props<{ status: boolean; message: string; error: any }>()
);

export const requestPassReset = createAction(
  '[SharedStore Page] Request Pass Reset',
  props<{ email: string }>()
);

export const actionFailure = createAction(
  '[SharedStore Page] On Action Failure',
  props<{ status: boolean; message: string; error: any }>()
);

export const storeUserInfo = createAction(
  '[SharedStore Page] Store User Info',
  props<{ userInfo: any }>()
);
export const sendEmailVerification = createAction(
  '[SharedStore Page] Send Email Verification',
  props<{ userInfo: any }>()
);
