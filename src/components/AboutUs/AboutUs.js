import teacher from "../../assets/img/teacher.svg";
import children from "../../assets/img/children.svg";
import circle from "../../assets/img/circle.svg";
import circle2 from "../../assets/img/circle_2.svg";
import "./AboutUs.scss";
import { motion } from "framer-motion";
const textAnimationLeft = {
	hidden: {
		x: -200,
		opacity: 0,
	},
	visible: (custom) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.5 },
	}),
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
const AboutUs = () => {
	return (
		<section id='about'>
			<div className='container'>
				<div className='about'>
					<motion.div
						className='about__teacher'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}>
						<motion.div
							className='about__teacher__descr'
							custom={2}
							variants={textAnimationLeft}>
							<div className='about__teacher__descr__bg'></div>
							<p className='about__teacher__descr__text'>
								В нашем центре работают профессиональные педагоги любящие детей
								и преданные своему делу. Мы помогаем детям совершенствовать свои
								интеллекуальные способности чтобы они могли познавать мир и
								делать его более красивым и добрым.
							</p>
							<img
								className='about__teacher__descr__circle'
								src={circle}
								alt='Circle'
							/>
						</motion.div>
						<motion.div
							className='about__teacher__img'
							custom={2}
							variants={textAnimationRigth}>
							<img
								className='about__teacher__img__photo'
								src={teacher}
								alt='Teacher'
							/>
							<div className='about__teacher__img__border'></div>
						</motion.div>
					</motion.div>
					<motion.div
						className='about__children'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}>
						<motion.div
							className='about__children__descr'
							custom={2}
							variants={textAnimationRigth}>
							<div className='about__children__descr__bg'></div>
							<p className='about__children__descr__text'>
								Наши ученики показывают результат уже с первого месяца работы,
								мы поддерживаем в нашем центре теплую и дружескую атмосферу
								Побывав у нас детям обязательно захочется вернуться сюда снова
								Развивайтесь вместе с нами
							</p>
							<img
								className='about__children__descr__circle'
								src={circle2}
								alt='Circle'
							/>
						</motion.div>
						<motion.div
							className='about__children__img'
							custom={2}
							variants={textAnimationLeft}>
							<img
								className='about__children__img__photo'
								src={children}
								alt='children'
							/>
							<div className='about__children__img__border'></div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
