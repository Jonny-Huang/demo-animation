import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'rotate3d(0, 0, 1, 15deg)', offset: 0.2 }),
  style({ transform: 'rotate3d(0, 0, 1, -10deg)', offset: 0.4 }),
  style({ transform: 'rotate3d(0, 0, 1, 5deg)', offset: 0.6 }),
  style({ transform: 'rotate3d(0, 0, 1, -5deg)', offset: 0.8 }),
  style({ transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
]));

export const swing = transition('* => swing', _animate);

// @keyframes swing {
//   20% {
//     transform: rotate3d(0, 0, 1, 15deg);
//   }
//   40% {
//     transform: rotate3d(0, 0, 1, -10deg);
//   }
//   60% {
//     transform: rotate3d(0, 0, 1, 5deg);
//   }
//   80% {
//     transform: rotate3d(0, 0, 1, -5deg);
//   }
//   to {
//     transform: rotate3d(0, 0, 1, 0deg);
//   }
// }

// .swing {
//   transform-origin: top center;
//   animation-name: swing;
// }
