import {
  OnInit,
  inject,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MODULES } from '../../exports/export-modules';
import { BaseComponent } from '../../classes/base-component';
import { AuthService } from '../../services/auth-service.service';

@Component({
  standalone: true,
  selector: 'adrianbadilla-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MODULES],
})
export class NavbarComponent extends BaseComponent implements OnInit {
  authService = inject(AuthService);

  screenWidth = 0;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
}
