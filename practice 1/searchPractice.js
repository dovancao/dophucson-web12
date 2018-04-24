'use strict'

function search(input, target) {
  let index = input.indexOf(target);
  if(index === null){
	document.write("indexOf found String :" + -1);
  }else if( index !=0){
	document.write("indexOf string :" + index);
  }
}

module.exports = search
