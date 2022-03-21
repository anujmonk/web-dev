import React from 'react';

const PostItem = ({post}) => {
    
  return (
      <>
        <div className ="row mt-2 wd-border-bottom">
            <div className ="col-1">
                <img className="rounded-circle img-fluid mx-auto d-block" src={post.handlerImage} alt=""></img>
            </div>
            <div className ="col-11">
                <div className="row">
                <div>
                    <span className="text-white"> <strong className="text-white">{post.handlerName} </strong></span>
                    <i className="fa fa-solid fa-check-circle text-white"></i>
                    <span className="text-muted"> {post.handle} </span>
                    <span className="text-muted">{post.time} </span>
                    <i className="fa fa-solid fa-ellipsis float-end mr-2"></i>
                </div>
                </div>
                <div className="row mb-2">
                    <span className="text-white">{post.title}</span>
                </div>
                
                <div className="card bg-black rounded wd-border-color">
                    <img src={post.image} className="card-img-top wd-border-bottom" alt=""></img>

                    { (post.body_head===undefined && post.body_text===undefined) ? null :<span className="p-2">
                    <p className="bg-black text-white m-0">{post.body_head}</p>
                    <p className="bg-black text-muted m-0">{post.body_text}</p>
                    </span>}
                    
                </div>
                <div className="m-2">
                    <div className="row">
                        <div className="col-3">
                            <i className="fa fa-light fa-comment"></i>
                            <span className="text-muted"> {post.comment}</span>
                        </div>
                        <div className="col-3">
                            <i className="fa fa-solid fa-retweet"></i>
                            <span className="text-muted"> {post.retweet}</span>
                        </div>
                        <div className="col-3">
                            <i className="fa fa-light fa-heart"></i>
                            <span className="text-muted"> {post.heart}</span>
                        </div>
                        <div className="col-3">
                            <i class="fa fa-solid fa-upload"></i>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </>
    )
};
export default PostItem;
