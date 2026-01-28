### Q2: Hierarchical Data Aggregation

Aggregate nested transaction data with running totals.

**Input:**

```jsx
const transactions = [
  {
    date: '2024-01-15',
    category: 'Food',
    items: [
      { name: 'Groceries', amount: 50 },
      { name: 'Restaurant', amount: 75 }
    ]
  },
  {
    date: '2024-01-16',
    category: 'Transport',
    items: [
      { name: 'Gas', amount: 40 },
      { name: 'Parking', amount: 10 }
    ]
  },
  {
    date: '2024-01-17',
    category: 'Food',
    items: [
      { name: 'Coffee', amount: 5 }
    ]
  }
];

```

**Expected Output:**

```jsx
{
  Food: { total: 130, count: 3 },
  Transport: { total: 50, count: 2 }
}

```