import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'scale3d(.3, .3, .3)', opacity: 0, offset: 0 }),
  style({ opacity: 1, offset: 0.5 })
]));

export const zoomIn = transition('* => zoomIn', _animate);

// @keyframes zoomIn {
//   from {
//     opacity: 0;
//     transform: scale3d(.3, .3, .3);
//   }
//   50% {
//     opacity: 1;
//   }
// }

// .zoomIn {
//   animation-name: zoomIn;
// }
