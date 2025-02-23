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

// Task 2 Creating a Manager Class 

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary); // Call parent employee constructor
        this.teamSize = teamSize; // Team size of Manager
    }
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    } // Manager Details
    calculateBonus() {
        return this.salary * 12 * 0.10; // Calculation of Annual Manager Bonus
    }

    // Task 4 Modifications
    calculateAnnualSalary() {
    return this.salary * 12 + this.calculateBonus();
}

};

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); // Creating new Manager Object

console.log(mgr1.getDetails()); // Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
console.log("Bonus:", mgr1.calculateBonus()); // Expected output: 9600

// Task 3 Creating a Company Class

class Company {
    constructor(name) {
        this.name = name; // Company Name
        this.employees = []; // Company Employees
    }; // 
    addEmployee(employee) {
        this.employees.push(employee); // add an employyee to company employee list
    }
    listEmployees() {
        this.employees.forEach(employee => console.log(employee.getDetails())); // list of employees
    }
    // Task 4 Modifications
    calculateTotalPayroll () {
        return this.employees.reduce((total, employee) => {
            return total + employee.calculateAnnualSalary(); // Total Payroll
        }, 0); //  Calculate Total Payroll
    
    }
    
};

// Creating a new company instance and addding employees

const company = new Company("TechCorp"); // declaring company name
company.addEmployee(emp1); // adding an employee
company.addEmployee(mgr1); // adding manager

company.listEmployees(); // list the employees

// Task 4 Implementing a Payroll System

console.log("Total Payroll: $", company.calculateTotalPayroll()); // Expected output: 165600 (assuming emp1 and mgr1 salaries)

