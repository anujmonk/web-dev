import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./exploreItems.js";
const PostSummaryList = () => {
    return(`
    <ul class="list-group">
            ${
                exploreItems.map(items => {
                    return(PostSummaryItem(items));
                }).join('')
            }
    </ul>
    `);
}
export default PostSummaryList;