import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transformOrigin: 'top left', animationTimingFunction: 'ease-in-out', offset: 0 }),
  style({ transformOrigin: 'top left', animationTimingFunction: 'ease-in-out', transform: 'rotate3d(0, 0, 1, 80deg)', offset: 0.2 }),
  style({ transformOrigin: 'top left', animationTimingFunction: 'ease-in-out', transform: 'rotate3d(0, 0, 1, 60deg)', opacity: 1, offset: 0.4 }),
  style({ transformOrigin: 'top left', animationTimingFunction: 'ease-in-out', transform: 'rotate3d(0, 0, 1, 80deg)', offset: 0.6 }),
  style({ transformOrigin: 'top left', animationTimingFunction: 'ease-in-out', transform: 'rotate3d(0, 0, 1, 60deg)', opacity: 1, offset: 0.8 }),
  style({ transform: 'translate3d(0, 700px, 0)', opacity: 0, offset: 1 })
]));

export const hinge = transition('* => hinge', _animate);

// @keyframes hinge {
//   0% {
//     transform-origin: top left;
//     animation-timing-function: ease-in-out;
//   }
//   20%,
//   60% {
//     transform: rotate3d(0, 0, 1, 80deg);
//     transform-origin: top left;
//     animation-timing-function: ease-in-out;
//   }
//   40%,
//   80% {
//     transform: rotate3d(0, 0, 1, 60deg);
//     transform-origin: top left;
//     animation-timing-function: ease-in-out;
//     opacity: 1;
//   }
//   to {
//     transform: translate3d(0, 700px, 0);
//     opacity: 0;
//   }
// }

// .hinge {
//   animation-name: hinge;
// }
