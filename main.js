import { adjustHue, complement, tint } from 'polished';
import './style.css';

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
//   <div>hello</div>
// `

let col = 'rgb(250,180,180)';
let bg = 'rgb(230,230,230)';

document.querySelector('a[id="title"]').addEventListener('mouseenter', (e) => {
  const timer = setInterval(() => {
    col = adjustHue(1, col);
    e.target.style.color = col;
  });

  e.target.addEventListener(
    'mouseleave',
    () => {
      e.target.style.color = 'inherit';
      clearInterval(timer);
    },
    { once: true }
  );
});

// setInterval(() => {
//   const title = document.querySelector('a:hover[id="title"]');
//   col = adjustHue(1, col);
//   if (title) {
//     title.style.color = col;
//   }
//   // document.body.style['background-color'] = complement(col);
// }, 10);
