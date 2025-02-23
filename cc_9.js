// Task 1 Creating an Employee Class

class Employee {
    constructor(name, id, department, salary) {
        this.name = name; // Employee Name
        this.id = id; // Employee ID
        this.department = department; // Employee Department
        this.salary = salary; // Employee Salary
    };
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}. Department: ${this.department}, Salary: $${this.salary}`;
    };
    calculateAnnualSalary() {
        return this.salary * 12; // Calculation for Annual Salary
    }
}; // Employee Details

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); // Creating a new employee object

console.log(emp1.getDetails()); // Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
console.log("Annual Salary:", emp1.calculateAnnualSalary()); // Expected output: 60000
