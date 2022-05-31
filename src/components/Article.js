import React from 'react'
import { format, setGlobalDateI18n } from 'fecha';

export default function Article({ data }) {
    const { alt, photographer, photographer_id, src: { landscape: image}, url } = data;

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
            <a  href={`/newsportal/agency/${photographer_id}`} className="text-md mt-4 text-blue-700">{photographer}</a>
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
