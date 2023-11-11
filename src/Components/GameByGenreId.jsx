import React, { useState } from 'react';
import { GoStarFill, GoComment } from 'react-icons/go';
import { AiFillFire } from 'react-icons/ai';
import Pagination from './Pagination';

const GameByGenreId = ({ data, genreName, searchInput, postsPerPage, totalPosts, setCurrentPage }) => {

    const filterArrayGames = data.filter(item => {
        if (searchInput == "") {
            return true;
        }
        return item.name.toUpperCase().includes(searchInput.toUpperCase());
    });

    return (
        <div>
            <h2 className="font-bold text-[30px] text-slate-800 dark:text-slate-200 mt-5">{genreName} Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {filterArrayGames.map((item, index) => {
                    return (
                        <div key={item.id}
                            className="bg-slate-400 p-2 rounded-lg pb-4 h-full cursor-pointer 
                        hover:scale-110 transition-all duration-300 ease-in-out ">
                            <img src={item.background_image}
                                alt={item.name}
                                className="w-full h-[350px] md:h-[250px] rounded-xl object-cover" />
                            <h2 className="text-[20px] font-bold text-slate-800 dark:text-slate-200 flex items-baseline justify-between">{
                                item.name}
                                <span className="p-1 rounded-sm ml-2 text-[10px] font-medium text-green-700 bg-green-100">{item.metacritic}</span>
                            </h2>
                            <div className="flex items-center justify-between text-gray-700">
                                <h2 className="flex items-center">
                                    <GoStarFill className="text-yellow-400 text-base" />
                                    {item.rating}
                                </h2>
                                <h2 className="flex items-center">
                                    <GoComment className="text-slate-700 text-base" />
                                    {item.reviews_count}
                                </h2>
                                <h2 className="flex items-center">
                                    <AiFillFire className="text-orange-500 text-base" />
                                    {item.suggestions_count}
                                </h2>
                            </div>
                        </div>
                    )
                })}
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={totalPosts}
                    setCurrentPage={setCurrentPage} />
            </div>
        </div>
    )
}

export default GameByGenreId
