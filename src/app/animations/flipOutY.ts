import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'perspective(400px)', offset: 0 }),
  style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', opacity: 1, offset: 0.3 }),
  style({ transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: 0, offset: 1 })
]));

export const flipOutY = transition('* => flipOutY', _animate);

// @keyframes flipOutY {
//   from {
//     transform: perspective(400px);
//   }
//   30% {
//     transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
//     opacity: 1;
//   }
//   to {
//     transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
//     opacity: 0;
//   }
// }

// .flipOutY {
//   -webkit-backface-visibility: visible !important;
//   backface-visibility: visible !important;
//   animation-name: flipOutY;
// }
