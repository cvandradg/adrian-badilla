import { StrengthMeterComponent } from '../components/strength-meter/strength-meter.component';
import { PrimaryAnimatedButtonComponent } from '../components/primary-animated-button/primary-animated-button.component';
import { SecondaryAnimatedButtonComponent } from '../components/secondary-animated-button/secondary-animated-button.component';
import { TertiaryAnimatedButtonComponent } from '../components/tertiary-animated-button/tertiary-animated-button.component';
import { StatusMessageComponent } from '../components/status-message/status-message.component';
import { NavbarComponent } from '../components/navbar/navbar.component';

export const COMPONENTS = [
  StatusMessageComponent,
  StrengthMeterComponent,
  PrimaryAnimatedButtonComponent,
  SecondaryAnimatedButtonComponent,
  TertiaryAnimatedButtonComponent,
  StrengthMeterComponent,
  NavbarComponent
] as const;

export * from '../components/status-message/status-message.component';
export * from '../components/strength-meter/strength-meter.component';
export * from '../components/primary-animated-button/primary-animated-button.component';
export * from '../components/tertiary-animated-button/tertiary-animated-button.component';
export * from '../components/secondary-animated-button/secondary-animated-button.component';
