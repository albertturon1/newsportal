import React from 'react'
import PhotographerPhoto from '../components/PhotographerPhoto';
import { usePhotographerImages } from '../hooks/usePhotographerImages';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Agency() {
    let { id } = useParams();
    const { data, isLoading } = usePhotographerImages(id);
    console.log('data', data)
    if (isLoading) return <LoadingSpinner />

    return (
        <>
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between pt-5">
                <div>
                    <h1 className="text-xs text-gray-500 mb-2">newsportal {'>'} fotograf</h1>
                    <h1 className="text-2xl font-bold">{data[0].photographer}</h1>
                    <a href={data[0].photographer_url} className="text-sm mt-5 text-blue-700">Przejdź do profilu na Pexels.com</a>

                </div>
                <div className="grid grid-flow-row-dense  w-full gap-x-12 gap-y-16 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {data.map((article, index) => {
                        return <PhotographerPhoto key={index} data={article} />
                    })}
                </div>
            </div>
        </>
    )
}
