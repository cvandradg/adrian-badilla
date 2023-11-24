import { BaseComponent } from '../classes/base-component';
import { AuthService } from '../services/auth-service.service';
import { HelperService } from '../services/helperFunctions.service';
import { ErrorHandlerService } from '../services/error-handler.service';

export const SERVICES = [
  HelperService,
  AuthService,
  ErrorHandlerService,
  BaseComponent,
];
