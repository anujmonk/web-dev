const WhoToFollowListItem = (who) => {
    return(`
    <div class="list-group">
    <span class="list-group-item bg-dark">
    <div class="row align-items-center">
        <div class="col-2">
            <img class="wd-image-icon2 float-start" src="${who.avatarIcon}">
        </div>
        <div class="col-6">
            <div class="row">
                <span><strong class="wd-font-size-side text-white">${who.userName} </strong><i
                        class="fa fa-check-circle text-white"></i></span>
            </div>
            <div class="row">
                <small class="text-muted">${who.handle}</small>
            </div>
        </div>
        <div class="col-4">
            <button type="" class="btn btn-light btn-sm rounded-pill float-end">Follow</button>
        </div>
    </div>
</span>
    </div>
    `);
}
export default WhoToFollowListItem;