import React from "react";
import child from "../../assets/img/child.png";
import "./Contacts.scss";
import { motion } from "framer-motion";
const textAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: (custom) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.5 },
	}),
};
const Contacts = () => {
	return (
		<section className='contacts' id='contacts'>
			<div className='container'>
				<motion.div
					className='contacts__wrapper'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}>
					<motion.div
						className='contacts__wrapper__info'
						custom={1}
						variants={textAnimation}>
						<h2 className='head__text'>Наши контакты</h2>
						<p className='bold sub__text'>
							Запишитесь на бесплатный пробный урок по номеру:
						</p>
						<a className='sub__text' href='tel:+77711459826'>
							8 (771) 145-98-26
						</a>
						<p className='bold sub__text'>Адрес:</p>
						<p className='sub__text'>
							г. Нур-Султан, ул. К. Аманжолова, 28, офис 14
						</p>
						<p className='bold sub__text'>График работы:</p>
						<p className='sub__text'>
							Пн-Пт - 9:00-19:00; Сб - 9:00-17:00; Вс - выходной
						</p>
						<p className='bold sub__text'>E-mail:</p>
						<a className='sub__text' href='mailto:@kemenger.mektebi'>
							@kemenger.mektebi
						</a>
					</motion.div>
					<motion.img
						custom={3}
						variants={textAnimation}
						className='contacts__wrapper__img'
						src={child}
						alt='child'
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default Contacts;
