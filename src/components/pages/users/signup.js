import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { isEmpty } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { requestAddContact, requestEditContact } from "../../../actions/actions";
import { useSignup } from "../../../hooks/signup";

const Signup = () => {
  const values = {
    username: "",
    email: "",
    password: "",
  };
  const [initialState, setState] = useState(values);
  //const [error, setError] = useState("");
  const {signup, isPending, error} = useSignup()
  // const [data, setData] = useState({});

  const { contacts: data } = useSelector((state) => state.data);

  //   console.log("currentId", currentId);

  const dispatch = useDispatch();

  const { username, email, password } = initialState;

  const currentId = useParams();
  const history = useHistory();

  const { id } = currentId;

  console.log("currentId", currentId);

  // useEffect(() => {
  //   firebaseDb.child("contacts").on("value", (snapshot) => {
  //     if (snapshot.val() !== null) {
  //       setData({
  //         ...snapshot.val(),
  //       });
  //     } else {
  //       setData({});
  //     }
  //   });
  // }, [id]);

  useEffect(() => {
    if (isEmpty(id)) {
      console.log("initialState", initialState);
      setState({ ...values });
    } else {
      setState({ ...data[id] });
    }
  }, [id, data]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...initialState,
      [name]: value,
    });
  };

  const handleSubmit = (e, obj) => {
    e.preventDefault();
    // console.log("initialState", initialState);
    // console.log('email :: ', email)
    // console.log('username :: ', username)
    // console.log('password :: ', password)
    signup(email, password, username)
    // if (
    //   isEmpty(username) ||
    //   isEmpty(email) ||
    //   isEmpty(password)
    // ) {
    //   setError("Please fill all input field");
    // } else if (isEmpty(id)) {
    //   dispatch(requestAddContact(initialState));
    //   setError("");
    //   history.push("/");
    // } else {
    //   dispatch(requestEditContact({ initialState, id }));
    //   setError("");
    //   history.push("/");
    // }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          {error && <div style={{ color: "red" }}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="bmd-label-floating">Name</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={handleInputChange}
              />
            </div>
            {/* <div className="form-group">
              <label className="bmd-label-floating">Mobile</label>
              <input
                type="number"
                className="form-control"
                name="mobile"
                value={mobile}
                onChange={handleInputChange}
              />
            </div> */}
            <div className="form-group">
              <label className="bmd-label-floating">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="bmd-label-floating">Password</label>
              <input
                type="text"
                className="form-control"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            {isPending && <button className="btn btn-default">Loading...</button>}
            {!isPending && <button className="btn btn-default">Cancel</button>}
            { !isPending &&<button type="submit" className="btn btn-success btn-raised">
              Submit
            </button> }
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
