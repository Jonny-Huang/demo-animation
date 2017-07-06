import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s ease-in-out', keyframes([
  style({ transform: 'translateX(0)', offset: 0 }),
  style({ transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065 }),
  style({ transform: 'translateX(5px) rotateY(7deg)', offset: 0.185 }),
  style({ transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315 }),
  style({ transform: 'translateX(2px) rotateY(3deg)', offset: 0.435 }),
  style({ transform: 'translateX(0)', offset: 0.5 })
]));

export const headShake = transition('* => headShake', _animate);

// @keyframes headShake {
//   0% {
//     transform: translateX(0);
//   }
//   6.5% {
//     transform: translateX(-6px) rotateY(-9deg);
//   }
//   18.5% {
//     transform: translateX(5px) rotateY(7deg);
//   }
//   31.5% {
//     transform: translateX(-3px) rotateY(-5deg);
//   }
//   43.5% {
//     transform: translateX(2px) rotateY(3deg);
//   }
//   50% {
//     transform: translateX(0);
//   }
// }

// .headShake {
//   animation-timing-function: ease-in-out;
//   animation-name: headShake;
// }
