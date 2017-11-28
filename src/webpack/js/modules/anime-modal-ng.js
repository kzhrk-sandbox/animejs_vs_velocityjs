import anime from 'animejs';
import {enablePassiveEventListeners} from '../helper/util';

import templateModal from '../../pug/modal';
import modalCss from '../../scss/modal';

export default class AnimeModal {
  constructor() {
    this.isOpen = false;
    this.isAnimate = false;
    this.button = document.getElementById('js-anime-modal-button');
  }

  init() {
    const div = document.createElement('div');
    div.insertAdjacentHTML('beforeend', templateModal(modalCss));

    this.overlay = div.firstChild;
    this.modal = this.overlay.querySelector('.js-modal');
    this.buttonClose = this.overlay.querySelector('.js-modal-close');

    document.body.appendChild(this.overlay);
  }

  addEvent() {
    const options = enablePassiveEventListeners() ? {
      passive: true
    } : false;

    this.button.addEventListener('click', this.onClickButton.bind(this), options);
    this.overlay.addEventListener('click', this.onClickOverlay.bind(this), options);
    this.buttonClose.addEventListener('click', this.onClickButtonClose.bind(this), options);
  }

  onClickButton() {
    if (this.isOpen) {
      this.close();
    }
    else {
      this.open();
    }
  }

  onClickOverlay(e) {
    if (e.target === this.overlay) {
      this.close();
    }
  }

  onClickButtonClose() {
    this.close();
  }

  open() {
    if (this.isAnimate) return;

    this.isAnimate = true;

    this.overlay.style.display = 'block';

    anime({
      targets: this.overlay,
      opacity: [0, 1],
      complete: ()=>{
        this.isOpen = true;
        this.isAnimate = false;
      },
      update: ()=>{
        console.log(`opacity: ${this.overlay.style.opacity}`);
      }
    });
  }

  close() {
    if (this.isAnimate) return;

    this.isAnimate = true;

    anime({
      targets: this.overlay,
      opacity: [1, 0],
      complete: ()=>{
        this.overlay.style.display = 'none';
        this.isOpen = false;
        this.isAnimate = false;
      },
      update: ()=>{
        console.log(`opacity: ${this.overlay.style.opacity}`);
      }
    });
  }
}
