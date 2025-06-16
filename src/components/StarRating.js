import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function StarRating(props) {
  const rating = props.rating;
  const ratingValue = rating.rate;
  //const ratingCount = rating.count;
  const totalStars = 5;

  const stars = Array.from({length: totalStars}, (_, index) => {
    const starNumber = index + 1;

    if (starNumber <= ratingValue){
      return <FaStar key={index} className='star-icon' />;
    } else if (starNumber - 0.5 <= ratingValue) {
      return <FaStarHalfAlt key={index} className='star-icon' />;
    } else {
      return <FaRegStar key={index} className='star-icon empty-star' />
    }
  });
  return(
    <div className='star-rating-container'>
      {stars}
      <span>
        {ratingValue.toFixed(1)} / 5
      </span>
    </div>
  );
}

export default StarRating;