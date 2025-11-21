import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, email, address }) => {
    return (
        <div className="bg-white p-6 m-1.5 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:border-gray-600">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h2>
            <p className="text-gray-600 dark:text-gray-400">ID: {id}</p>
            <p className="text-gray-600 dark:text-gray-400">Name: {name}</p>
            <p className="text-gray-600 dark:text-gray-400">Email: {email}</p>
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Address</h3>
                <p className="text-gray-600 dark:text-gray-400">Street: {address.street}</p>
                <p className="text-gray-600 dark:text-gray-400">Suite: {address.suite}</p>
                <p className="text-gray-600 dark:text-gray-400">City: {address.city}</p>
                <p className="text-gray-600 dark:text-gray-400">Zipcode: {address.zipcode}</p>
            </div>
        </div>
    );
};

export default UserCard;