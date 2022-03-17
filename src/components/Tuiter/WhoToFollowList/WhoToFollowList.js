import WhoToFollowListItem from "./WhoToFollowListItem.js";
import FollowItems from "./FollowItems.json";
const WhoToFollowList = () => {
    return(
        <>
        <span className="list-group-item bg-dark text-white"><strong>Who to follow</strong></span>
            {
                FollowItems.map(who => {
                    return(<WhoToFollowListItem who={who}/>);
                    })
            }
        </>
    );
}
export default WhoToFollowList;