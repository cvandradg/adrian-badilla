import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from "./error.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondaryAnimatedButtonComponent } from '@adrianbadilla/shared/components/secondary-animated-button/secondary-animated-button.component';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'adrianbadilla-secondary-animated-button',
    standalone: true,
    template: ` <ng-content></ng-content>`,
})
class SecondaryAnimatedButtonComponentMockComponent {
    @Output() submitEvent = new EventEmitter<never>();

    @Input() small = false;
    @Input() buttonText = 'Some Text';
    @Input() fontawesomeIcon: IconProp = ['fas', 'user'];
}

describe('ErrorComponent', () => {
    let component: ErrorComponent;
    let fixture: ComponentFixture<ErrorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CommonModule, ErrorComponent, RouterModule],
        })
            .overrideComponent(ErrorComponent, {
                remove: {
                    imports: [SecondaryAnimatedButtonComponent],
                },
                add: {
                    imports: [SecondaryAnimatedButtonComponentMockComponent],
                },
            })
            .compileComponents();

        fixture = TestBed.createComponent(ErrorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
