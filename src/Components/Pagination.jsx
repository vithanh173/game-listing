import React from 'react';

function Pagination({ postsPerPage, totalPosts, setCurrentPage }) {

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center text-lg text-slate-200 dark:text-slate-800 ">
            {
                pages.map((page, index) => {
                    return (
                        <button key={index}
                            className="py-2 px-4 mx-3 bg-slate-800 dark:bg-slate-100 rounded-lg
                            hover:scale-110 transition-all duration-300 ease-in-out"
                            onClick={() => setCurrentPage(page)}>{page}</button>
                    )
                })
            }
        </div>
    )
}

export default Pagination
