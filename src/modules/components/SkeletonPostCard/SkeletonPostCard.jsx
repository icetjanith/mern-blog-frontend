import React from 'react';

const SkeletonPostCard = ({ compact = false }) => {
    return (
        <div className="animate-pulse bg-white border border-slate-200 rounded-lg shadow p-4">
            <div className="h-40 bg-slate-200 rounded mb-4" />

            <div className="space-y-2">
                <div className="h-4 bg-slate-300 rounded w-3/4" />
                <div className="h-4 bg-slate-300 rounded w-1/2" />

                {!compact && (
                    <>
                        <div className="h-4 bg-slate-200 rounded w-full" />
                        <div className="h-4 bg-slate-200 rounded w-5/6" />
                    </>
                )}
            </div>
        </div>
    );
};

export default SkeletonPostCard;
