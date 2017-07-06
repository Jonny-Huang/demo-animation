import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s ease-out', keyframes([
  style({ transform: 'translate3d(100%, 0, 0) skewX(-30deg)', opacity: 0, offset: 0 }),
  style({ transform: 'skewX(20deg)', opacity: 1, offset: 0.6 }),
  style({ transform: 'skewX(-5deg)', opacity: 1, offset: 0.8 }),
  style({ transform: 'none', opacity: 1, offset: 1 })
]));

export const lightSpeedIn = transition('* => lightSpeedIn', _animate);

// @keyframes lightSpeedIn {
//   from {
//     transform: translate3d(100%, 0, 0) skewX(-30deg);
//     opacity: 0;
//   }
//   60% {
//     transform: skewX(20deg);
//     opacity: 1;
//   }
//   80% {
//     transform: skewX(-5deg);
//     opacity: 1;
//   }
//   to {
//     transform: none;
//     opacity: 1;
//   }
// }

// .lightSpeedIn {
//   animation-name: lightSpeedIn;
//   animation-timing-function: ease-out;
// }
