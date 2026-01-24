import { useEffect, useState } from "react";

function Comments({postId})
{
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(res=>res.json())
        .then(data=>{
            setComments(data)
            setLoading(false)
        })
    }, [postId]);

    if(loading)
        return <p>Loading Comments...</p>

    return(
        <div style={{margin:"20px"}}>
            {comments.map(comment=>(
                <div key={comment.id}>
                    <strong>{comment.email}</strong>
                    <p>{comment.body}</p>
                </div>
            ))}
        </div>
    )
}

export  default Comments