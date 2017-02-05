var array = [];

function forLoop(array) {

  for (var i = 1; i <= 25; i++) {
    if (i === 1) {
    array.push("I am 1 strange loop.");
  } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
return array;
}

forLoop(array);

function  whileLoop (n) {
  var counter = n;
  while (counter > 0) {
    console.log(counter);
    counter--;
  }
  return 'done';
};

var array = [];

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0){
    return array;
  }



};
