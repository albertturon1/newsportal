import React, { useState } from 'react'
import Photo from '../components/Photo';
import { useImages }from '../hooks/useImages';
import PageButtons from '../components/PageButtons';
import LoadingSpinner from '../components/LoadingSpinner';


export default function Homepage() {
    const [page, setPage] = useState(1);
    const { data, isLoading } = useImages(page);
    // console.log(data)
    if (isLoading) return <LoadingSpinner />

    return (
        <>
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between pb-24">
                <div className="grid grid-flow-row-dense  w-full gap-x-12 gap-y-16 mt-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {data?.map((article, index) => {
                        return <Photo key={index} data={article} />
                    })}
                </div>
            </div>
            <PageButtons pageNumber={page} setPageNumber={setPage}/>
        </>
    )
}
