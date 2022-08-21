/* eslint-disable jsx-a11y/iframe-has-title */
import "./Map.scss";
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
const Map = () => {
	return (
		<section className='map'>
			<div className='container'>
				<motion.div
					className='map__wrapper'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					custom={1}
					variants={textAnimation}>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.496793876211!2d71.47279630292147!3d51.11987426088343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424583f3ccb3266d%3A0xf2b17876d3748cfa!2z0YPQuy4g0JrQsNGB0YvQvNCwINCQ0LzQsNC90LbQvtC70L7QstCwIDI4LzEsINCd0YPRgC3QodGD0LvRgtCw0L0gMDIwMDAw!5e0!3m2!1sru!2skz!4v1660980725309!5m2!1sru!2skz'
						allowFullScreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'></iframe>
				</motion.div>
			</div>
		</section>
	);
};

export default Map;
