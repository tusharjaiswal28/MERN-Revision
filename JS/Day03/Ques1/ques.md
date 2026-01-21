### Q1: Implement Array.prototype.map

Create your own implementation of the map function.

**Test Case:**

```jsx
const nums = [1, 2, 3, 4, 5];
const doubled = nums.myMap(x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const users = [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }];
const names = users.myMap(u => u.name);
console.log(names); // ['John', 'Jane']

```