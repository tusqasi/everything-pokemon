function Signup() {
	return (
		<div className="bg-gray-200">
			<div className="grid ">
				<div className="m-1">
					<lable>Name</lable>
					<input type="text" name="name" className="rounded" />
				</div>
				<div className="m-1">
					<lable>Email</lable>
					<input type="email" name="name" className="rounded" />
				</div>
				<button type="submit" className="bg-white rounded font-medium w-max m-4 p-2">Signup</button>
			</div>
		</div>
	);
}

export default Signup;
