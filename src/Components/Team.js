import React from "react";
import TeamMember from "./TeamMember";
import Abiodun from "../assets/Abiodun.jpeg";
import Dele from "../assets/Dele.jpeg";
import Dolapo from "../assets/Dolapo.jpg";
import EG from "../assets/eg.jfif";

function Team() {
	return (
		<div className='lg:w-[90%] mx-auto w-full p-2'>
			<h1 className='uppercase red text-3xl text-center font-bold mb-4'>
				Meet our team
			</h1>
			<div className='grid  w-full grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8'>
				<TeamMember
					Name='Dolapo Awe'
					Title='Manager/Financial Literate/Instructor'
					image={Dolapo}
				/>
				<TeamMember Name='Abiodun Obisesan' Title='Advisor' image={Abiodun} />
				<TeamMember
					Name='Bamidele Adedeji'
					Title='Software Developer/Instructor'
					image={Dele}
				/>
				<TeamMember
					Name='Ezomon Glory'
					Title='FrontEnd Developer/Instructor'
					image={EG}
				/>
			</div>
		</div>
	);
}

export default Team;
