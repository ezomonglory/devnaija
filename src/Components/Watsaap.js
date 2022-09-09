import React, { useState } from "react";
import Wat from "../assets/wat.gif";
import hand from "../assets/hand.gif";

function Watsaap() {
	const [show, setShow] = useState(true);


	return (
		<a
			href='https://wa.me/message/UW5CWNXP5AB7D1'
			target='blank'
			className='fixed bottom-4 right-4 z-50 '
		>
			{show ? (
				<div className='flex space-x-2 bg-red py-2 px-4 text-white rounded-lg items-center'>
					<img src={hand} alt='hand' className='h-12 w-12' />
					<h1 className=''>CHAT US</h1>
				</div>
			) : (
				" "
			)}
			<div className='rounded-full h-16 w-16 overflow-hidden ml-12'>
				<img src={Wat} alt='Chat' />{" "}
			</div>
		</a>
	);
}

export default Watsaap;
