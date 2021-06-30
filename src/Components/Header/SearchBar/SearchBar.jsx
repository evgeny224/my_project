import React from "react";
import style from "./SearchBar.module.css";


const SearchBar = () => {


    return(
        <div>
            <form  method="get">
                <input
                    placeholder="Поиск" type="text" className={ style.item }></input>
            </form>
        </div>
    )
}

export default SearchBar;
