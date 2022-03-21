import React from "react";
import PostItem from "./PostItem.js";
import postItems from "./post.json";

const PostItems = () => {
    return(
        <>
            {
                postItems.map(post => {
                    return( <PostItem  post={post} />);
                })
            }
    
        </>
    );
}
export default PostItems;