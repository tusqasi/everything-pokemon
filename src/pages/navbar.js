import Image from 'next/image'
// import { useSession, signIn, signOut } from "next-auth/react"
import localFont from 'next/font/local'
import Link from "next/link";
import React from "react";

// Font files can be colocated inside of `app`
const myFont = localFont({
	src: '../../public/pokemon_font.ttf',
	display: 'swap',
})

export default function Navbar() {
	// const { data: session } = useSession()
	//
	// mocked session
	const session = {user: {image:"https://images.genius.com/a3c775785c08bb746278232194792f6d.750x750x1.jpg"}};


	return (
		<>
			<nav className='flex justify-between  bg-[#CAD2C5]' >
				<div className="flex flex-row rounded-full p-4 w-max ">
					<div className=' pr-4'>
						<Image
							src="/../public/pokeball-logo.png"
							width={75}
							height={75}
							alt="A pokeball-logo"
						/>

					</div>
					<div className=' flex flex-col justify-center '>
						<a className={" text-2xl lg:text-4xl font-extrabold  " + " " + myFont.className}>Everything Pokemon</a>
					</div>
				</div>
				<div className="flex flex-col justify-center mr-20 lg:text-2xl ">
					<div className='flex'>
						<ul className="flex w-max h-max">
							<li className='w-max p-2'>
								<Link href="/pokedex">Pokedex</Link>
							</li>
							<li className='w-max p-2'>
								<Link href="/about">About</Link>
							</li>
						</ul>
						<div className='ml-1 lg:ml-10'>
							{

								session ?
									<Image
										src={session.user.image}
										width={50}
										height={50}
										alt="User Avatar Image"
										className='rounded-full'
									/>

									:
									<Image
										src="/../public/default_avatar.png"
										width={50}
										height={50}
										alt="Default avatar"
									/>
							}
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};
