import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./exploreItems.json";
const PostSummaryList = () => {
    return(
        <>
    <ul class="list-group">
            {
                exploreItems.map(post => {
                    return(<PostSummaryItem post= {post}/>);
                })
            }
    </ul>
    </>
    );
}
export default PostSummaryList;