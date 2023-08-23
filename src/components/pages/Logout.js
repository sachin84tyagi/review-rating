import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { requestLoggedOut } from "../../actions/user";

const Logout = () => {
    let dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestLoggedOut());
  }, []);
    return ( 
        <div>
            
        </div>
     );
}
 
export default Logout;