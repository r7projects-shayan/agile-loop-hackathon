import { Button, Text, Img } from "./..";
import React from "react";
export default function Header({ ...props }) {
return ( 
	<header
			{...props}
			className={`${props.className} flex md:flex-col justify-between items-center w-[88%] lg:w-full md:w-full gap-5`}
			>
			<img src="images/img_header_logo.png" alt="header logo" className="h-[52px] w-[174px] object-contain" /> 
			<ul className="flex justify-center gap-[76px]">
			<li>
			<a href="#">
				<Text size="textmd" as="p">
					Home
				</Text>
			</a>
			</li>
			<li>
			<a href="#">
			<Text size="textmd" as="p">
			Features
			</Text>
			</a>
			</li>
			<li>
			<a href="#">
			<Text size="textmd" as="p">
			Plans & Pricing
			</Text>
			</a> </li> </ul>
			<Button color="indigo_800" size="sm" shape="round" className="min-w-[104px] text-white-a700">
			Contact
			</Button>
			</header>
			);
			}