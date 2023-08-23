import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { requestShops } from "../../actions/shop";
import "./home.css"
import user1 from "../../assets/images/user1.jpg"
import Rating  from "../reusable/Rating"

const Home = () => {
  let stateData = useSelector((state) => state.shop);
  const { shops: data } = stateData;
  const isFetching = stateData.isFetching
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestShops());
  }, []);

  const handleClass = (index) => {
    switch (index) {
        case 1:
            return 'golden'
        case 2:
            return 'silver'
        case 3:
            return 'bronze'
        case 4:
        case 5:
        case 6:
            return 'green'
        default:
            return 'primary'
      }
  }
  return (
    <section>
      <div className="container">
      
      <table className="table">
				{/* <thead>
					<tr>
						<th>User</th>
						<th>Status</th>
						<th>Location</th>
						
						<th>Congratulate</th>
					</tr>
				</thead> */}
				<tbody>
					
          {Object.keys(data).length > 0 && data.map((el, key) => (
          <tr key={key}>
          <td>
							<strong>{key + 1}</strong>
						</td>
          <td>
							<div className="detail d-flex align-items-center">
                
                <img src={user1} className="circle-img circle-img--small mr-2" alt={user1} />
								<div className="user-info__basic">
									<h5 className="mb-0">{el.name}</h5>
									<p className="text-muted mb-0">@abcabcabc@gmail.com</p>
									<p className="text-muted mb-0">66767676767</p>
								</div>
                
							</div>
						</td>
            <td>
            <Rating type="Quality" rating={el.qualityRating} numberReviews={el.qualityNumberReviews}/>
            <Rating type="Price" rating={el.priceRating} numberReviews={el.priceNumberReviews}/>
            <Rating type="Service" rating={el.serviceRating} numberReviews={el.serviceNumberReviews}/>
          </td>
           
						<td>
							<button className="btn btn-success btn-sm">Add Review</button>
						</td>
					</tr>
        ))}
						
				</tbody>
			</table>
        
       
      </div>
    </section>
  );
};

export default Home;
