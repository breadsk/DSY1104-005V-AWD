import { useEffect, useState, type FC , type KeyboardEvent } from "react";

interface Props {
    placeHolder:string;
    onQuery: (query:string) => void;
}


export const SearchBar:FC<Props> = ({ placeHolder , onQuery }) => {

  const [ query , setQuery ] = useState('');

  useEffect(()=> {
    
    const timeOutId = setTimeout(()=> {
      onQuery(query) 
    },1000)

    return () => {
      clearTimeout(timeOutId)
    }

  },[query, onQuery])

  //3
  // const handleSearch = ( query:string ) => {
  //   console.log({ query });
  // }
  //2 onQuery = handleSearch
  //1
  const handleSearch = () => {
    onQuery(query);
  }


  const handleKeyDown = (event:KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter'){
      handleSearch()
    }
  }

  return (
    <div className="search-container">
        <input 
        type="text" 
        placeholder={ placeHolder } 
        onChange={(event)=> {
          setQuery(event.target.value)
        }}
        onKeyDown={ handleKeyDown }
        />
        <button
          onClick={ handleSearch }
        >Buscar</button>
    </div>
  )
}
