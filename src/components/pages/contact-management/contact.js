import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { requestContacts, requestDeleteContact } from "../../../actions/actions";
import "./contact.css";
//import { Pagination } from "antd";
import Pagination from "../../reusable/Pagination"
//Set how many records you want to see at a time on page
const USER_PER_PAGE = 10

//To do Implement cache API request
const ListRecord = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  let stateData = useSelector((state) => state.data);

  const { contacts: data } = stateData;
  const isFetching = stateData.isFetching
  
  let filtered = data
  if (search) {
    filtered = data.filter(m => 
      m.search_string.toLowerCase().includes(search.toLowerCase())
    );
  }
  //Calculate total page ie 50/10 = 5 page will display in pagination
  const totalPages = filtered.length/USER_PER_PAGE
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestContacts());
  }, []);
 
  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record ?")) {
      dispatch(requestDeleteContact(id));
      dispatch(requestContacts());
    }
  };
  const handleInputChange = (e) => setSearch(e.target.value);
  //get current page number by clicking by Pagination component ans set it to 
  const handleSetCurrentPage = (num) => setCurrentPage(num)
  //startIndex like - 0, 10, 20 ,30 .... will be a start value for displaying next records
  const startIndex = (currentPage-1) * USER_PER_PAGE
  //this will slice an array on basis of startIndex and startIndex+USER_PER_PAGE (0-10 OR 10-20 OR 20-30 ...)
  const selectedContacts = Object.keys(filtered).length > 0 ? filtered.slice(startIndex, startIndex + USER_PER_PAGE) : filtered

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-12">
            <h5>Contact Listing</h5>
            <div className="col-xs-8 col-xs-offset-2">
                <div className="input-group">
                    <div className="form-group col-lg-3">
                        <input
                            type="text"
                            name="search"
                            className="form-control form-control-sm"
                            placeholder="Search..."
                            value={search}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-group-btn col-9 text-right">
                        <Link
                            to="/contact/add"
                            className="btn btn-primary btn-sm"
                            style={{ marginBottom: 20 }}
                        >
                            Add New
                        </Link>
                    </div>
                </div>
            </div>
            { isFetching ? "Loading......" : null}
            
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(selectedContacts).map((id, index) => {
                  return (
                    <tr key={id}>
                      <th scope="row">{index + 1}</th>
                      <td>{selectedContacts[id].name}</td>
                      <td>{selectedContacts[id].mobile}</td>
                      <td>{selectedContacts[id].email}</td>
                      <td>{selectedContacts[id].address}</td>
                      <td>
                        <Link to={`contact/update/${id}`}>
                          <p className="btn btn-xs text-primary">
                            <i className="fas fa-pencil-alt" />
                          </p>
                        </Link>
                        <p
                          className="btn btn-xs text-danger"
                          onClick={() => onDelete(id)}
                        >
                          <i className="fas fa-trash-alt" />
                        </p>
                        <Link to={`contact/view/${id}`}>
                          <p className="btn btn-xs text-info">
                            <i className="fas fa-eye" />
                          </p>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {totalPages > 1 ? <><Pagination totalPages={totalPages} onSetCurrentPage={handleSetCurrentPage}/><p>Page:{currentPage}</p></> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListRecord;
