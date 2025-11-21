import { type ButtonProps } from "@/interfaces";

const Button = ({ size, shape }: ButtonProps) => {
    return <button className={`btn ${size} ${shape}`}>Button</button>;
};

export default Button;