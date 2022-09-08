import React from "react";
import TeamMember from "./TeamMember";
import Abiodun from "../assets/Abiodun.jpeg";
import Dele from "../assets/Dele.jpeg";
import Dolapo from "../assets/Dolapo.jpg";
import EG from "../assets/eg.jfif";
import Bimbo from "../assets/bimbo.jpeg";
import Yet from "../assets/Yet.jpeg";

function Team() {
	return (
		<div className='lg:w-[90%] mx-auto w-full p-2'>
			<h1 className='uppercase red text-3xl text-center font-bold mb-4'>
				Meet our team
			</h1>
			<div className='grid  w-full grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8'>
				<TeamMember
					Name='Abiodun Obisesan'
					Title=' Senior software developer /Advisor'
					image={Abiodun}
				/>

				<TeamMember Name='Dolapo Ogunbiyi' Title='Manager' image={Dolapo} />

				<TeamMember
					Name='Bimbo Omotoso'
					Title='Senior Software Developer/Advisor'
					image={Bimbo}
				/>

				<TeamMember
					Name='Bamidele Adedeji'
					Title='Software Developer/Instructor'
					image={Dele}
				/>

				<TeamMember
					Name='Ezomon Glory'
					Title='Front-End Developer/Instructor'
					image={EG}
				/>

				<TeamMember
					Name='Jadesola Yetunde'
					Title='Front-End Developer/Secretary'
					image={Yet}
				/>
			</div>
		</div>
	);
}

export default Team;
