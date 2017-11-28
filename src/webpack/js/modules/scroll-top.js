import anime from 'animejs';

import {enablePassiveEventListeners} from '../helper/util';

export default class ScrollTop {
  constructor() {
    this.button = document.getElementById('js-scroll-button');
  }

  addEvent() {
    const options = enablePassiveEventListeners() ? {
      passive: true
    } : false;

    this.button.addEventListener('click', this.onClickButton.bind(this), options);
  }

  onClickButton() {
    const scroll = {
      y: window.scrollY || window.pageYOffset
    };

    anime({
      targets: scroll,
      y: 0,
      duration: 350,
      easing: 'easeInOutCubic',
      update: () => {
        console.log(`scrollY: ${scroll.y}`);
        window.scrollTo(0, scroll.y);
      }
    });
  }
}