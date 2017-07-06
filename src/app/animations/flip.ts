import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ animationTimingFunction: 'ease-out', transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)', offset: 0 }),
  style({ animationTimingFunction: 'ease-out', transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)', offset: 0.4 }),
  style({ animationTimingFunction: 'ease-in', transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)', offset: 0.5 }),
  style({ animationTimingFunction: 'ease-in', transform: 'perspective(400px) scale3d(.95, .95, .95)', offset: 0.8 }),
  style({ animationTimingFunction: 'ease-in', transform: 'perspective(400px)', offset: 1 })
]));

export const flip = transition('* => flip', _animate);

// @keyframes flip {
//   from {
//     transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
//     animation-timing-function: ease-out;
//   }
//   40% {
//     transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
//     animation-timing-function: ease-out;
//   }
//   50% {
//     transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
//     animation-timing-function: ease-in;
//   }
//   80% {
//     transform: perspective(400px) scale3d(.95, .95, .95);
//     animation-timing-function: ease-in;
//   }
//   to {
//     transform: perspective(400px);
//     animation-timing-function: ease-in;
//   }
// }

// .animated.flip {
//   -webkit-backface-visibility: visible;
//   backface-visibility: visible;
//   animation-name: flip;
// }
