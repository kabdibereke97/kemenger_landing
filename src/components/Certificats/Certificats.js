import "./Certificats.scss";
import certificat from "../../assets/img/certificats_img.svg";
import { motion } from "framer-motion";
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
const Certificats = () => {
	return (
		<section className='certificats' id='certificats'>
			<div className='container'>
				<motion.div
					className='certificats__wrapper'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}>
					<motion.p
						className='certificats__wrapper__text'
						custom={1}
						variants={textAnimationRigth}>
						Наши сертификаты
					</motion.p>
					<motion.div
						className='certificats__wrapper__img'
						custom={2}
						variants={textAnimationRigth}>
						<img src={certificat} alt='1' />
						<img src={certificat} alt='2' />
						<img src={certificat} alt='3' />
						<img src={certificat} alt='4' />
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Certificats;
