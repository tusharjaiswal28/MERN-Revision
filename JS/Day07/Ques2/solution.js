const Users= `https://jsonplaceholder.typicode.com/users`
const Posts= `https://jsonplaceholder.typicode.com/posts`

fetch(Users)
.then(res=>res.json())
.then(users=>{

    fetch(Posts)
    .then(res=>res.json())
    .then(posts=>{

        const postCountMap ={};
        posts.forEach(post=>{
            postCountMap[post.userId]= (postCountMap[post.userId] || 0)+1;
        });

        const userWithPost = users.map(user=>{
            return{
                userId:user.id,
                name:user.name,
                postCount:postCountMap[user.id]||0
            }
        })

        console.log(userWithPost);
    })
    .catch(err=>console.log(`Error from fetch post ${err}`))
})
.catch(err=>console.log(`Error from fetch user ${err}`))