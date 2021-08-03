import '../scss/styles.scss';
import Test from './test';

const test = new Test();
test.initComponent();

const btn = document.querySelector('button');
const img = document.querySelector('.image-demo');

//using display image when clicking
btn.onclick = function() {
  img.style.display = 'block';
};