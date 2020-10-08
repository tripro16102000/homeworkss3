let userInput = prompt('Enter the squence of number, separated by commas (,)');
let Numbers = userInput.split(',');
let sum = 0;
for (let i = 0; i <Numbers.length; i++){
    sum += Number(Numbers[i]);
}
alert(`The sum of them is ${sum}`);

