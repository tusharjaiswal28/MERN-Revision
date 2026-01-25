### Q2: Parallel API Calls with Data Merging (12 mins)

Fetch users and posts separately, then merge them to show each user with their post count.

**APIs:**

- Users: `https://jsonplaceholder.typicode.com/users`
- Posts: `https://jsonplaceholder.typicode.com/posts`

**Expected Output:**

```jsx
[
  { userId: 1, name: 'Leanne Graham', postCount: 10 },
  { userId: 2, name: 'Ervin Howell', postCount: 10 },
  // ...
]

```