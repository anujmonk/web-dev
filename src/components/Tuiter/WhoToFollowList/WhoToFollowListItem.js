import React from "react";


const WhoToFollowListItem = ( { who }
) => {
    return(
        <>
    <div className="list-group">
    <span className="list-group-item bg-dark">
    <div className="row align-items-center">
        <div className="col-2">
            <img className="wd-image-icon2 float-start" src={who.avatarIcon} alt="NASA"/>
        </div>
        <div className="col-6">
            <div className="row">
                <span><strong className="wd-font-size-side text-white">{who.userName} </strong><i
                        className="fa fa-check-circle text-white"></i></span>
            </div>
            <div className="row">
                <small className="text-muted">@{who.handle}</small>
            </div>
        </div>
        <div className="col-4">
            <button type="" className="btn btn-light btn-sm rounded-pill float-end">Follow</button>
        </div>
    </div>
</span>
    </div>
    </>
    );
}
export default WhoToFollowListItem;