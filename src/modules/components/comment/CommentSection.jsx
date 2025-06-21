import React, { useState } from 'react';
import { User, Send } from 'lucide-react';

const CommentSection = ({ postId, comments = [] }) => {
    const [commentText, setCommentText] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [userComments, setUserComments] = useState(comments);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!commentText.trim()) return;

        try {
            setSubmitting(true);
            // In a real app, send to your API
            const newComment = await (postId, commentText);

            // Add the new comment to the list
            setUserComments([...userComments, newComment]);
            setCommentText('');
        } catch (error) {
            console.error("Error posting comment:", error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div>
            {/* List of existing comments */}
            <div className="space-y-6 mb-8">
                {userComments.map(comment => (
                    <div key={comment.id} className="flex space-x-4">
                        <div className="flex-shrink-0">
                            <User className="h-10 w-10 rounded-full bg-gray-100 p-2 text-gray-600" />
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center">
                                <h4 className="font-medium text-gray-900">{comment.author}</h4>
                                <span className="ml-2 text-sm text-gray-500">{comment.date}</span>
                            </div>
                            <p className="mt-1 text-gray-800">{comment.text}</p>
                        </div>
                    </div>
                ))}

                {userComments.length === 0 && (
                    <p className="text-gray-500 italic">Be the first to comment!</p>
                )}
            </div>

            {/* Comment form */}
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                        <User className="h-10 w-10 rounded-full bg-gray-100 p-2 text-gray-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                            <textarea
                                rows={3}
                                name="comment"
                                id="comment"
                                className="block w-full py-3 px-4 border-0 resize-none focus:ring-0 focus:outline-none sm:text-sm"
                                placeholder="Add a comment..."
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                            />
                        </div>

                        <div className="mt-3 flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                                Remember to keep comments respectful.
                            </div>
                            <button
                                type="submit"
                                disabled={submitting || !commentText.trim()}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300 disabled:cursor-not-allowed"
                            >
                                {submitting ? 'Posting...' : (
                                    <>
                                        Post <Send className="ml-1 h-4 w-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CommentSection;
