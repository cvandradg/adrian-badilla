import { BaseComponent } from '../classes/base-component';
import { AuthService } from '../services/auth-service.service';
import { HelperService } from '../services/helperFunctions.service';
import { ErrorHandlerService } from '../services/error-handler.service';
import { SharedStoreFacade } from '../+state/shared-store.facade';
import { firestoreDatabaseService } from '../services/firestore-database.service';

export const SERVICES = [
  AuthService,
  BaseComponent,
  HelperService,
  SharedStoreFacade,
  ErrorHandlerService,
  firestoreDatabaseService,
];
