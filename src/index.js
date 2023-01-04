
import './index.html';
import './index.scss';
import imageexample from './img/INSTALL_EXTENSION_STEP_2_IMAGE.png'
import { mathem, sum } from './modules/calc';

const img = new Image();
img.src = imageexample;
console.log(mathem(2, 4));

console.log(sum(6, 2));
