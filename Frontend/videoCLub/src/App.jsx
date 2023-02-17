import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Table from './components/Table';
import Navbar from './components/Navbar';
import Edit from './components/Forms.jsx/Edit';
import Add from './components/Forms.jsx/Add';
import Movies from './components/Forms.jsx/Movies';

function App() {
	const [theme, setTheme] = useState(null);
	const [movie, setMovie] = useState([]);


	useEffect(() => {

		const getMovies = async () => {
			const movie = await fetch("")
			const res = await movie.json()
			setMovie(res)
		}
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}

		getMovies();
	}, []);

const addData = (item) => {
	const body = JSON.stringify(item);

	const request = {
		method: 'POST',
		headers: {'Content-Type':'application/json'},
		body: body
	};

	const handleThemeSwitch = (e) => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect((e) => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);



	return (
		<div className="bg-white dark:bg-slate-900 min-h-screen font-inter  ">
			<div className="">
			
				<Navbar />
				
				<Routes>
					<Route path="/" exact element={<Table />} />
					<Route path="/forms" element={<Movies movieData={movieData} setMovie={setMovie} addData={addData}/>}/>
				</Routes>
				


			</div>

			<>
				<button
					type="button"
					onClick={handleThemeSwitch}
					className="fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md">
					{theme === 'dark' ? '🌚' : '🌝'}
				</button>
				<div className="bg-white dark:bg-slate-700 min-h-screen font-inter ">
					<div className="max-w-6xl w-11/12 mx-auto">

					</div>
				</div>
			</>
		</div>
		)
	}
}
export default App
