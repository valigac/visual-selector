/* State */
const vsState = {
  query: 'p',
  background:  'rgba(163, 255, 35, 0.4)',
}

let selector = vsState.query;
let border = vsState.border;
let background = vsState.background;
let vsBoxes = [];
let alpha = 0.4;

function vsDrawConsole() {
  let c = document.createElement('div');
  let btn = document.createElement('div');
  let input = document.createElement('input');

  btn.onclick = function(e) {
    if (c.style.width === '100%')
      c.style.width = '20px';
    else
      c.style.width = '100%';
  }

  input.onkeydown = function(e) {
    if (e.key === 'Enter') {
      vsChangeSetting(e.target.value);
      e.target.value = '';
    }
  }

  vsStyleConsole(c, btn, input);

  let text = document.createElement('div');
  text.innerText = 'vs_command: ';
  text.style.fontFamily  = 'consolas';
  text.style.position = 'absolute';
  text.style.left = '5px';
  text.style.bottom = '13px';
  text.style.fontSize = '17px';
  text.style.color = '#ef2353';

  c.appendChild(text);
  c.appendChild(input);
  c.appendChild(btn);
  document.body.appendChild(c);
}

function vsStyleConsole(c, btn, input) {
  c.style.width = '100%';
  c.style.height = '40px';
  c.style.backgroundColor = 'white';
  c.style.position = 'fixed';
  c.style.bottom = '0px';
  c.style.borderLeft = '1px solid black';
  c.style.borderTop = '1px solid black';
  c.style.overflow = 'hidden';
  c.style.right = '0px';

  btn.style.backgroundColor = '#ef2353';
  btn.style.width = '10px';
  btn.style.height = '10px';
  btn.style.position = 'absolute';
  btn.style.right = '4px';
  btn.style.top = '4px';
  btn.style.borderRadius = '50%';
  btn.style.cursor = 'pointer';

  input.type = 'text';
  input.style.fontFamily = 'consolas';
  input.style.position = 'absolute';
  input.style.outline = '0px';
  input.style.border = '0px';
  input.style.left = '115px';
  input.style.width = '80%';
  input.style.fontFamily = '20px';
  input.style.bottom = '8px';
  input.style.height = '28px';
  input.style.fontSize = '17px';
}

function vsShowElements() {
  let elements = document.querySelectorAll(vsState.query);
  for (let i = 0; i < elements.length; i++) {
    let rect = elements[i].getBoundingClientRect();
    let tmp = document.createElement('div');
    tmp.style.backgroundColor = vsState.background;
    tmp.style.position = 'absolute';
    tmp.style.top = rect.top + 'px';
    tmp.style.left = rect.left + 'px';
    tmp.style.width = rect.width + 'px';
    tmp.style.height = rect.height + 'px';
    vsBoxes.push(tmp);
    document.body.appendChild(tmp);
  }
}

function vsRemoveBoxes() {
  for (let i = 0; i < vsBoxes.length; i++) {
    vsBoxes[i].remove();
  }
}

function vsChangeSetting(command) {
  vsRemoveBoxes();
  if (command.startsWith('color ')) {
    vsState.background = hexToRGB(command.replace('color ', ''));
    vsShowElements();
  } else if (command.trim() === 'help') {
    alert('To change the selector write its name, for example "p" or ".class"\n' +
    'For color change write color #hexcolor, for example "color #ff0000"');
    vsShowElements();
  } else if (command.trim() === 'show') {
      vsShowElements();
  } else if (command.trim() === 'hide') {
      console.log('hiding - write "show" for show');
  } else {
      vsState.query = command;
      vsShowElements();
  }
}

function hexToRGB(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
}

window.onresize = function(e) {
  vsRemoveBoxes();
  vsShowElements();
}

vsDrawConsole()
vsShowElements();
