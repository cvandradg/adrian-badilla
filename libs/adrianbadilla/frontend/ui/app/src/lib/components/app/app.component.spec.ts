import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { NavbarComponent } from '@adrianbadilla/shared/components/navbar/navbar.component';

@Component({
  selector: 'adrianbadilla-navbar',
  standalone: true,
  template: ` <ng-content></ng-content>`,
})
class NavbarComponentMockComponent {}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    })
      .overrideComponent(AppComponent, {
        remove: {
          imports: [NavbarComponent],
        },
        add: {
          imports: [NavbarComponentMockComponent],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
