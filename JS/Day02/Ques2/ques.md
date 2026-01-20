### Q2: Deep Property Extraction

Extract and flatten specific nested properties from a complex object structure.

**Input:**

```jsx
const orders = [
  {
    orderId: 'A1',
    customer: { name: 'John', location: { city: 'NYC', country: 'USA' } },
    items: [
      { product: 'Laptop', quantity: 1, price: 999 },
      { product: 'Mouse', quantity: 2, price: 25 }
    ]
  },
  {
    orderId: 'A2',
    customer: { name: 'Jane', location: { city: 'LA', country: 'USA' } },
    items: [
      { product: 'Keyboard', quantity: 1, price: 75 }
    ]
  }
];

```

**Expected Output:**

```jsx
[
  { orderId: 'A1', customerName: 'John', city: 'NYC', totalAmount: 1049 },
  { orderId: 'A2', customerName: 'Jane', city: 'LA', totalAmount: 75 }
]

```