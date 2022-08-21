import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import Catalog from "./components/Catalog/Catalog";
import Certificats from "./components/Certificats/Certificats";
import Review from "./components/Review/Review";
import Contacts from "./components/Contacts/Contacts";
import Map from "./components/Map/Map";
function App() {
	const [activeModal, setActiveModal] = useState(false);
	return (
		<div className='App'>
			{activeModal ? <Modal setActiveModal={setActiveModal} /> : null}
			<Header />
			<Promo setActiveModal={setActiveModal} activeModal={activeModal} />
			<AboutUs />
			<Catalog setActiveModal={setActiveModal} />
			<Certificats />
			<Review />
			<Contacts />
			<Map />
		</div>
	);
}

export default App;
