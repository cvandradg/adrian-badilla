import { Directive } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import {
  faBookOpenCover,
  faPlateUtensils,
  faTurkey,
  faLayerPlus,
  faTrashCan,
  faCaretRight,
  faFilePen,
  faXmark,
  faPersonDress,
  faPerson,
  faJar,
} from '@fortawesome/pro-duotone-svg-icons';

import {
  faClipboardQuestion,
  faRightToBracket,
  faEnvelopeCircleCheck,
} from '@fortawesome/pro-light-svg-icons';

import { faGripLines } from '@fortawesome/pro-thin-svg-icons';

import {
  faPlus,
  faBolt,
  faDrumstick,
  faBowlRice,
  faPeanuts,
} from '@fortawesome/sharp-solid-svg-icons';

import {
  faArrowRight,
  faXmark as faXmarkSolid,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGoogle,
  faTwitter,
  faFacebookF,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

import {
  faSpinnerThird,
  faUser,
  faCircleNotch,
  faMessageExclamation,
  faBars,
  faRotateBack,
  faPotFood,
  faSalad,
  faDumbbell,
  faCommentsQuestionCheck,
  faShirt,
  faTelescope,
  faHeartPulse,
  faPersonDollyEmpty,
} from '@fortawesome/pro-solid-svg-icons';
import { faHouseTree } from '@fortawesome/pro-regular-svg-icons';
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";

@Directive()
export class Fontawesome {
  constructor(private library: FaIconLibrary) {
    library?.addIcons(
      faJar,
      faBolt,
      faPlus,
      faUser,
      faBars,
      faXmark,
      faSalad,
      faCheck,
      faShirt,
      faPerson,
      faGoogle,
      faTurkey,
      faFilePen,
      faPeanuts,
      faPotFood,
      faTwitter,
      faDumbbell,
      faTrashCan,
      faBowlRice,
      faGripLines,
      faDrumstick,
      faLayerPlus,
      faTelescope,
      faFacebookF,
      faHouseTree,
      faInstagram,
      faCaretRight,
      faArrowRight,
      faXmarkSolid,
      faRotateBack,
      faHeartPulse,
      faPersonDress,
      faCircleNotch,
      faSpinnerThird,
      faBookOpenCover,
      faPlateUtensils,
      faRightToBracket,
      faWhatsappSquare,
      faPersonDollyEmpty,
      faClipboardQuestion,
      faMessageExclamation,
      faEnvelopeCircleCheck,
      faCommentsQuestionCheck
    );
  }
}
