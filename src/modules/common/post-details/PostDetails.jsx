import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { User, Calendar, MessageSquare, ChevronLeft } from 'lucide-react';
import PostCard from '../../components/post/Post.jsx';
import CommentSection from '../../components/comment/CommentSection.jsx';
import {_get} from "../../../utills/api.js";

const PostDetail = () => {
    const { postId } = useParams();
    const navigate = useNavigate();

    const [isAuthenticated, setIsAuthenticated] = useState(true);

    const [post, setPost] = useState();
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPost = async () => {
            try {
                setLoading(true);
                const [postData,relatedPostsData] = await Promise.all([
                    _get({endpointUrl:"api/post/67ee052e7d95bd1c7ddd417b"}),
                    _get({endpointUrl:"api/post?limit=4"})
                ])
                console.log(relatedPostsData, postData);
                setPost(postData.data.post);
                setRelatedPosts(relatedPostsData.data.posts);
            } catch (error) {
                console.error("Error loading post:", error);
            } finally {
                setLoading(false);
            }
        };

        loadPost();
    }, []);

    if (loading) {
        return <div className="flex justify-center p-12">Loading post...</div>;
    }

    if (!post) {
        return <div className="text-center p-12">Post not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Back button */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-indigo-600 mb-6 hover:text-indigo-800"
            >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to posts
            </button>

            {/* Hero image */}
            <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-80 object-cover rounded-xl mb-6"
            />

            {/* Post header */}
            <div className="mb-6">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-2">
                    {post.category}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>

                {/* Author and meta info */}
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <User className="h-10 w-10 rounded-full bg-gray-100 p-2 text-gray-600" />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <div className="flex space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {post.date}
                            </span>
                            <span className="flex items-center">
                                <MessageSquare className="h-4 w-4 mr-1" />
                                {post.comments} comments
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Post content */}
            <div className="prose prose-lg max-w-none mb-12">
                {post.content && post.content.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            {/* Comments section */}
            <div className="my-12">
                <h2 className="text-2xl font-bold mb-6">Comments</h2>

                {isAuthenticated ? (
                    <CommentSection postId={postId} comments={post.commentsList} />
                ) : (
                    <div className="bg-gray-50 p-6 rounded-lg text-center">
                        <p className="text-gray-800 mb-4">Please log in to leave a comment</p>
                        <button
                            onClick={() => navigate('/login', { state: { from: `/posts/${postId}` } })}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                        >
                            Log In
                        </button>
                    </div>
                )}
            </div>

            {/* Related posts */}
            {relatedPosts.length > 0 && (
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedPosts.map(relatedPost => (
                            <PostCard
                                key={relatedPost.id}
                                post={relatedPost}
                                compact={true}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostDetail;