function Add() {
    let valuename = document.getElementById('name').value;
    let firstName = document.getElementById("showname");

    firstName.innerHTML = valuename;
    localStorage.setItem('fName', valuename);

    let valuesurname = document.getElementById('surname').value;
    let lastName = document.getElementById("showsurname");

    lastName.innerHTML = valuesurname;
    localStorage.setItem('lName', valuesurname);

    let valueSalary = document.getElementById('salaries').value;
    let salary = document.getElementById("showsalary");

    salary.innerHTML = valueSalary;
    localStorage.setItem('salaryy', valueSalary);
}

let willShowName = document.getElementById('showname');
let firstName = localStorage.getItem('fName');
willShowName.innerHTML =firstName;

let willShowSurname = document.getElementById('showsurname');
let lastName = localStorage.getItem('lName');
willShowSurname.innerHTML =lastName;

let willShowSalary = document.getElementById('showsalary');
let monthly = localStorage.getItem('salaryy');
willShowSalary.innerHTML =monthly;

