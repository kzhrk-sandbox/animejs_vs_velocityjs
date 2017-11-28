import highlight from 'highlight.js';

import {enablePassiveEventListeners} from './helper/util';
import AnimeModalNg from './modules/anime-modal-ng';
import AnimeModalGood from './modules/anime-modal-good';
import VelocityModal from './modules/velocity-modal';
import ScrollTop from './modules/scroll-top';

const options = enablePassiveEventListeners() ? {
  passive: true
} : false;

window.addEventListener('load', ()=>{
  const animeModalGood = new AnimeModalGood();
  const animeModalNg = new AnimeModalNg();
  const velocityModal = new VelocityModal();
  const scrollTop = new ScrollTop();

  // syntax highlight
  const codeElements = document.querySelectorAll('code');

  [].forEach.call(codeElements, (code)=>{
    highlight.highlightBlock(code);
  });

  animeModalGood.init();
  animeModalGood.addEvent();

  animeModalNg.init();
  animeModalNg.addEvent();

  velocityModal.init();
  velocityModal.addEvent();

  scrollTop.addEvent();

}, options);