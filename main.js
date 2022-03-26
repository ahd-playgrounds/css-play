import { adjustHue, complement, tint } from 'polished';
import './style.css';

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
//   <div>hello</div>
// `
const title = document.querySelector('h1[id="title"]');

let col = 'rgb(250,180,180)';
let bg = 'rgb(230,230,230)';

setInterval(() => {
  col = adjustHue(1, col);
  title.style.color = col;
  // document.body.style['background-color'] = complement(col);
}, 10);
