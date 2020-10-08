let inputNums = prompt("Enter a squence of Numbers, seperated by commas (,)").split(",");
  
let minNum = Math.min(...inputNums);
  
alert(`The smallest number is ${minNum}`);