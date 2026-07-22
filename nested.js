const college = {
     collegeName : 'Dhaka City College',
     collegeRank : 2,
     haveLab : true,
     haveAC : true,
     totalStudent : 3500,
     Department : {
          totalDepartment : 20,
          totalStaff : 200,
          departmentHead :{
               physicsDepartment : 'Rakib Sir',
               biologyDepartment : 'Hasan Sir',
               chemistyDepartment : 'Jannat Mam',
               englishDepartment : 'Mitu shree Mam',
               mathDepartment : 'Somirone Sir'
          }
     }
}

console.log(college['collegeName']);
console.log(college.Department);
console.log(college.Department['departmentHead']);
console.log(college.Department.departmentHead.chemistyDepartment);