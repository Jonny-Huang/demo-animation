import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ opacity: 1, offset: 0 }),
  style({ transform: 'scale3d(.3, .3, .3)', opacity: 0, offset: 0.5 }),
  style({ opacity: 0, offset: 1 })
]));

export const zoomOut = transition('* => zoomOut', _animate);

// @keyframes zoomOut {
//   from {
//     opacity: 1;
//   }
//   50% {
//     opacity: 0;
//     transform: scale3d(.3, .3, .3);
//   }
//   to {
//     opacity: 0;
//   }
// }

// .zoomOut {
//   animation-name: zoomOut;
// }
