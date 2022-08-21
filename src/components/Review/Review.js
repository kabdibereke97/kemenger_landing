import ReviewCard from "../ReviewCards/ReviewCard";
import "./Review.scss";
import photo1 from "../../assets/img/photo1.png";
import photo2 from "../../assets/img/photo2.png";
import photo3 from "../../assets/img/photo3.png";
import photo4 from "../../assets/img/photo4.png";
import photo5 from "../../assets/img/photo5.png";
import Slider from "react-slick";
import "../../style/slick.css";
import { motion } from "framer-motion";
const reviews = [
	{
		photo: photo1,
		name: "Malika Fazlieva",
		review:
			"Маған ұнаған жері білімді жақсы береді. Ұлымның қатынап жүргеніне 1 ай болмады бірақ нәтиже бар. Мұғалімдеріде өте сыпайы әрі білімді",
	},
	{
		photo: photo2,
		name: "Aigul Lepessova",
		review: "Отлично все нравится! Внучка уже 6 месяц занимается, довольны",
	},
	{
		photo: photo3,
		name: "Malika Fazlieva ",
		review:
			"Маған ұнаған жері білімді жақсы береді. Ұлымның қатынап жүргеніне 1 ай болмады бірақ нәтиже бар. Мұғалімдеріде өте сыпайы әрі білімді",
	},
	{
		photo: photo4,
		name: "Анара Баймаганбетова",
		review:
			"Искренне рекомендую, детям дают отличные знания и безопасность. Профессионалы своего дела. Удачи вам и успехов желаю.",
	},
	{
		photo: photo5,
		name: "Gulzhan Kossantayeva",
		review:
			"Комфорная обстановака, распологает к учебе, учителя доброжелательные,но требовательные! То, что надо! Советую 100%.",
	},
	{
		photo: photo5,
		name: "Енлик Серик",
		review:
			"Айжан Талгатовна өз ісінің маманы. Менің қызымның оқу үлгеріміне көп ықпал тигіздіңіз. Кемеңгер мектебі нағыз кеменгер бала тәлімін береді!",
	},
];
const settings = {
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 3,

	responsive: [
		{
			breakpoint: 1262,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 886,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};
const textAnimationRigth = {
	hidden: {
		x: 200,
		opacity: 0,
	},
	visible: (custom) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.5 },
	}),
};
const Review = () => {
	return (
		<section className='review' id='review'>
			<div className='container'>
				<motion.div
					className='review__wrapper'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}>
					<motion.p
						className='review__wrapper__text'
						custom={1}
						variants={textAnimationRigth}>
						Отзывы
					</motion.p>
					<motion.div
						className='review__wrapper__items'
						custom={2}
						variants={textAnimationRigth}>
						<Slider {...settings}>
							{reviews.map((item, index) => {
								return (
									<ReviewCard
										key={index}
										name={item.name}
										review={item.review}
										img={item.photo}
									/>
								);
							})}
						</Slider>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Review;
