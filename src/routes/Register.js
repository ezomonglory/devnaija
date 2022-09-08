import React, { useRef, useState } from "react";
// import FormInput from "./FormInput";
import FormReq from "../Components/FormReq";
// import FormSelect from "./FormSelect";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"
import Footer from "../Components/Footer";

function Register() {
	const {
		register,
		handleSubmit,
		// formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		const sendForm = {
			from_name: "Glory",
			to_name: "DevNaija",
			FirstName: data.First,
			LastName: data.Last,
			Email: data.Email,
			number: data.Number,
			Residence: data.Residence,
			noChildren: data.Children,
			typeClass: data.Type,
			Session: data.Session,
		};

		console.log(data);
		send("service_49dpq6c", "template_3a0i1vn", sendForm, "jwWrmMkwcweNApcdm")
			.then((response) => {
				console.log("SUCCESS!", response.status, response.text);
			})
			.catch((err) => {
				console.log("FAILED...", err);
			});
	};

	return (
        <div>
		<div
			className='text-center text-lg lg:w-[80%] mx-auto w-full p-2 scroll-smooth '
			id='form'
		>
			<Link to='/'>
				<div className='flex md:space-x-2 justify-center items-center mb-4 '>
					<img src={Logo} alt='logo' className='w-12' />
					<div>
						<p className='md:text-3xl text-lg uppercase font-bold'>
							DevNaija Academy{" "}
						</p>
						<p>Coding and financial literacy school</p>{" "}
					</div>
				</div>
			</Link>

			<h1 className='red text-3xl text-center mb-12 font-bold capitalize'>
				Please Fill The Form Below
			</h1>
			<h3 className='text-black font-bold text-2xl text-center mb-4'>
				To Join the online class the following will be required
			</h3>
			<div className='flex lg:space-x-12 space-y-6 lg:space-y-0 justify-center w-full lg:w-[80%] mx-auto lg:mb-8 flex-col lg:flex-row text-left'>
				<div className='lg:text-center space-y-6'>
					<FormReq text='Fast Internet Conection (4G recommended)' />
					<FormReq text='Zoom App' />
				</div>
				<div className='lg:text-center space-y-6'>
					<FormReq text='A Laptop or a Desktop with a webcam' />
					<FormReq text='Distraction-free environment' />
				</div>
			</div>
			<div>
				<h3 className='text-black font-bold text-2xl text-center mb-4'>
					For enquiries and to Join the on-site classes
				</h3>
				<p>
					Chat Dele on{" "}
					<a
						href='https://wa.me/message/UW5CWNXP5AB7D1'
						className='cursor-pointer underline'
					>
						09152690938
					</a>{" "}
					Or <br /> Visit us at 13, Joseph Street,Opebi(opposite Adebola house),
					Ikeja Lagos
				</p>
			</div>

			<form
				className='lg:w-[70%] mx-auto mt-8 w-full  '
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='flex lg:space-x-4 flex-col lg:flex-row '>
					<label className='text-left'>
						<h2>Parent's First Name</h2>
						<input
							type='text'
							{...register("First")}
							placeholder="Parent's First Name"
							className='border w-[100%] border-gray-300 outline-none text-black p-2 '
							size={50}
						/>
					</label>

					<label className='text-left'>
						<h2>Parent's Last Name</h2>
						<input
							{...register("Last")}
							type='text'
							placeholder="Parent's Last Name"
							className='border w-[100%] border-gray-300 outline-none text-black p-2 '
							size={50}
						/>
					</label>
				</div>
				<label className='text-left'>
					<h2>Parent's Email Address</h2>
					<input
						{...register("Email")}
						type='email'
						placeholder="Parent's Email Address"
						className='border w-[100%] border-gray-300 outline-none text-black p-2 '
						size={50}
					/>
				</label>

				<label className='text-left'>
					<h2>Parent Phone Number</h2>
					<input
						{...register("Number")}
						type='text'
						placeholder='Parent Phone Number'
						className='border w-[100%] border-gray-300 outline-none text-black p-2 '
						size={50}
					/>
				</label>

				<label className='text-left'>
					<h2>Parent's Residence</h2>
					<input
						{...register("Residence")}
						type='text'
						placeholder="Parent's Residence"
						className='border w-[100%] border-gray-300 outline-none text-black p-2 '
						size={50}
					/>
				</label>
				<label className='text-left'>
					<h2>Number of Children to Register</h2>
					<input
						{...register("Children")}
						type='text'
						placeholder='Number of Children to Register'
						className='border w-[100%] border-gray-300 outline-none text-black p-2 '
						size={50}
					/>
				</label>

				<label className='text-left'>
					<h2 className='mb-2'>Please choose a session</h2>
					<select
						placeholder='Select a session'
						className='w-full border border-gray-300 outline-none p-2'
						{...register("Type")}
					>
						<option disabled selected>
							--Please Select an Option--
						</option>
						<option value='Physical(In-Person)Class'>
							Physical(In-Person)Class
						</option>
						<option value='Virtual(Online)Class'>Virtual(Online)Class</option>
					</select>
				</label>

				<label className='text-left'>
					<h2 className='mb-2'>Please choose a session</h2>
					<select
						placeholder='Select a session'
						{...register("Session")}
						className='w-full border border-gray-300 outline-none p-2'
					>
						<option disabled selected>
							--Please Select an Option--
						</option>
						<option value='Morning Session 10AM - 12AM'>
							Morning Session 10AM - 12AM
						</option>
						<option value='Afternoon Session 1PM - 3PM'>
							Afternoon Session 1PM - 3PM
						</option>
					</select>
				</label>

				<button className='bg-red hover:bg-red-500 w-full mt-4 text-white py-2 px-6 mb-4 uppercase rounded-full'>
					<input type='Submit' className='text-white uppercase ' />
				</button>
			</form>

			<p className='text-lg mb-6 mt-6 lg:mt-0'>
				Tuition fee is{" "}
				<span className='text-black font-bold'> N20,000/$30</span> per child for
				a month and <span className='text-blacl font-bold'>N35,000/$55</span>{" "}
				per child for 2 months{" "}
			</p>
			<p>
				Payments should be made to{" "}
				<span className='uppercase text-black font-bold '>
					{" "}
					devnaija academy limited 0720867771 gtbank
				</span>{" "}
				Naira Account or <br />
				<span className='text-black font-bold uppercase'>
					devnaija academy limited 0720767929 gtbank
				</span>{" "}
				USD account
				<br />
				Send Proof of Payment to{" "}
				<span className='text-black font-bold text-lg'>
					support@devnaija.com
				</span>
			</p>

			{/* <a href='#form' className='scroll-smooth'>
				<button className='bg-red py-2 px-6 text-white rounded-full hover:scale-105 active:scale-95 mt-4 text-2xl  hover:bg-red-600'>
					Book Now
				</button>
			</a> */}

		</div>
            <div className=" mt-6"><Footer /></div>
        </div>
	);
}

export default Register;
