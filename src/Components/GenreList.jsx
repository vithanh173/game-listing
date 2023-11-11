import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';
import GlobalApi from '../Services/GlobalApi';

function GenreList({ setGenreId, setGenreName, modalOpen, setModalOpen }) {

    const [genreList, setGenreList] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        getGenreList()
    }, [])

    const getGenreList = () => {
        GlobalApi.getGenreList.then(res => {
            setGenreList(res.data.results);
        });
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <h2 className="text-[30px] font-bold dark:text-slate-200 mb-5 ml-4 md:ml-0">Genres</h2>
                <AiOutlineClose className="text-2xl text-slate-800 dark:text-slate-200 mr-4 mb-3 block md:hidden"
                    onClick={() => setModalOpen(!modalOpen)} />
            </div>
            {genreList.map((item, index) => {
                return (
                    <div key={item.id}
                        className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 group rounded-lg 
                        dark:hover:bg-gray-600 transition-all ease-out duration-500
                        ${activeIndex === index ? "bg-gray-300 dark:bg-gray-600" : null}`}
                        onClick={() => {
                            setActiveIndex(index);
                            setGenreId(item.id);
                            setGenreName(item.name)
                        }}>
                        <img src={item.image_background}
                            alt={item.name}
                            className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300
                            ${activeIndex === index ? "scale-105" : null}`} />
                        <h3 className={`dark:text-slate-200 text-[18px] group-hover:font-bold transition-all ease-out duration-300
                            ${activeIndex === index ? "font-bold" : null}`}>{item.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default GenreList
