import PostCard from "./PostCard";

import { useState, useEffect } from "react";


function PostsList()
{
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>{
            setPosts(data);
            setLoading(false);
        })
        .catch(()=>{
            setError("Failed to load posts")
            setLoading(false);
        })
    }, [])

    if(loading)
        return <p>Loading Posts...</p>
    
    if(error)
        return <p>{error}</p>
    
    return(
        <div >
            {posts.map(post=>(
                <PostCard key={post.id} post={post}/>
            ))}
        </div>
    )
}

export default PostsList;