const Rating = ({type, rating, numberReviews}) => {
    return ( 
        <div className="rating">
            <label><strong>{ type } : </strong></label>
            &nbsp;
            <div className="innerRating">
            <span className={rating >= 1 ? 'fa fa-star rating-color': rating >= 0.5 ? 'fa fa-star fa-star-half-o rating-color' : 'fa fa-star-o'}></span>
            <span className={rating >= 2 ? 'fa fa-star rating-color': rating >= 1.5 ? 'fa fa-star fa-star-half-o rating-color' : 'fa fa-star-o' }></span>
            <span className={rating >= 3 ? 'fa fa-star rating-color': rating >= 2.5 ? 'fa fa-star fa-star-half-o rating-color' : 'fa fa-star-o' }></span>
            <span className={rating >= 4 ? 'fa fa-star rating-color': rating >= 3.5 ? 'fa fa-star fa-star-half-o rating-color' : 'fa fa-star-o' }></span>
            <span className={rating >= 5 ? 'fa fa-star rating-color': rating >= 4.5 ? 'fa fa-star fa-star-half-o rating-color' : 'fa fa-star-o' }></span>
            
            &nbsp; 
            {rating} rating from {numberReviews} reviews
            </div>
        </div>
     );
}
export default Rating;