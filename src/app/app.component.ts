import { Component } from '@angular/core';
import { trigger } from '@angular/animations';
import { bounce } from './animations/bounce';
import { flash } from './animations/flash';
import { pulse } from './animations/pulse';
import { rubberBand } from './animations/rubberBand';
import { shake } from './animations/shake';
import { headShake } from './animations/headShake';
import { swing } from './animations/swing';
import { tada } from './animations/tada';
import { wobble } from './animations/wobble';
import { jello } from './animations/jello';
import { bounceIn } from './animations/bounceIn';
import { bounceInDown } from './animations/bounceInDown';
import { bounceInLeft } from './animations/bounceInLeft';
import { bounceInRight } from './animations/bounceInRight';
import { bounceInUp } from './animations/bounceInUp';
import { bounceOut } from './animations/bounceOut';
import { bounceOutDown } from './animations/bounceOutDown';
import { bounceOutLeft } from './animations/bounceOutLeft';
import { bounceOutRight } from './animations/bounceOutRight';
import { bounceOutUp } from './animations/bounceOutUp';
import { fadeIn } from './animations/fadeIn';
import { fadeInDown } from './animations/fadeInDown';
import { fadeInLeft } from './animations/fadeInLeft';
import { fadeInRight } from './animations/fadeInRight';
import { fadeInUp } from './animations/fadeInUp';
import { fadeInDownBig } from './animations/fadeInDownBig';
import { fadeInLeftBig } from './animations/fadeInLeftBig';
import { fadeInRightBig } from './animations/fadeInRightBig';
import { fadeInUpBig } from './animations/fadeInUpBig';
import { fadeOut } from './animations/fadeOut';
import { fadeOutDown } from './animations/fadeOutDown';
import { fadeOutLeft } from './animations/fadeOutLeft';
import { fadeOutRight } from './animations/fadeOutRight';
import { fadeOutUp } from './animations/fadeOutUp';
import { fadeOutDownBig } from './animations/fadeOutDownBig';
import { fadeOutLeftBig } from './animations/fadeOutLeftBig';
import { fadeOutRightBig } from './animations/fadeOutRightBig';
import { fadeOutUpBig } from './animations/fadeOutUpBig';
import { flip } from './animations/flip';
import { flipInX } from './animations/flipInX';
import { flipInY } from './animations/flipInY';
import { flipOutX } from './animations/flipOutX';
import { flipOutY } from './animations/flipOutY';
import { lightSpeedIn } from './animations/lightSpeedIn';
import { lightSpeedOut } from './animations/lightSpeedOut';
import { rotateIn } from './animations/rotateIn';
import { rotateInDownLeft } from './animations/rotateInDownLeft';
import { rotateInDownRight } from './animations/rotateInDownRight';
import { rotateInUpLeft } from './animations/rotateInUpLeft';
import { rotateInUpRight } from './animations/rotateInUpRight';
import { rotateOut } from './animations/rotateOut';
import { rotateOutDownLeft } from './animations/rotateOutDownLeft';
import { rotateOutDownRight } from './animations/rotateOutDownRight';
import { rotateOutUpLeft } from './animations/rotateOutUpLeft';
import { rotateOutUpRight } from './animations/rotateOutUpRight';
import { hinge } from './animations/hinge';
import { jackInTheBox } from './animations/jackInTheBox';
import { rollIn } from './animations/rollIn';
import { rollOut } from './animations/rollOut';
import { zoomIn } from './animations/zoomIn';
import { zoomInDown } from './animations/zoomInDown';
import { zoomInLeft } from './animations/zoomInLeft';
import { zoomInRight } from './animations/zoomInRight';
import { zoomInUp } from './animations/zoomInUp';
import { zoomOut } from './animations/zoomOut';
import { zoomOutDown } from './animations/zoomOutDown';
import { zoomOutLeft } from './animations/zoomOutLeft';
import { zoomOutRight } from './animations/zoomOutRight';
import { zoomOutUp } from './animations/zoomOutUp';
import { slideInDown } from './animations/slideInDown';
import { slideInLeft } from './animations/slideInLeft';
import { slideInRight } from './animations/slideInRight';
import { slideInUp } from './animations/slideInUp';
import { slideOutDown } from './animations/slideOutDown';
import { slideOutLeft } from './animations/slideOutLeft';
import { slideOutRight } from './animations/slideOutRight';
import { slideOutUp } from './animations/slideOutUp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('animationState', [
      bounce, flash, pulse, rubberBand, shake, headShake, swing, tada, wobble, jello,
      bounceIn, bounceInDown, bounceInLeft, bounceInRight, bounceInUp,
      bounceOut, bounceOutDown, bounceOutLeft, bounceOutRight, bounceOutUp,
      fadeIn, fadeInDown, fadeInLeft, fadeInRight, fadeInUp,
      fadeInDownBig, fadeInLeftBig, fadeInRightBig, fadeInUpBig,
      fadeOut, fadeOutDown, fadeOutLeft, fadeOutRight, fadeOutUp,
      fadeOutDownBig, fadeOutLeftBig, fadeOutRightBig, fadeOutUpBig,
      flip, flipInX, flipInY, flipOutX, flipOutY,
      lightSpeedIn, lightSpeedOut,
      rotateIn, rotateInDownLeft, rotateInDownRight, rotateInUpLeft, rotateInUpRight,
      rotateOut, rotateOutDownLeft, rotateOutDownRight, rotateOutUpLeft, rotateOutUpRight,
      hinge, jackInTheBox, rollIn, rollOut,
      zoomIn, zoomInDown, zoomInLeft, zoomInRight, zoomInUp,
      zoomOut, zoomOutDown, zoomOutLeft, zoomOutRight, zoomOutUp,
      slideInDown, slideInLeft, slideInRight, slideInUp,
      slideOutDown, slideOutLeft, slideOutRight, slideOutUp
    ])
  ]
})
export class AppComponent {
  animate_State = '';

  changeState(state: string) {
    this.animate_State = state;
  }

}
