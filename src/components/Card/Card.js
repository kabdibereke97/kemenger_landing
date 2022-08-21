import React, { useState } from "react";
import "./Card.scss";
const Card = ({
	title,
	price,
	age,
	duration,
	descr,
	color,
	setActiveModal,
}) => {
	const [isShow, setIsShow] = useState(false);
	return (
		<div
			className='card'
			style={isShow ? { height: "1048px" } : { height: "600px" }}>
			<div className='card__title ' style={{ background: color }}>
				<h2 className='card__title__text'>{title}</h2>
			</div>
			<p className='card__price'>{price}</p>
			<p className='card__text card__age'>{age}</p>
			<p className='card__text card__diration'>{duration}</p>
			<div className='card__descr__wrapper'>
				{isShow ? (
					descr.map((item, index) => {
						return (
							<p key={index} className='card__text card__descr'>
								{item}
							</p>
						);
					})
				) : (
					<>
						{descr.slice(0, 2).map((item, index) => {
							return (
								<p key={index} className='card__text card__descr'>
									{item}
								</p>
							);
						})}
						<button className='more_info' onClick={() => setIsShow(true)}>
							Подробнее...
						</button>
					</>
				)}
			</div>
			<button
				onClick={() => {
					setActiveModal(true);
				}}
				className='card__button'
				style={
					isShow
						? { bottom: "60px", background: color }
						: { bottom: "20px", background: color }
				}>
				Выбрать
			</button>
		</div>
	);
};

export default Card;
