// table

const table = document.querySelector('#pixelCanvas');

// Select color input

const colorPicker = document.querySelector('#colorPicker');

// Select size input

const inputHeight = document.querySelector('#inputHeight');
const inputWeight = document.querySelector('#inputWeight');

// When size is submitted by the user, call makeGrid()

const submitButton = document.querySelector('input[type=submit]');

submitButton.onclick = function (e) {
    // prevent the input from submiting the form and reload tha page to keep the changes 
    e.preventDefault();
    // clear grid comes first because it have to check before creating the first grid, else it will creat a grid then always tells that it has childnodes 
    clearGrid();
    // make the table rows and the td
    makeGrid();
    // on click draw the pixels 
    mouseDraw();
}

// the function which makes the grid 
function makeGrid() {
    "use strict";

    let tableHeight = inputHeight.value;
    let tableWidth = inputWeight.value;
    
    // creat td(height) and tr(width)
    
    // this is a nested loop which creat table rows (tr) then add any number of td inside the tr but not more than 80 td or 20 tr
    for (let i = 1; i <= tableHeight; i += 1) {
        
            let tr = document.createElement('tr');
            table.appendChild(tr);
        
        // this creats the td as and put them in the tr
        for (let j = 1; j <= tableWidth && j <= 80; j += 1) {
            let td = document.createElement('td');
            td.classList = 'empty';
            tr.appendChild(td);
                        
        }
    }
    
}

// clear grid if it exists 

function clearGrid() {
    if (table.hasChildNodes()) {
        table.innerHTML = '';
    }
}

// to do : use for each function and (this) method


function mouseDraw() {
    let point = document.querySelectorAll('.empty');
    let color = colorPicker.value;
    let isClicked = false;
    
    // for each point in the grid table 
    point.forEach(function(element) {
      
        // when element is hoverd 
      element.onmouseover  = function  () {
          if (isClicked) {
              element.style.backgroundColor = color;
              element.classList = 'doted';              
          } 
          
          window.console.log(isClicked);
      }
      
      
      // when element is clicked
      element.onmousedown = function () {
            isClicked = true;
            element.style.backgroundColor = color;
            element.classList = 'doted';
      }
      
      // when document isn't clicked - setting it to elemtn itself causes problems 
      document.onmouseup = function () {
           isClicked = false;
      }
      
    });
    
    // disable the drag because is causes come issues 
    document.ondragstart = function (e) {
        e.preventDefault();
    }
    
}
