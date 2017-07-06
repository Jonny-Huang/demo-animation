import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
  style({ transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)', offset: 0.1 }),
  style({ transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)', offset: 0.2 }),
  style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.3 }),
  style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.4 }),
  style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.5 }),
  style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.6 }),
  style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.7 }),
  style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.8 }),
  style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.9 }),
  style({ transform: 'scale3d(1, 1, 1)', offset: 1 })
]));

export const tada = transition('* => tada', _animate);

// @keyframes tada {
//   from {
//     transform: scale3d(1, 1, 1);
//   }
//   10%,
//   20% {
//     transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
//   }
//   30%,
//   50%,
//   70%,
//   90% {
//     transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
//   }
//   40%,
//   60%,
//   80% {
//     transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
//   }
//   to {
//     transform: scale3d(1, 1, 1);
//   }
// }

// .tada {
//   animation-name: tada;
// }
