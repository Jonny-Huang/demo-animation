import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
  style({ transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3 }),
  style({ transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4 }),
  style({ transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5 }),
  style({ transform: 'scale3d(.95, 1.05, 1)', offset: 0.65 }),
  style({ transform: 'scale3d(1.05, .95, 1)', offset: 0.75 }),
  style({ transform: 'scale3d(1, 1, 1)', offset: 1 })
]));

export const rubberBand = transition('* => rubberBand', _animate);

// @keyframes rubberBand {
//   from {
//     transform: scale3d(1, 1, 1);
//   }
//   30% {
//     transform: scale3d(1.25, 0.75, 1);
//   }
//   40% {
//     transform: scale3d(0.75, 1.25, 1);
//   }
//   50% {
//     transform: scale3d(1.15, 0.85, 1);
//   }
//   65% {
//     transform: scale3d(.95, 1.05, 1);
//   }
//   75% {
//     transform: scale3d(1.05, .95, 1);
//   }
//   to {
//     transform: scale3d(1, 1, 1);
//   }
// }

// .rubberBand {
//   animation-name: rubberBand;
// }
