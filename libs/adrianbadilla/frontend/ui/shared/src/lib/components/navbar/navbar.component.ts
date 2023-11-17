import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { firebaseAuthHelper } from '../../classes/firebaseAuthHelper';
import { MODULES } from '../../exports/export-modules';

@Component({
  standalone: true,
  selector: 'adrianbadilla-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MODULES, RouterModule],
})
export class NavbarComponent extends firebaseAuthHelper implements OnInit {
  screenWidth = 0;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
}
