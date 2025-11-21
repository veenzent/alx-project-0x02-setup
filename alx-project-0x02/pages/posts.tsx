import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";
import PostCard from "@/components/common/PostCard";
import { fetchPosts } from "@/components/common/PostCard";
import { useState, useEffect } from "react";
import { type PostProps } from "@/interfaces";

export default function Posts() {
    const [posts, setPosts] = useState<PostProps[]>([]);
    // useEffect(() => {
    //     const fetchPostsData = async () => {
    //         const fetchedPosts = await fetchPosts();
    //         setPosts(fetchedPosts);
    //     };
    //     fetchPostsData();
    // }, []);

    const fetchPostsData = async () => {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
    };
    fetchPostsData();
    return (
        <>
            <Header />
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                    Posts
                </h1>
                <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    Hello, welcome to Alex's posts page. I'm passionate about
                    building web applications with modern technologies like
                    Next.js, TypeScript, and Tailwind CSS.
                </p>

                {posts.map((post, index) => (
                    <PostCard
                        key={index}
                        userId={post.userId}
                        title={post.title}
                        content={post.content}
                    />
                ))}
            </main>
        </>
    );
}
