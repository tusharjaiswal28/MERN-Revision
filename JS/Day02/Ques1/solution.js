const employees = [
    { id: 1, name: 'John', dept: 'Engineering', salary: 80000 },
    { id: 2, name: 'Jane', dept: 'Engineering', salary: 95000 },
    { id: 3, name: 'Bob', dept: 'Marketing', salary: 65000 },
    { id: 4, name: 'Alice', dept: 'Engineering', salary: 88000 },
    { id: 5, name: 'Charlie', dept: 'Marketing', salary: 72000 },
    { id: 6, name: 'Diana', dept: 'HR', salary: 70000 }
];

let res = {};

for (let i = 0; i < employees.length; i++) {
    let emp = employees[i];
    let dept = emp.dept;

    if (!res[dept]) {
        res[dept] = {
            employees: [],
            avgSalary: 0,
            totalCount: 0
        }
    }

    res[dept].employees.push(emp.name);
    res[dept].avgSalary += emp.salary;
    res[dept].totalCount += 1;

}

for (let dept in res) {
    let avg = res[dept].avgSalary / res[dept].totalCount;

    res[dept].avgSalary = Number(avg.toFixed(2));

    delete res[dept].totalSalary;
}

console.log(res);