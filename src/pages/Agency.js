import React from 'react'
import AgencyArticle from '../components/AgencyArticle';
import { useAgencyNews } from '../hooks/useAgencyNews';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Agency() {
    let { name } = useParams();
    const { data, isLoading } = useAgencyNews(name);
    // console.log(data)

    if (isLoading) return <LoadingSpinner />

    return (
        <>
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between pt-5">
                <div>
                    <h1 className="text-xs text-gray-500 mb-2">newsportal {'>'} agencja</h1>
                    <h1 className="text-2xl font-bold">{name}</h1>
                </div>
                <div className="grid grid-flow-row-dense  w-full gap-x-12 gap-y-16 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {data.map((article, index) => {
                        return <AgencyArticle key={index} data={article} />
                    })}
                </div>
            </div>
        </>
    )
}
