import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";
import { useState, useEffect } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async (): Promise<UserProps[]> => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
};

// SSG function to fetch users at build time but I'm actually not using this function at all.
export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const users = await response.json();

    return {
        props: {
            users: users.map((post: any) => ({
                userId: post.userId,
                title: post.title,
                content: post.body,
            })),
        },
    };
}



const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<UserProps[]>([]);

    useEffect(() => {
        const fetchUsersData = async () => {
            const fetchedUsers = await fetchUsers();
            setUsers(fetchedUsers);
        };
        fetchUsersData();
    }, []);

    return (
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                Users
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Hello, welcome to Alex's users page. I'm passionate about
                building web applications with modern technologies like
                Next.js, TypeScript, and Tailwind CSS.
            </p>
            {users.map((user, index) => (
                <UserCard
                    key={index}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    address={user.address}
                />
            ))}
        </main>
    );
};

export default UsersPage;
