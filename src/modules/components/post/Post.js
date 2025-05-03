import React from 'react';
import { User } from 'lucide-react';

const PostCard = ({ post, compact = false }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
            <div className="flex-col h-full">
                <div className="md:flex-shrink-0">
                    <img
                        className={`w-full object-cover ${compact ? 'h-40' : 'h-48'}`}
                        src={post.imageUrl}
                        alt={post.title}
                    />
                </div>
                <div className={`${compact ? 'p-5' : 'p-8'} flex flex-col h-full`}>
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        {post.category}
                    </div>
                    <a
                        href="#"
                        className={`block mt-1 ${compact ? 'text-lg' : 'text-2xl'} font-semibold text-gray-900 hover:underline`}
                    >
                        {post.title}
                    </a>
                    <p className="mt-2 text-gray-600 text-sm flex-grow">
                        {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center">
                        <div className="flex-shrink-0">
                            <User className={`${compact ? 'h-8 w-8' : 'h-10 w-10'} rounded-full bg-gray-100 p-2 text-gray-600`} />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">{post.author}</p>
                            <div className="flex space-x-1 text-sm text-gray-500">
                                <time dateTime={post.date}>{post.date}</time>
                                <span aria-hidden="true">&middot;</span>
                                <span>{post.comments} comments</span>
                            </div>
                        </div>
                        {!compact && (
                            <div className="ml-auto">
                                <a
                                    href="#"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                                >
                                    Read More
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;