import React, { useState } from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import Article from '../components/Article';
import { useNews } from '../hooks/useNews';
import PageButtons from '../components/PageButtons';
import LoadingSpinner from '../components/LoadingSpinner';


export default function Homepage() {
    const [page, setPage] = useState(1);
    const { data, isLoading } = useNews(page);

    if (isLoading) return <LoadingSpinner />

    return (
        <>
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between pb-24">
                <div className="grid grid-flow-row-dense  w-full gap-x-12 gap-y-16 mt-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {data?.articles.map((article, index) => {
                        return <Article key={index} data={article} />
                    })}
                </div>
            </div>
            <PageButtons pageNumber={page} setPageNumber={setPage}/>
        </>
    )
}
