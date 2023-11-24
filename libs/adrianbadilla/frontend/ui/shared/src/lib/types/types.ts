import { Validators } from '@angular/forms';
import { FirebaseError } from 'firebase/app';

export type Class = new (any: any) => any;

export const validations = (...validators: any[]) => [
  '',
  [Validators.required, Validators.min(5), Validators.max(30), ...validators],
];

export type generalError = { status: boolean; message: string; error: any };

export const deepCopy = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj || ''));
};

export type Credentials = {
  user: string;
  pass: string;
};

export type AppError = {
  status: boolean;
  message: string;
  error: any;
};

export interface BaseComponentState extends Object {
  error: AppError | null;
  loading: boolean;
}

export interface AngularFireError extends Error {
  rejection: FirebaseError;
}

export type NothingOr<T> = T | null | undefined;
