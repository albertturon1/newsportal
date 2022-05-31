import React from 'react'
import { format } from 'fecha';

export default function PhotographerPhoto({ data }) {
    const { alt, src: { landscape: image}, url } = data;

    return (
        <div className="">
            <a href={url}>
                <div className="aspect-video bg-red-600 overflow-hidden relative">
                    <img src={image} className="object-fill h-full w-full" />
                    <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-bg-transparent px-3 pb-1 pt-24 w-full">
                        <h1 className="mb-3 text-lg sm:text-2xl md:text-xl lg:text-2xl font-medium text-white ">{alt}</h1>
                    </div>
                </div>
            </a>
        </div>
    )
}
