import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
  style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 }),
  style({ transform: 'scale3d(1, 1, 1)', offset: 1 })
]));

export const pulse = transition('* => pulse', _animate);

// @keyframes pulse {
//   from {
//     transform: scale3d(1, 1, 1);
//   }
//   50% {
//     transform: scale3d(1.05, 1.05, 1.05);
//   }
//   to {
//     transform: scale3d(1, 1, 1);
//   }
// }

// .pulse {
//   animation-name: pulse;
// }
