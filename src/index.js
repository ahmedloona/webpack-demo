
import _ from 'lodash';
import myName from './myName';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

function componentOne() {
  let element = document.createElement('div');

  // myName imported from myName.js and used in index.js
  element.innerHTML = myName('Ahmed');

  return element;
}

document.body.appendChild(component());

document.body.appendChild(componentOne());
