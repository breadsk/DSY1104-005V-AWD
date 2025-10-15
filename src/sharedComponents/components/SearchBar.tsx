import type { FC } from "react";

interface Props {
    placeHolder:string;
}


export const SearchBar:FC<Props> = ({ placeHolder }) => {
  return (
    <div className="search-container">
        <input type="text" placeholder={ placeHolder } />
        <button>Buscar</button>
    </div>
  )
}
