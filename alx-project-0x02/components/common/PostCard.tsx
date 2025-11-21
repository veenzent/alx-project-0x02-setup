import { type PostProps } from "@/interfaces";
import { useState, useEffect } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = async (): Promise<PostProps[]> => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.map((post: any) => ({
        userId: post.userId,
        title: post.title,
        content: post.body,
    }));
};

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
    const [posts, setPosts] = useState<PostProps[]>([]);
    useEffect(() => {
        const fetchPostsData = async () => {
            const fetchedPosts = await fetchPosts();
            setPosts(fetchedPosts);
        };
        fetchPostsData();
    }, []);
    return (
        <div className="border border-gray-300 rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700 mb-4">{content}</p>
            <span className="text-sm text-gray-500">User ID: {userId}</span>
        </div>
    );
};

export default PostCard;
