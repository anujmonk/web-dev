import WhoToFollowListItem from "./WhoToFollowListItem.js";
import FollowItems from "./FollowItems.js";
const WhoToFollowList = () => {
    return(`
        <span class="list-group-item bg-dark text-white"><strong>Who to follow</strong></span>
            ${
                FollowItems.map(items => {
                    return(WhoToFollowListItem(items));
                }).join('')
            }
    `);
}
export default WhoToFollowList;