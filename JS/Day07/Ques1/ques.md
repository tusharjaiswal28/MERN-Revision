### Q1: Sequential API Calls with Dependency

Fetch a user, then fetch their posts, then fetch comments for their first post.

**APIs:**

- User: `https://jsonplaceholder.typicode.com/users/1`
- Posts: `https://jsonplaceholder.typicode.com/posts?userId=1`
- Comments: `https://jsonplaceholder.typicode.com/comments?postId={postId}`

**Expected Output:**

```jsx
{
  userName: 'Leanne Graham',
  firstPostTitle: 'Post Title',
  commentCount: 5,
  topComment: 'First comment text...'
}
```