import PostItem from "./PostItem.js";
import postItems from "./post.js";

const PostItems = () => {
    return(`
    
            ${
                postItems.map(items => {
                    return(PostItem(items));
                }).join('')
            }
    
    `);
}
export default PostItems;