import logo from "../../assets/icons/logo_icon.svg";
import phone from "../../assets/icons/phone_icon.svg";
import "./Header.scss";
import { Link } from "react-scroll";
import { useState } from "react";

const Header = () => {
	const [active, setActive] = useState(false);
	return (
		<header>
			<div className='container'>
				<div className='header'>
					<img src={logo} alt='Logo' />
					<div
						onClick={() => setActive(!active)}
						className={active ? "close active_close" : "close"}>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<ul className={active ? "header__list active" : "header__list"}>
						<li>
							<Link
								to='about'
								spy={true}
								smooth={true}
								offset={50}
								duration={500}>
								О нас
							</Link>
						</li>
						<li>
							<Link
								to='catalog'
								spy={true}
								smooth={true}
								offset={50}
								duration={500}>
								Каталог
							</Link>
						</li>
						<li>
							<Link
								to='certificats'
								spy={true}
								smooth={true}
								offset={50}
								duration={500}>
								Сертификаты
							</Link>
						</li>
						<li>
							<Link
								to='review'
								spy={true}
								smooth={true}
								offset={50}
								duration={500}>
								Отзывы
							</Link>
						</li>
						<li>
							<Link
								to='contacts'
								spy={true}
								smooth={true}
								offset={50}
								duration={500}>
								Контакты
							</Link>
						</li>
					</ul>

					<div className='header__phone'>
						<img src={phone} alt='Phone' className='phone__icon' />
						<a className='phone__link' href='tel:+77711459826'>
							8 (771) 145-98-26
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
