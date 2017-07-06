import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transformOrigin: 'center bottom', transform: 'scale(0.1) rotate(30deg)', opacity: 0, offset: 0 }),
  style({ transform: 'rotate(-10deg)', offset: 0.5 }),
  style({ transform: 'rotate(3deg)', offset: 0.7 }),
  style({ transform: 'scale(1)', opacity: 1, offset: 1 })
]));

export const jackInTheBox = transition('* => jackInTheBox', _animate);

// @keyframes jackInTheBox {
//   from {
//     opacity: 0;
//     transform: scale(0.1) rotate(30deg);
//     transform-origin: center bottom;
//   }
//   50% {
//     transform: rotate(-10deg);
//   }
//   70% {
//     transform: rotate(3deg);
//   }
//   to {
//     opacity: 1;
//     transform: scale(1);
//   }
// }

// .jackInTheBox {
//   animation-name: jackInTheBox;
// }
