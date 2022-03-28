import React from 'react';
import {useDispatch} from "react-redux";
import Attachment from './attachment';
import TuitStats from './tuit-stats';

const TuitListItem = ({key,tuit}) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})};
  return (
      <>
        <div className ="row mt-2 wd-border-bottom">
            <div className ="col-1">
                <img className="rounded-circle img-fluid mx-auto d-block" src={tuit['logo-image']} alt=""></img>
            </div>
            <div className ="col-11">
                <div className="row">
                <div>
                    <span className="text-white"> <strong className="text-white">{tuit.postedBy.username} </strong></span>
                    <i className="fa fa-solid fa-check-circle text-white"></i>
                    <span className="text-muted"> {tuit.handle} </span>
                    <span className="text-muted">{tuit.time} </span>
                    <i className="fa fa-solid fa-ellipsis float-end mr-2"></i>
                    <i onClick={() => deleteTuit(tuit)} className="fas fa-remove fa-2x fa-pull-right"></i>
                </div>
                </div>
                <div className="row mb-2">
                    <span className="text-white">{tuit.tuit}</span>
                </div>
                
                <div className="card bg-black rounded wd-border-color">
                    

                    {tuit.attachments && <Attachment attachments={tuit.attachments}/>}

                    {/* { (tuit.body_head===undefined && tuit.body_text===undefined) ? null :<span className="p-2">
                    <p className="bg-black text-white m-0">{tuit.body_head}</p>
                    <p className="bg-black text-muted m-0">{tuit.body_text}</p>
                    </span>} */}
                    
                </div>
                <div className="m-2">
                    <TuitStats tuit={tuit}/>               
                </div>
            </div>
    </div>
    </>
    )
};
export default TuitListItem;
