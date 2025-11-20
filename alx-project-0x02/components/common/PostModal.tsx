import { PostModalProps } from "@/interfaces";
import React, { useState } from "react";


const PostModal: React.FC<PostModalProps> = ({ onCloseModal }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCloseModal({ title, content });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Add a new post</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Title
            <input
              type="text"
              name="title"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-500 focus:ring-offset-indigo-200"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mt-4">
            Content
            <textarea
              name="content"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-500 focus:ring-offset-indigo-200"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </label>
          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-blue-500 px-5 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-blue-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostModal;