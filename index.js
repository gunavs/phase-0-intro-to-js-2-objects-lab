// Write your solution in this file
const employee = {name : "", streetAddress : ""};

function updateEmployeeWithKeyAndValue(employee,somekey, somevalue) {
    const employeecopy = {...employee}
    employeecopy[somekey] = somevalue;
    return employeecopy;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,somekey, somevalue) {
    employee[somekey] = somevalue;
    return employee;
}

function deleteFromEmployeeByKey(employee,somekey) {
    const employeecopy = {...employee}
    delete employeecopy[somekey];
    return employeecopy;
}

function destructivelyDeleteFromEmployeeByKey(employee,somekey) {
    delete employee[somekey];
    return employee;
}