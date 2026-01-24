import { useEffect, useState } from "react";
import Comments from "./Comments";


function PostCard({ post }) {
    const [user, setUser] = useState(null);
    const [showComments, setShowComments] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then(res => res.json)
            .then(data => setUser(data))
    }, [post.userId])

    return (
        <div style={{border: "1px solid black", margin:"20px", padding:"10px", background:"white"}}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>


            <div>
                <button onClick={()=>setShowComments(!showComments)} >💬 Comments</button>
            </div>

            {showComments && <Comments postId={post.id}/>}
        </div>
    )
}

export default PostCard