import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'none', offset: 0 }),
  style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.222 }),
  style({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333 }),
  style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444 }),
  style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555 }),
  style({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666 }),
  style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777 }),
  style({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888 }),
  style({ transform: 'none', offset: 1 })
]));

export const jello = transition('* => jello', _animate);

// @keyframes jello {
//   from,
//   11.1%,
//   to {
//     transform: none;
//   }
//   22.2% {
//     transform: skewX(-12.5deg) skewY(-12.5deg);
//   }
//   33.3% {
//     transform: skewX(6.25deg) skewY(6.25deg);
//   }
//   44.4% {
//     transform: skewX(-3.125deg) skewY(-3.125deg);
//   }
//   55.5% {
//     transform: skewX(1.5625deg) skewY(1.5625deg);
//   }
//   66.6% {
//     transform: skewX(-0.78125deg) skewY(-0.78125deg);
//   }
//   77.7% {
//     transform: skewX(0.390625deg) skewY(0.390625deg);
//   }
//   88.8% {
//     transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
//   }
// }

// .jello {
//   animation-name: jello;
//   transform-origin: center;
// }
