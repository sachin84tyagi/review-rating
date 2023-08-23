import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { isEmpty } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { requestAddUser } from "../../actions/user";

const Register = () => {
    const values = {
        email: "",
        username: "",
        password: "",
      };
      const [initialState, setState] = useState(values);
      const [error, setError] = useState("");
      const dispatch = useDispatch();
      const history = useHistory();
      const { email, username, password } = initialState;

      useEffect(() => {
          console.log("initialState", initialState);
          setState({ ...values });
      }, []);
    
      const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({
          ...initialState,
          [name]: value,
        });
      };
    const handleSubmit = (e, obj) => {
        e.preventDefault();
        console.log("initialState", initialState);
        if (
          isEmpty(email) ||
          isEmpty(username) ||
          isEmpty(password) 
        ) {
          setError("Please fill all input field");
        } else {
          console.log("initialState 22", initialState);
          dispatch(requestAddUser(initialState));
          //setError("");
          //history.push("/");
        }
      };
    return ( 
        <div className="container mt-5">
          <div className="row">

          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">User Name </label>
                <div className="col-sm-10">
                <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={username}
                    onChange={handleInputChange}
                  />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                <input
                    type="text"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                  />
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            <div className="col-md-6">
              {error && <div style={{ color: "red" }}>{error}</div>}
            </div>
          </div>
        </div>
       );
}
 
export default Register;