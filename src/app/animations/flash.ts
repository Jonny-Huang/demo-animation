import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ opacity: 1, offset: 0 }),
  style({ opacity: 0, offset: 0.25 }),
  style({ opacity: 1, offset: 0.5}),
  style({ opacity: 0, offset: 0.75 }),
  style({ opacity: 1, offset: 1 })
]));

export const flash = transition('* => flash', _animate);

// @keyframes flash {
//   from,
//   50%,
//   to {
//     opacity: 1;
//   }
//   25%,
//   75% {
//     opacity: 0;
//   }
// }

// .flash {
//   animation-name: flash;
// }
