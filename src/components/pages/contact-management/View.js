import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const View = () => {
  const currentId = useParams();
  const { id } = currentId;
  const { contacts: data } = useSelector((state) => state.data);

  return (
    <div className="container mt-5">
      {Object.keys(data).map((userId) => {
        if (userId === id) {
          return (
            <div class="card">
              <div class="card-header lead">User Detail</div>
              <div class="card-body">
                <p class="card-text">Name: {data[id].name}</p>
                <p class="card-text">Mobile: {data[id].mobile}</p>
                <p class="card-text">Email: {data[id].email}</p>
                <p class="card-text">Address: {data[id].address}</p>
                <Link to="/contact">
                  <a className="btn btn-info">Go Back</a>
                </Link>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default View;
