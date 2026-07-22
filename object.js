const sahed = {
     name : 'Abd. Sahed',
     isWearChasma : true,
     loveKola : true, 
     age : 19,
     'has brother' : true,
     'brother name' : 'Sohel Rana'
}
console.log(sahed);
console.log(sahed.name);
console.log(sahed.isWearChasma);

console.log(sahed['has brother']);
console.log(sahed['brother name']);

// Delete 

delete sahed.loveKola;
console.log(sahed);

delete sahed['brother name'];
console.log(sahed);


// Key and Values with Objects 

const key = Object.keys(sahed);
console.log(key);

const values = Object.values(sahed);
console.log(values);

const entries = Object.entries(sahed);
console.log(entries);
