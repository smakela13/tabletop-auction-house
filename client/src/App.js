import React, {useEffect} from 'react';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
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

const httpLink = createHttpLink({
	uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('id_token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	// Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

export default function App() {
	useEffect(() => {
		keepTheme();
	})
	return (
		<ApolloProvider client={client}>
			<div className='impDiv'>
				<Navigation />
				<Router>
					<Routes>
						{/* <Header /> */}
						<Route path='/profile' element={<Profile />} />
						<Route exact path='/' element={<Product />} />
						<Route path='/addItem' element={<AddItem />} />
						<Route path='/shopkeeper' element={<Shopkeeper />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/login' element={<Login />} />
						<Route path='/signup' element={<Signup />} />
						<Route path='/:productId' element={<SingleProduct />} />
					</Routes>
				</Router>
				<Footer />
			</div>
		</ApolloProvider>
	);
}
