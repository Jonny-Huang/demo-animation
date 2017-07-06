import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'perspective(400px)', offset: 0 }),
  style({ transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: 1, offset: 0.3 }),
  style({ transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: 0, offset: 1 })
]));

export const flipOutX = transition('* => flipOutX', _animate);

// @keyframes flipOutX {
//   from {
//     transform: perspective(400px);
//   }
//   30% {
//     transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
//     opacity: 1;
//   }
//   to {
//     transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
//     opacity: 0;
//   }
// }

// .flipOutX {
//   animation-name: flipOutX;
//   -webkit-backface-visibility: visible !important;
//   backface-visibility: visible !important;
// }
