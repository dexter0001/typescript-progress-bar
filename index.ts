// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

appDiv.innerHTML = `<div id="root-container">
<button id="btn" (click)="addProgressBar()">
  <span>Add Progress Bar</span>
</button></br>
</div>`;

var rootDiv = document.getElementById('root-container');
var btn = document.getElementById('btn');

btn.addEventListener('click', function addProgressBar() {
  const bar = document.createElement('progress');
  rootDiv.append(bar);

  // created line break element
  const linebreak = document.createElement('br');
  rootDiv.append(linebreak);

  // var el = document.getElementById('bar');
  setTimeout(() => {
    bar.setAttribute('value', '50');
  }, 1000);

  setTimeout(() => {
    bar.setAttribute('value', '100');
  }, 10000);
});

// btn?.addEventListener('click', function addProgressBar() {
//   appDiv.innerHTML += `<progress id="file2" value="10" max="100">32%</progress>`;
// });

// addProgressBar() {

//   this.rootDiv = document.getElementById('root-container');
//   // create progress bar element
//   const bar = document.createElement('progress');
//   this.rootDiv.append(bar);
//   this.fillTheBar(bar);

//   // created line break element
//   const linebreak = document.createElement("br");
//   this.rootDiv.append(linebreak);

// };

// fillTheBar(el: any) {

//   setTimeout(() => {
//     el.setAttribute('value', '50');
//   }, 1000);

//   // setTimeout(() => {
//   //   el.setAttribute('value', '100');
//   // }, 10000);

// }
