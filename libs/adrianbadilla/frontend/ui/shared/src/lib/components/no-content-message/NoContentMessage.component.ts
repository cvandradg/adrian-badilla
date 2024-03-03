import { BaseComponent } from '@adrianbadilla/shared/classes/base-component';
import { ChangeDetectionStrategy, Component, OnInit,  } from '@angular/core';

@Component({
  standalone: true,
  selector: 'adrianbadilla-no-content-message',
  templateUrl: './NoContentMessage.component.html',
  styleUrl: './NoContentMessage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class NoContentMessageComponent extends BaseComponent implements OnInit {
  screenWidth = 0;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
}
