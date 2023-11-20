import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '@adrianbadilla/shared/components/navbar/navbar.component';
import { AuthService } from '@adrianbadilla/shared/services/auth-service.service';
import { ErrorHandlerService } from '@adrianbadilla/shared/services/error-handler.service';

@Component({
  selector: 'adrianbadilla-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent
  ],
  providers: [AuthService, ErrorHandlerService],
})
export class AppComponent { }
