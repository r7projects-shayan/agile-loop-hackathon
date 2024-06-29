import { Button, Img, Heading } from "./.."; 
import React from "react";
export default function Header1({ ...props }) {
return (
<header {...props} className={"${props.className} flex justify-between items-center ml-10 gap-5 lg:ml-0 md:ml-0"}> <div className="flex items-center gap-2.5">
<Img src="images/img_header_logo.png" alt="header logo" className="h-[46px] w-[152px] object-contain" /> <Heading size="textxs" as="p" className="mt-3 self-start !font-outfit">
</Heading>
<Heading size="textxs" as="p" className="! font-outfit !text-cyan-100_01">
Workspace
</Heading> </div>
<a href="#">
<Button color="white_A700" size="xs" shape="circle" className="w-[32px] !rounded-[16px]">
<Img src="images/img_lock.svg" />
</Button>
</a>
</header>
);
}