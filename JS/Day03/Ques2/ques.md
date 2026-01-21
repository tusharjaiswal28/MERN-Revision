### Q2: Implement Array.prototype.filter

Create your own implementation of the filter function.

**Test Case:**

```jsx
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = nums.myFilter(x => x % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

const products = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Phone', price: 699, inStock: false },
  { name: 'Tablet', price: 499, inStock: true }
];
const available = products.myFilter(p => p.inStock && p.price < 800);
console.log(available); // [{ name: 'Tablet', price: 499, inStock: true }]

```