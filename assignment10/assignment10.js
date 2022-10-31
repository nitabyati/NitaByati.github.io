//problems 1-3, 6
const json = {

    "name":"Tech Stars",
    "website":"www.techstars.site",
    "employees":[
    {
        "name": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": "40000",
        "raiseEligible": "true",
        "wfh": "true"
    },
    {
        "name": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": "18500",
        "raiseEligible": "true",
        "wfh": "false"

    },
    {
        "name": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": "21200",
        "raiseEligible": "false",
        "wfh": "false"

    },  
    
    {
            "name": "Anna",
            "department": "Tech",
            "designation": "Executive",
            "salary": "25600",
            "raiseEligible": "false",
            "wfh": "true"
        }
    
        ]
};
//problem 4: 

console.log(json);

function TotalSalary(){
    const sum = [40000,18500,21200,25699].reduce((partialSum, a) => partialSum + a, 0);
}

//problem 5

function updateSalary (){
    if (raiseEligible = true) {
        salary = 'update';
    }
    
}
