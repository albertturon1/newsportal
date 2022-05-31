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
            <a  href={`/agency/${name}`} className="text-sm text-blue-700">{name}</a>
            <h1 className="text-sm">{publicationData}</h1>
        </div>
    )
}

//ustawiam parametry do format, które będę wykorzystywał do foramtowania daty na polskie wartości
setGlobalDateI18n({
    dayNamesShort: ["Niedz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"],
    dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piatek", "Sobota"],
    monthNamesShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sier", "Wrz", "Paź", "Lis", "Gru"],
    monthNames: ["Stycznia", "Lutego", "Marca", "Kwietnia", "Maja", "Czerwca", "Lipca", "Sierpnia", "Września", "Października", "Listopada", "Grudnia"],
    amPm: ["am", "pm"],
    // D is the day of the month, function returns something like...  3rd or 11th
    DoFn: function (D) {
        return D + ["th", "st", "nd", "rd"][D % 10 > 3 ? 0 : ((D - (D % 10) !== 10) * D) % 10];
    },
});
