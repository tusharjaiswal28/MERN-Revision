### Q1: Multi-level Sorting

Sort array of objects by multiple criteria: first by department (ascending), then by salary (descending), then by name (ascending).

**Input:**

```jsx
const employees = [
  { name: 'John', dept: 'Engineering', salary: 80000 },
  { name: 'Alice', dept: 'Engineering', salary: 95000 },
  { name: 'Bob', dept: 'Marketing', salary: 95000 },
  { name: 'Charlie', dept: 'Engineering', salary: 95000 },
  { name: 'Diana', dept: 'Marketing', salary: 95000 },
  { name: 'Eve', dept: 'HR', salary: 70000 }
];

```

**Expected Output:**

```jsx
[
  { name: 'Charlie', dept: 'Engineering', salary: 95000 },
  { name: 'Alice', dept: 'Engineering', salary: 95000 },
  { name: 'John', dept: 'Engineering', salary: 80000 },
  { name: 'Eve', dept: 'HR', salary: 70000 },
  { name: 'Bob', dept: 'Marketing', salary: 95000 },
  { name: 'Diana', dept: 'Marketing', salary: 95000 }
]

```