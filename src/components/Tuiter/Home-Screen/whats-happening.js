import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {createTuit} from "../actions/tuits-actions.js";

const WhatsHappening = () => {

  const dummyTuit = {
    _id: (new Date()).getTime() + '',
    postedBy: {
      "username": "ReactJS"
    },
    stats: {
      retuits: 111,
      likes: 222,
      replies: 333,
      dislikes: 123
    }
  }

  let [whatsHappening, setWhatsHappening]
      = useState('');
  const dispatch = useDispatch();
  const [newTuit, setNewTuit] =
      useState({tuit: 'New tuit',...dummyTuit});
  // const tuitClickHandler = () => {
  //   dispatch({type: 'create-tuit',
  //    tuit: whatsHappening
  //  });
  // }
  return (
    <>
    <div className ="row mt-2 wd-border-bottom">
            <div className ="col-1">
                <img className="rounded-circle img-fluid mx-auto d-block" src="" alt=""></img>
            </div>
            <div className ="col-11">
              {/* <textarea value={whatsHappening} className="form-control text-white bg-transparent"
                onChange={(event) => setWhatsHappening(event.target.value)}>
              </textarea>
              <button className="float-end" onClick={createTuit}>
                Tuit
              </button> */}
              <button onClick={() => 
  createTuit(dispatch, newTuit)}
    className="btn btn-primary float-end">
  Tuit
</button>
<textarea className="form-control w-75 text-white bg-transparent" 
  onChange={(e) =>
    setNewTuit({...newTuit,
    tuit: e.target.value})}></textarea>
            </div>
      </div>
    </>
  );
}
export default WhatsHappening;