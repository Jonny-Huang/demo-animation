import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s ease-in', keyframes([
  style({ opacity: 1, offset: 0 }),
  style({ transform: 'translate3d(100%, 0, 0) skewX(30deg)', opacity: 0, offset: 1 })
]));

export const lightSpeedOut = transition('* => lightSpeedOut', _animate);

// @keyframes lightSpeedOut {
//   from {
//     opacity: 1;
//   }
//   to {
//     transform: translate3d(100%, 0, 0) skewX(30deg);
//     opacity: 0;
//   }
// }

// .lightSpeedOut {
//   animation-name: lightSpeedOut;
//   animation-timing-function: ease-in;
// }
