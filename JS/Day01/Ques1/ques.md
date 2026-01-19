### Q1: Nested Array to Categorized Object

Convert a nested array of products into an object grouped by category and sorted by price within each category.

**Input:**

```jsx
const products = [
  ['Electronics', 'Laptop', 999],
  ['Clothing', 'Shirt', 29],
  ['Electronics', 'Mouse', 25],
  ['Clothing', 'Pants', 49],
  ['Electronics', 'Keyboard', 75],
  ['Clothing', 'Jacket', 89]
];

```
**Expected Output:**

```jsx
{
  Electronics: [
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 75 },
    { name: 'Laptop', price: 999 }
  ],
  Clothing: [
    { name: 'Shirt', price: 29 },
    { name: 'Pants', price: 49 },
    { name: 'Jacket', price: 89 }
  ]
}

```