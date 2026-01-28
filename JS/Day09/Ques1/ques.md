### Q1: Pivot Table Transformation (15 mins)

Transform sales data into a pivot table format.

**Input:**

```jsx
const sales = [
  { month: 'Jan', product: 'A', amount: 100 },
  { month: 'Jan', product: 'B', amount: 150 },
  { month: 'Feb', product: 'A', amount: 120 },
  { month: 'Feb', product: 'B', amount: 180 },
  { month: 'Mar', product: 'A', amount: 110 },
  { month: 'Mar', product: 'B', amount: 160 }
];

```

**Expected Output:**

```jsx
{
  A: { Jan: 100, Feb: 120, Mar: 110, total: 330 },
  B: { Jan: 150, Feb: 180, Mar: 160, total: 490 }
}

```