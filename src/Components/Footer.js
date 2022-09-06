import React from "react";
import Logo from "../assets/logo.png";
import FooterComp from "./FooterComp";
import Watsap from "../assets/wtsp.webp";
import Mail from "../assets/mail.webp";
import tele from "../assets/tele.png";

function Footer() {
	return (
		<div className='bg-red py-4  px-4 w-full'>
			<div className='w-[90%] mx-auto lg:flex-row flex-col space-y-6 flex justify-between items-center'>
				<a href='https://wa.me/message/UW5CWNXP5AB7D1' target="blank">
					<FooterComp image={Watsap} text='09152690938' />
				</a>

				<div className='lg:w-[40%] text-center'>
					<FooterComp
						icon={true}
						text='13, Joseph Street,(Off Opebi Link Bridge) Near Adebola House, Opebi, Ikeja Lagos'
					/>
				</div>
				<a href='mailto:support@devnaija.com'>
					<FooterComp image={Mail} text='support@devnaija.com' />
				</a>
			</div>
		</div>
	);
}

export default Footer;
