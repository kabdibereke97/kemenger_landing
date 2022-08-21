import NumberFormat from "react-number-format";
import "./Modal.scss";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

const Modal = ({ setActiveModal }) => {
	const [sent, setSent] = useState(false);
	const form = useRef();
	const handleSubmit = (e) => {
		setSent(true);
		e.preventDefault();
		emailjs
			.sendForm(
				"service_n336yno",
				"template_xyxhlpg",
				form.current,
				"WDejzSAbLUCwQnBoy",
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				},
			);

		setTimeout(() => {
			setSent(false);
		}, 2000);
	};

	return (
		<div className='modal'>
			<motion.div
				className='modal__wrapper'
				initial={{ x: 1000, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ x: -1000, opacity: 0 }}>
				<AiOutlineClose
					onClick={() => {
						setActiveModal(false);
					}}
					className='modal__wrapper__close'
					size={"20px"}
				/>
				{!sent ? (
					<p className='modal__wrapper__text'>
						Заполните форму и мы обязательно свяжемся с Вами.
					</p>
				) : (
					<motion.p
						className={"modal__wrapper__text"}
						initial={{ x: 1000, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -1000, opacity: 0 }}>
						Заявка отправлена
					</motion.p>
				)}

				<form
					ref={form}
					onSubmit={handleSubmit}
					className='modal__wrapper__form'>
					<div className='modal__wrapper__form__input'>
						<input
							onChange={(e) => e.target.value}
							name='name'
							type='text'
							required
							placeholder='Ваше имя'
							pattern='[A-Za-zА-Яа-яЁё]+'
						/>
					</div>
					<div className='modal__wrapper__form__input'>
						<NumberFormat
							name='phone'
							format='+7 (###) ###-####'
							mask='_'
							required
							placeholder='Ваше телефон'
						/>
					</div>
					<div className='modal__wrapper__form__input'>
						<textarea
							name='descr'
							rows='4'
							cols='4'
							type='text'
							required
							placeholder='Комментарий...'
						/>
					</div>
					<button type='submit' className='modal__wrapper__form__button'>
						Оставить заявку
					</button>
				</form>
			</motion.div>
		</div>
	);
};

export default Modal;
