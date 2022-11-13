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

class Queue {
  items: any[];
  constructor(params: any[]) {
    this.items = params;
  }

  enque(item: any) {
    this.items.push(item);
  }

  dequeue() {
    // return and move first element of the queue
    return this.items.shift();
  }

  getItems() {
    return this.items;
  }
}

var rootDiv = document.getElementById('root-container');
var btn = document.getElementById('btn');

let items: any[] = [];
let uploadQueue = new Queue(items);

btn.addEventListener('click', function addProgressBar() {
  const bar = document.createElement('progress');
  bar.style.setProperty('width', '100%');
  rootDiv.append(bar);
  uploadQueue.enque(bar);
  // created line break element
  const linebreak = document.createElement('br');
  rootDiv.append(linebreak);

  for (let i = 0; i < uploadQueue.getItems().length; i++) {
    do {
      // console.log('Queue before:', uploadQueue.getItems().length);
      setTimeout(() => {
        bar.setAttribute('value', '100');
      }, 2000);
      uploadQueue.dequeue();
      // console.log('Queue after:', uploadQueue.getItems().length);
    } while (i != uploadQueue.getItems().length);
  }
});
