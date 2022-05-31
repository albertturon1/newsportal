import React from 'react'

export default function PageButtons({ pageNumber, setPageNumber }) {
    const prevPage = () => setPageNumber(prev => prev - 1);
    const nextPage = () => setPageNumber(prev => prev + 1);

    return (
        <div className="container mx-auto flex flex-row items-center justify-center">
            {pageNumber === 1 ? null : <Button title='Poprzednia' left onClick={prevPage} />}
            <Button title='Następna' onClick={nextPage} />
        </div>
    )
}

const Button = ({ title, left, onClick }) => {
    return (
        <div className="px-5 py-2 w-40 rounded-md border-cyan-500 mx-3 text-center flex flex-row hover:cursor-pointer mb-6" style={{ borderWidth: 1 }} onClick={onClick}>
            {left ? <Icon left /> : null}
            <h1 className="text-center">{title}</h1>
            {!left ? <Icon /> : null}
        </div>
    )
}


const Icon = ({ left }) => {
    if (left) return (
        <div className="mr-3 rotate-180">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg>
        </div>

    )
    return (
        <div className="ml-3" >
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg>
        </div >
    )
}
