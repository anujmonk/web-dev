import React, {useState} from "react";
import {useDispatch} from 'react-redux';

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening]
      = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({type: 'create-tuit',
     tuit: whatsHappening
   });
  }
  return (
    <>
    <div className ="row mt-2 wd-border-bottom">
            <div className ="col-1">
                <img className="rounded-circle img-fluid mx-auto d-block" src="" alt=""></img>
            </div>
            <div className ="col-11">
              <textarea value={whatsHappening} className="form-control text-white bg-transparent"
                onChange={(event) => setWhatsHappening(event.target.value)}>
              </textarea>
              <button className="float-end" onClick={tuitClickHandler}>
                Tuit
              </button>
            </div>
      </div>
    </>
  );
}
export default WhatsHappening;