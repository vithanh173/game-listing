import React, { useEffect } from 'react'

function TrendingGames({ data }) {

    return (
        <div className="mt-5 hidden md:block">
            <h2 className="font-bold text-[30px] text-slate-800 dark:text-slate-200">Trending Games</h2>
            <div className="md:grid md:grid-cols-2 gap-3 lg:grid-cols-4 mt-5">
                {data.map((item, index) => {
                    return (
                        index < 4 && <div key={item.id}
                            className="bg-slate-400 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                            <img src={item.background_image}
                                alt={item.name}
                                className="h-[270px] rounded-t-lg object-cover" />
                            <h2 className="text-slate-800 dark:text-slate-200 text-[20px] font-bold p-2">{item.name}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TrendingGames
