import "./Promo.scss";
import main_bg from "../../assets/img/main_bg.png";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Modal from "../Modal/Modal";

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
const Promo = ({ activeModal, setActiveModal }) => {
	useEffect(() => {
		if (activeModal) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "visible ";
		}
	}, [activeModal]);
	return (
		<div className='section'>
			{activeModal ? <Modal setActiveModal={setActiveModal} /> : null}
			<div className='container'>
				<div className='promo__block'>
					<motion.div
						className='promo__wrapper'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}>
						<motion.h1
							custom={1}
							variants={textAnimation}
							className='promo__wrapper__header__text'>
							<em className='blue_text'>KEMENGER MEKTEBI</em> - центр
							интеллектуального развития
						</motion.h1>
						<motion.p
							custom={2}
							variants={textAnimation}
							className='promo__wrapper__subheader__text'>
							Обучение происходит на казахском и русском языках. При записи на
							два или более курсов предусмотрена скидка. Запишитесь на
							бесплатный пробный урок.
						</motion.p>
						<motion.button
							custom={3}
							variants={textAnimation}
							className='promo__wrapper__button'
							onClick={() => {
								setActiveModal(true);
							}}>
							Оставить заявку
						</motion.button>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Promo;
