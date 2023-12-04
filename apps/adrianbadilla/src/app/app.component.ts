import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
  selector: 'adrian-badilla-ws-root',
  imports: [RouterModule],
})
export class AppComponent {
  title = 'adrianbadilla';
}
