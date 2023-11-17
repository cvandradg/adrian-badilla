import { Directive, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth-service.service';
import { ErrorHandlerService } from '../services/error-handler/error-handler.service';
import { SharedStoreFacade } from '../+state/shared-store.facade';
import { FormBuilder, Validators } from '@angular/forms';
import { Credentials, validations } from '../types/types';

@Directive({
  providers: [],
})
export class firebaseAuthHelper {
  router = inject(Router);
  authService = inject(AuthService);
  formBuilder = inject(FormBuilder);
  facade = inject(SharedStoreFacade);
  errorHelperService = inject(ErrorHandlerService);

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
