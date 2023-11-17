import { AuthService } from '../services/auth/auth-service.service';
import { HelperService } from '../services/helperFunctions.service';
import { firebaseAuthHelper } from '../classes/firebaseAuthHelper';
import { ErrorHandlerService } from '../services/error-handler/error-handler.service';

export const SERVICES = [
  HelperService,
  AuthService,
  ErrorHandlerService,
  firebaseAuthHelper,
];
