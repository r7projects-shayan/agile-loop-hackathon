import React from "react";
const sizes = {
		textxs: "text-sm font-medium",
	textxl: "text-2x1 font-medium lg:text-xl md:text-[22px]",
	headingxs: "text-2x1 font-semibold lg:text-xl md:text-[22px]",
	headings: "text-4xl font-semibold lg:text-3xl md:text-[34px] sm:text-[32px]",
	headingmd: "text-[42px] font-extrabold lg:text-[35px] md:text-[38px] sm:text-[32px]", 
	headinglg: "text-[80px] font-black lg:text-[80px] md:text-5x1",
};

const Heading = ({ children, className = "",size = "textxl", as, ...restProps }) => { const Component = as || "h6";
return (
<Component className={`text-white-a700 font-inter ${className} ${sizes[size]}`} {...restProps}>
{children}
</Component>
);
};
export { Heading };