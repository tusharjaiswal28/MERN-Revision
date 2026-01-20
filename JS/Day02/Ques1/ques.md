### Q1: Object Array to Nested Structure

Transform flat employee data into a hierarchical department structure with salary statistics.

**Input:**

```jsx
const employees = [
  { id: 1, name: 'John', dept: 'Engineering', salary: 80000 },
  { id: 2, name: 'Jane', dept: 'Engineering', salary: 95000 },
  { id: 3, name: 'Bob', dept: 'Marketing', salary: 65000 },
  { id: 4, name: 'Alice', dept: 'Engineering', salary: 88000 },
  { id: 5, name: 'Charlie', dept: 'Marketing', salary: 72000 },
  { id: 6, name: 'Diana', dept: 'HR', salary: 70000 }
];

```

**Expected Output:**

```jsx
{
  Engineering: {
    employees: ['John', 'Jane', 'Alice'],
    avgSalary: 87666.67,
    totalCount: 3
  },
  Marketing: {
    employees: ['Bob', 'Charlie'],
    avgSalary: 68500,
    totalCount: 2
  },
  HR: {
    employees: ['Diana'],
    avgSalary: 70000,
    totalCount: 1
  }
}

```