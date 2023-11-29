import { Directive, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SharedStoreFacade } from '../+state/shared-store.facade';
import { FormBuilder, Validators } from '@angular/forms';
import { Credentials, validations } from '../types/types';
import { Fontawesome } from './fontawesome';

@Directive()
export class BaseComponent extends Fontawesome {
  router = inject(Router);
  formBuilder = inject(FormBuilder);
  facade = inject(SharedStoreFacade);

  loginInputForm = this.formBuilder.group({
    user: validations(Validators.email),
    pass: validations(),
  });

  get credentials(): Credentials {
    return {
      user: this.loginInputForm.get('user')?.value as string,
      pass: this.loginInputForm.get('pass')?.value as string,
    };
  }
}
