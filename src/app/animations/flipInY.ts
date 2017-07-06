import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ animationTimingFunction: 'ease-in', transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: 0, offset: 0 }),
  style({ animationTimingFunction: 'ease-in', transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', offset: 0.4 }),
  style({ transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: 1, offset: 0.6 }),
  style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', offset: 0.8 }),
  style({ transform: 'perspective(400px)', offset: 1 })
]));

export const flipInY = transition('* => flipInY', _animate);

// @keyframes flipInY {
//   from {
//     transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
//     animation-timing-function: ease-in;
//     opacity: 0;
//   }
//   40% {
//     transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
//     animation-timing-function: ease-in;
//   }
//   60% {
//     transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
//     opacity: 1;
//   }
//   80% {
//     transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
//   }
//   to {
//     transform: perspective(400px);
//   }
// }

// .flipInY {
//   -webkit-backface-visibility: visible !important;
//   backface-visibility: visible !important;
//   animation-name: flipInY;
// }
