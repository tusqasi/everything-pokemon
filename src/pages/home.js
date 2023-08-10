import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession, signIn, signOut } from "next-auth/react"
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

const keys = ['name',];

function Result(props) {

	return (
		<div className=' w-full p-3 flex flex-col  '>
			{keys.map((key) => {
				return (
					<div>
					<span class={` scale-150 pokesprite pokemon ${props.name.toLowerCase()}`}></span>
						<table>
							<tr>
								<td>
									<div>Name: </div>
								</td>
								<td>
									<div> {props.name}</div>
								</td>
							</tr>
							<tr>
								<td>
									<div>Type 1: </div>
								</td>
								<td>
									<div> {capitalizeFirstLetter(props.type1)}</div>
								</td>
							</tr>

						</table>
					</div>
				);
			})}
		</div >
	);
}

function SearchBar() {
	const [value, setValue] = useState(''); // Here we'll store the value of the search bar's text input
	const [suggestions, setSuggestions] = useState([]); // This is where we'll store the retrieved suggestions
	const [hideSuggestions, setHideSuggestions] = useState(true);
	const [result, setResult] = useState(null);

	function selectResult(name) {

		const _result = suggestions.find((suggestion) => suggestion.name.includes(name));
		setResult(_result);
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				// const {data} = await axios.get(
				//   `https://dummyjson.com/products/search?q=${value}`
				// );
				// 
				const { data } = await axios.post(
					`/api/findname`,
					{ partial_name: value, limit: 5 }
				);


				setSuggestions(data.products);
				setResult(suggestions[0]);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, [value]);

	return (
		<>
			<div className="flex justify-center ">
				<div>
					<input
						onFocus={() => setHideSuggestions(false)}
						onBlur={async () => {
							setTimeout(() => {
								setHideSuggestions(true);
							}, 200);
						}}
						type="text"
						className="p-3 mb-1 w-60 bg-slate-100 rounded border-solid border-3 border-black focus:bg-white"
						placeholder="Search data..."
						value={value}
						onChange={(e) => {

							setValue(e.target.value);
						}} />
					<div
						className={"flex-col"}
					>
						{suggestions ? suggestions.map((suggestion) => (
							<div
								className="p-3 mb-1  border-solid border-2 border-indigo-200 rounded text-slate-500
										   hover:text-black hover:border-indigo-400"
								onClick={function() {
									return selectResult(suggestion.name);
								}}
							>
								{suggestion.name}
							</div>
						)) : "sf"}
					</div>
				</div>
				<div className='ml-4 h-max border-solid border-2 border-indigo-400 rounded w-60  '>
					{result ? <Result {...result} /> :


						<div className=' w-full p-3 flex flex-col items-center '>
							No Selection
						</div >
					}
				</div>
			</div>
		</>
	);
}

function Home() {
	const { data: session } = useSession();

	if (session) {
		return (
			<>
				<div className='flex justify-center'>
					<div className='text-center text-xl font-medium m-5'>
						<p> You can search for you favorite pokemon here </p>
					</div>
				</div>
				<SearchBar />
			</>
		);
	}
	return (<>
		<p>
			Not logged in
		</p>
		<button onClick={signIn} className='bg-slate-100'>Sign In</button>
	</>);
}
export default Home;
