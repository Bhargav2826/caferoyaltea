import React from 'react';
import Skeleton from './Skeleton';

const PageSkeleton = () => {
    return (
        <div className="bg-silver-200 dark:bg-slate-900 min-h-screen">
            {/* Hero Skeleton */}
            <section className="h-screen flex items-center justify-center px-6">
                <div className="container mx-auto flex flex-col items-center">
                    <Skeleton className="w-[80%] h-16 md:h-24 mb-8" />
                    <Skeleton className="w-[60%] h-8 mb-12" />
                    <div className="flex space-x-4">
                        <Skeleton className="w-40 h-14" />
                        <Skeleton className="w-40 h-14" />
                    </div>
                    {/* Floating image skeleton */}
                    <Skeleton className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] mt-16 rounded-3xl" />
                </div>
            </section>

            {/* Content Sections */}
            {[1, 2, 3].map((section) => (
                <section key={section} className="py-24 px-6 border-t border-silver-300/10">
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center mb-16 text-center">
                            <Skeleton className="w-1/4 h-6 mb-4" />
                            <Skeleton className="w-1/2 h-12 mb-6" />
                            <Skeleton className="w-1/3 h-4" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3].map((card) => (
                                <div key={card} className="glass p-8 rounded-3xl space-y-6">
                                    <Skeleton className="w-full aspect-video rounded-2xl" />
                                    <Skeleton className="w-3/4 h-8" />
                                    <Skeleton className="w-full h-4" />
                                    <Skeleton className="w-1/2 h-4" />
                                    <div className="flex justify-between items-center pt-4">
                                        <Skeleton className="w-20 h-8" />
                                        <Skeleton className="w-24 h-10" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default PageSkeleton;
