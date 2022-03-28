import WhoToFollowListItem from "./WhoToFollowListItem.js";
import { useSelector } from "react-redux";
const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return(
        <>
        <span className="list-group-item bg-dark text-white"><strong>Who to follow</strong></span>
            {
                who.map(who => {
                    return(<WhoToFollowListItem who={who}/>);
                    })
            }
        </>
    );
}
export default WhoToFollowList;