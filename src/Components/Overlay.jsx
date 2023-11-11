import React from 'react'

function Overlay({ modalOpen }) {
    return (
        <div className={`fixed top-0 bottom-0 left-0 right-0 z-10 opacity-0 invisible md:invisible bg-slate-950/60 transition-all duration-300 ease-in-out
        ${modalOpen ? "open" : ""}`}>

        </div>
    )
}

export default Overlay
