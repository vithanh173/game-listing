import { useEffect, useState } from 'react'
import Home from './Pages/Home'
import Header from './Components/Header'
import { ThemeContext } from './Context/ThemeContext';
import { HeaderContext } from './Context/HeaderContext';

function App() {

  const [theme, setTheme] = useState("light");
  const [searchInput, setSearchInput] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setTheme(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <HeaderContext.Provider value={{ setSearchInput, modalOpen, setModalOpen }}>
        <div className={`${theme} ${theme === "dark" ? "bg-slate-800" : "bg-slate-100"}`}>
          <Header />
          <Home searchInput={searchInput}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen} />
        </div>
      </HeaderContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
