import React from "react"; 
import PropTypes from "prop-types";
const shapes = {

circle: "rounded-[50%]", 
round: "rounded-[10px]",
};
const variants = {
	fill: {
	cyan_100: "bg-cyan-100 shadow-bs text-gray-900_01", 
	cyan_100_01: "bg-cyan-100_01 text-gray-900_05", 
	indigo_800: "bg-indigo-800",
	white_A700: "bg-white-a700",
	light_blue_800: "bg-light_blue-800 text-white-a700", 
	black_900_02: "bg-black-900_02 text-white-a700",
},
};


const sizes = {
	xs: "h-[32px] px-1",
	sm: "h-[44px] px-[18px] text-lg", 
	md: "h-[64px] px-[34px] text-lg",
};

const Button = ({
	children,
	className = "",
	leftIcon,
	rightIcon,
	shape,
	variant = "fill",
	size = "md",
	color = "black_900_02",
	...restProps
}) => {
	return (
	<button className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
{...restProps}
>

{!!leftIcon && leftIcon} 
{children}
{!!rightIcon && rightIcon}
</button>
);
};
Button.propTypes = {
className: PropTypes.string, 
children: PropTypes.node, 
leftIcon: PropTypes.node,
rightIcon: PropTypes.node,
shape: PropTypes.oneOf (["circle", "round"]),
size: PropTypes.oneOf(["xs", "sm", "md"]),
variant: PropTypes.oneOf(["fill"]),
color: PropTypes.oneOf(["cyan_100", "cyan_100_01", "indigo_800", "white_A700", "light_blue_800", "black_900_02"]), };
export { Button };