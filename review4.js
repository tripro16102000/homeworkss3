
let customerOrder;
let shopItems = [`Jeans`, `T-Shirt`, `Socks`];

while (true) {
    customerOrder = prompt(`Hi there, welcome to shop admin panel, what do you want(C, R, U, D)?
    `);
    if (customerOrder == `r`) {
        console.log(`The current items are: `);
        for (let i = 0; i < shopItems.length; i++) {
            console.log(shopItems[i]);
        }
        break;
    } else if (customerOrder == `c`) {
        let newItem = prompt(`Enter the name of new item`);
            shopItems.push(newItem);
            alert(`Done!`);
        
    } else if (customerOrder == `u`) {
        let positionUpdate = Number(prompt(`Enter the position you want to update`));
        while (positionUpdate >= arrayItems.length) {
            alert(`The number you pass is larger than array length -1`);
            positionUpdate = Number(prompt(`Enter the position you want to update again`));
        }
        shopItems[positionUpdate] = prompt(`Enter the new name`);
    } else if (customerOrder == `d`) {
        let positionDelete = prompt(`Enter the position you want to delete`);
        while (positionDelete >= arrayItems.length) {
            alert(`The number you pass is larger than array length -1`);
            positionDelete = Number(prompt(`Enter the position you want to delete again`));
        }
        shopItems.splice(positionDelete, 1);
        alert(`Done!`);
    } else {
        alert(`This command is not support`);
    }
}