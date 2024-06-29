import React from "react"; 
import PropTypes from "prop-types";
const shapes = {
	round: "rounded-[10px]",
};

const variants = {
	fill: {
	black_900_02: "bg-black-900_02 text-gray-500",

},
};
const sizes = 
{
sm: "h-[80px] pl-[26px] pr-[34px] text-lg", 
xs: "h-[64px] pl-7 pr-[34px] text-lg",
};
const Input = React.forwardRef(
(
{
className = "",
name = "",
placeholder = "",
type = "text",
children,
label = "",
prefix,
suffix,
onChange,
shape,
variant = "fill",
size = "xs",
color = "black_900_02",
...restProps
},
ref, ) => {
return (
<label
className={`${className} flex items-center justify-center cursor-text text-gray-500 text-lg border-blue_gray-900_01 border border-solid bg-black-900_02 rounded-[10px] ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
>
{!!label && label}
{!!prefix && prefix}
<input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
{!!suffix && suffix}
</label>
);
},
);
Input.propTypes = {
className: PropTypes.string, 
name: PropTypes.string, 
placeholder: PropTypes.string, 
type: PropTypes.string, 
label: PropTypes.string, 
prefix: PropTypes.node, 
suffix: PropTypes.node,
shape: PropTypes.oneOf(["round"]), 
size: PropTypes.oneOf(["sm", "xs"]), 
variant: PropTypes.oneOf(["fill"]), 
color: PropTypes.oneOf(["black_900_02"]), };
export { Input };