'use client'
import { useState } from "react"
import { sliderLists } from "../../constants"

const Menu = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <section id="menu" aria-labelledby="menu-heading">
        <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf"/>
        <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf"/>

        <h2 id="menu-heading" className="sr-only">
            cocktail menu
        </h2>

        <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
            {sliderLists.map((cocktail, index) => {
                const isActive = index === currentIndex;

                return(
                    <button key={cocktail.id} 
                    className={`${isActive ? 
                    'text-white border-white'
                    :'text-white/50 border-white/50'}`} 
                    onClick={()=>{}}
                    >
                        {cocktail.name}
                    </button>
                )
            })}
        </nav>
    </section>
  )
}
export default Menu