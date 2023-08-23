const Detail = () => {
    return ( 
        <div>
            <div className="row">
			<div className="col-sm-3">
				<div className="rating-block">
					<h4>Average user rating</h4>
					<h2 className="bold padding-bottom-7">4.3 <small>/ 5</small></h2>
					<button type="button" className="btn btn-warning btn-sm" aria-label="Left Align">
					  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
					</button>
					<button type="button" className="btn btn-warning btn-sm" aria-label="Left Align">
					  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
					</button>
					<button type="button" className="btn btn-warning btn-sm" aria-label="Left Align">
					  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
					</button>
					<button type="button" className="btn btn-default btn-grey btn-sm" aria-label="Left Align">
					  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
					</button>
					<button type="button" className="btn btn-default btn-grey btn-sm" aria-label="Left Align">
					  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
					</button>
				</div>
			</div>
			<div className="col-sm-3">
				<h4>Rating breakdown</h4>
				<div className="pull-left">
					<div className="pull-left">
						<div>5 <span className="glyphicon glyphicon-star"></span></div>
					</div>
					<div className="pull-left">
						<div className="progress">
						  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5">
							<span className="sr-only">80% Complete (danger)</span>
						  </div>
						</div>
					</div>
					<div className="pull-right">1</div>
				</div>
				<div className="pull-left">
					<div className="pull-left">
						<div>4 <span className="glyphicon glyphicon-star"></span></div>
					</div>
					<div className="pull-left">
						<div className="progress">
						  <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="4" aria-valuemin="0" aria-valuemax="5">
							<span className="sr-only">80% Complete (danger)</span>
						  </div>
						</div>
					</div>
					<div className="pull-right">1</div>
				</div>
				<div className="pull-left">
					<div className="pull-left">
						<div>3 <span className="glyphicon glyphicon-star"></span></div>
					</div>
					<div className="pull-left">
						<div className="progress">
						  <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="3" aria-valuemin="0" aria-valuemax="5">
							<span className="sr-only">80% Complete (danger)</span>
						  </div>
						</div>
					</div>
					<div className="pull-right">0</div>
				</div>
				<div className="pull-left">
					<div className="pull-left">
						<div>2 <span className="glyphicon glyphicon-star"></span></div>
					</div>
					<div className="pull-left">
						<div className="progress">
						  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="5">
							<span className="sr-only">80% Complete (danger)</span>
						  </div>
						</div>
					</div>
					<div className="pull-right">0</div>
				</div>
				<div className="pull-left">
					<div className="pull-left">
						<div>1 <span className="glyphicon glyphicon-star"></span></div>
					</div>
					<div className="pull-left">
						<div className="progress">
						  <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="5">
							<span className="sr-only">80% Complete (danger)</span>
						  </div>
						</div>
					</div>
					<div className="pull-right">0</div>
				</div>
			</div>			
		</div>			
		
		<div className="row">
			<div className="col-sm-7">
				<hr/>
				<div className="review-block">
					<div className="row">
						<div className="col-sm-3">
							<img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" className="img-rounded" />
							<div className="review-block-name"><a href="#">nktailor</a></div>
							<div className="review-block-date">January 29, 2016<br/>1 day ago</div>
						</div>
						<div className="col-sm-9">
							<div className="review-block-rate">
								<button type="button" className="btn btn-warning btn-xs" aria-label="Left Align">
								  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" className="btn btn-warning btn-xs" aria-label="Left Align">
								  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" className="btn btn-warning btn-xs" aria-label="Left Align">
								  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" className="btn btn-default btn-grey btn-xs" aria-label="Left Align">
								  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" className="btn btn-default btn-grey btn-xs" aria-label="Left Align">
								  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
							</div>
							<div className="review-block-title">this was nice in buy</div>
							<div className="review-block-description">this was nice in buy. this was nice in buy. this was nice in buy. this was nice in buy this was nice in buy this was nice in buy this was nice in buy this was nice in buy</div>
						</div>
					</div>
					<hr/>
					<div className="row">
						<div className="col-sm-3">
							<img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" className="img-rounded" />
							<div className="review-block-name"><a href="#">nktailor</a></div>
							<div className="review-block-date">January 29, 2016<br/>1 day ago</div>
						</div>
						<div className="col-sm-9">
							<div className="review-block-rate">
								<button type="button" className="btn btn-warning btn-xs" aria-label="Left Align">
								  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" className="btn btn-warning btn-xs" aria-label="Left Align">
								  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" className="btn btn-warning btn-xs" aria-label="Left Align">
								  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" className="btn btn-default btn-grey btn-xs" aria-label="Left Align">
								  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" className="btn btn-default btn-grey btn-xs" aria-label="Left Align">
								  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
							</div>
							<div className="review-block-title">this was nice in buy</div>
							<div className="review-block-description">this was nice in buy. this was nice in buy. this was nice in buy. this was nice in buy this was nice in buy this was nice in buy this was nice in buy this was nice in buy</div>
						</div>
					</div>
					<hr/>
					<div className="row">
						<div className="col-sm-3">
							<img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" className="img-rounded" />
							<div className="review-block-name"><a href="#">nktailor</a></div>
							<div className="review-block-date">January 29, 2016<br/>1 day ago</div>
						</div>
						<div className="col-sm-9">
							<div className="review-block-rate">
								<button type="button" className="btn btn-warning btn-xs" aria-label="Left Align">
								  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" className="btn btn-warning btn-xs" aria-label="Left Align">
								  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" className="btn btn-warning btn-xs" aria-label="Left Align">
								  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" className="btn btn-default btn-grey btn-xs" aria-label="Left Align">
								  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" className="btn btn-default btn-grey btn-xs" aria-label="Left Align">
								  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
							</div>
							<div className="review-block-title">this was nice in buy</div>
							<div className="review-block-description">this was nice in buy. this was nice in buy. this was nice in buy. this was nice in buy this was nice in buy this was nice in buy this was nice in buy this was nice in buy</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        </div>
     );
}
 
export default Detail;