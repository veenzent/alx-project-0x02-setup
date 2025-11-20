import { CardProps } from "@/interfaces/index";

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="bg-white dark:bg-black p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-lg">{content}</p>
    </div>
  );
};

export default Card;