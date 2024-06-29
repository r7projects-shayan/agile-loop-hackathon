import React from "react";
const sizes = {

texts: "text-base font-light 1g:text-[13px]",
textmd: "text-lg font-normal not-italic lg:text-[15px]", 
textlg: "text-xl font-normal not-italic lg:text-[17px]",
};
const Text = ({ children, className = "", as, size ="texts", ...restProps }) => {
const Component = as || "p";
return (

<Component className={`text-white-a700 font-inter ${className} ${sizes[size]}`} {...restProps}>
{children}
</Component>
);
};
export { Text };