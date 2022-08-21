import "./ReviewCard.scss";
const ReviewCard = ({ name, review, img }) => {
	return (
		<div className='review__card'>
			<div className='review__card__wrapper'>
				<img className='review__card__wrapper__img' src={img} alt='phot' />
				<p className='review__card__wrapper__name'>{name}</p>
			</div>

			<p className='review__card__text'>{review}</p>
		</div>
	);
};

export default ReviewCard;
