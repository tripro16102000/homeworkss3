const arr = [3, 4, 6, -9, 10, -88, 2 ];
let  addNum = Number(prompt('enter a number'));
let found ;
for(let i = 0; i < arr.length; i++){
if(addNum=== arr[i]){
found= true;
alert(`${addNum} is found in my array at index ${i} `);
break;
}
}
if(!found){
alert(`${addNum} i not found in my array`);
}

