import React from 'react'
import { format, setGlobalDateI18n, setGlobalDateMasks } from 'fecha';

export default function Article({ data }) {
    const { author, content, description, publishedAt, source: { name }, title, url, urlToImage } = data;
    const publicationData = format(new Date(publishedAt), 'D MMMM YYYY o HH.mm');

    return (
        <div className="">
            <a href={url}>
                <div className="aspect-video bg-red-600 overflow-hidden relative">
                    <img src={urlToImage} className="object-fill h-full w-full" />
                    <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-bg-transparent px-3 pb-1 pt-24 w-full">
                        <h1 className="mb-3 text-lg sm:text-2xl md:text-xl lg:text-2xl font-medium text-white ">{title.slice(0, 70)}</h1>
                    </div>
                </div>
            </a>
            <h1 className="mt-1 text-lg  font-bold">{author}</h1>
            <h1 className="text-sm">{publicationData}</h1>
        </div>
    )
}
