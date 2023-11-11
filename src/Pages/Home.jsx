import { useEffect, useState } from "react";
import Banner from "../Components/Banner"
import GenreList from "../Components/GenreList"
import GlobalApi from '../Services/GlobalApi'
import TrendingGames from "../Components/TrendingGames";
import GameByGenreId from "../Components/GameByGenreId";
import Overlay from "../Components/Overlay";

function Home({ searchInput, modalOpen, setModalOpen }) {

    const [allGames, setAllGames] = useState();
    const [gameListByGenre, setGameListByGenre] = useState([]);
    const [genreName, setGenreName] = useState("Action");
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    useEffect(() => {
        getAllGames();
        getGameListByGenreId(4);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setModalOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    const getAllGames = () => {
        GlobalApi.getAllGames.then(res => {
            setAllGames(res.data.results);
            setGameListByGenre(res.data.results);
        })
    }

    const getGameListByGenreId = (id) => {
        GlobalApi.getGameListByGenreId(id).then(res => {
            setGameListByGenre(res.data.results);
        })
    }

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = gameListByGenre.slice(firstPostIndex, lastPostIndex);

    console.log(currentPosts);

    return (
        <>
            <Overlay
                modalOpen={modalOpen} />
            <div className="grid grid-cols-4 px-8 gap-5">
                <div className={`h-full overflow-hidden overflow-y-auto absolute left-0 top-0 md:block md:static z-50 md:z-0 rounded-lg  bg-slate-100 dark:bg-slate-800 
            -translate-x-[100%] md:translate-x-0 transition-all duration-500 ease-in-out
            ${modalOpen ? "translate-x-0 transition-all duration-500 ease-in-out" : ""}`}>
                    <GenreList setGenreId={(genreId) => getGameListByGenreId(genreId)}
                        setGenreName={(name) => setGenreName(name)}
                        modalOpen={modalOpen}
                        setModalOpen={setModalOpen} />
                </div>
                <div className="col-span-4 md:col-span-3">
                    {allGames && allGames.length > 0 && gameListByGenre.length > 0
                        ? <div>
                            {searchInput !== ""
                                ? <GameByGenreId data={currentPosts}
                                    genreName={genreName}
                                    searchInput={searchInput}
                                    postsPerPage={postsPerPage}
                                    totalPosts={gameListByGenre.length}
                                    setCurrentPage={setCurrentPage} />
                                : <> <Banner data={allGames} />
                                    <TrendingGames data={allGames} />
                                    <GameByGenreId data={currentPosts}
                                        genreName={genreName}
                                        searchInput={searchInput}
                                        postsPerPage={postsPerPage}
                                        totalPosts={gameListByGenre.length}
                                        setCurrentPage={setCurrentPage} />
                                </>}
                        </div>
                        : null}
                </div>
            </div>
        </>
    )
}

export default Home
