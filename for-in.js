// For --- Of = Array
// For --- In = Object

const college = {
     collegeName : 'Dhaka City College',
     collegeRank : 2,
     haveLab : true,
     haveAC : true,
     totalStudent : 3500,
     Section : ['A', 'B', 'C', 'D','E']
}
// Rule 01

for (key in college) {
     console.log(key + ' = ' + college[key]);
    
}

// Rule 02

for (key in college) {
     const values = college[key];
     console.log(key,' = ',values);
}



