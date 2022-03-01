import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Product from './pages/store';
import Shopkeeper from './components/Shopkeeper';
import AddItem from './pages/addItem';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './pages/profile';
import Footer from './components/Footer';
import SingleProduct from './pages/SingleProduct';
import { keepTheme } from './components/themes';

export default function App() {
	useEffect(() => {
		keepTheme();
	})
	return (
		<Router>
			<Routes>
				<div className='impDiv'>
					{/* <Header /> */}
					<Navigation />
					<Route exact path='/profile'>
						<Profile />
					</Route>
					<Route exact path='/'>
						<Product />
					</Route>
					<Route exact path='/addItem'>
						<AddItem />
					</Route>
					<Route exact path='/shopkeeper'>
						<Shopkeeper />
					</Route>
					<Route exact path='/contact'>
						<Contact />
					</Route>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route exact path='/signup'>
						<Signup />
					</Route>
					<Route exact path='/:productId'>
						<SingleProduct />
					</Route>
					<Footer />
			</div>
			</Routes>
		</Router>
	);
}
