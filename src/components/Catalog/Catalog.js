import React from "react";
import Card from "../Card/Card";
import "./Catalog.scss";
import Slider from "react-slick";
import "../../style/slick.css";
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
const settings = {
	infinite: false,
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
const arr = [
	{
		title: "Подготовка к школе",
		price: "30 000",
		age: "4-6лет",
		duration: "3 занятия в неделю по 3 ч.",
		descr: [
			"Обучение чтению ",
			"Письмо",
			"Математика",
			"Английский язык",
			"Развитие речи",
			"Концентрация внимания",
			"Усвоение изучаемого материала",
			"Различные техники запоминания",
			"Развитие логико-математического мышления",
		],
		color: "#018FA3",
	},
	{
		title: "скорочтение",
		price: "27 000",
		age: "6-15 лет",
		duration: "3 занятия в неделю по 1 ч.",
		descr: [
			"Увеличение скорости чтения",
			"Артикуляция",
			"Развитие речи",
			"Развитие внимания",
			"Увеличение поля зрения",
			"Увеличение словарного запаса",
			"Понимание прочитанного",
			"Пересказ",
			"Различные техники понимания",
			"Пробный урок и диагностика БЕСПЛАТНО",
		],
		color: "#955EEA",
	},
	{
		title: "ментальная арифметика",
		price: "20 000",
		age: " ",
		duration: "2 занятия в неделю по 1 ч.",
		descr: [
			"Быстрый счет",
			"Развитие высокой концентрации",
			"Увеличесние поля зрения",
			"Фотографическая память",
			"Пробный урок БЕСПЛАТНО",
			"Обучающая платформа в ПОДАРОК",
		],
		color: "#4ECA30",
	},
	{
		title: "Каллиграфия",
		price: "24 000",
		age: " ",
		duration: "3 занятия в неделю по 1 ч.",
		descr: [
			"Развитие памяти",
			"Восприятие пространства",
			"Прокачивание мелкой моторики",
			"Основы грамотного письма",
			"Развитие физической выносливости и усидчивости",
			"Умение писать диктанты без графических и орфографических ошибок",
		],
		color: "#FFE41B",
	},
	{
		title: "Группа продленного дня",
		price: "35 000",
		age: " ",
		duration:
			"5 раз в неделю 1 смена с 9:00 по 12:00 2 смена с 14:00 по 17:00.",
		descr: [
			"Подготовка к СОР и СОЧ",
			"Проработка пробелов в знаниях",
			"Индивидуальный подход",
			"Выявление сильных сторон ребенка",
			"Профессиональная помощь в подготовке домашних заданий",
			"Дополнительные образовательные дисциплины",
		],
		color: "#FFA724",
	},
	{
		title: "Английский язык",
		price: "18 000",
		age: " ",
		duration: "2 занятия в неделю по 1,5 ч.",
		descr: [
			"Чтение по правилам",
			"Знание 500 новых слов",
			"Самостоятельное выполнение домашнего задания",
		],
		color: "#FF4D94",
	},
];
const Catalog = ({ setActiveModal }) => {
	return (
		<section className='catalog_bg' id='catalog'>
			<div className='container'>
				<motion.div
					className='catalog'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}>
					<motion.p
						className='catalog__text'
						custom={1}
						variants={textAnimationRigth}>
						Каталог
					</motion.p>
					<motion.div
						className='catalog__cards'
						custom={2}
						variants={textAnimationRigth}>
						<Slider {...settings}>
							{arr.map((item, index) => {
								return (
									<Card
										key={index}
										title={item.title}
										price={item.price}
										age={item.age}
										duration={item.duration}
										descr={item.descr}
										color={item.color}
										setActiveModal={setActiveModal}
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

export default Catalog;
