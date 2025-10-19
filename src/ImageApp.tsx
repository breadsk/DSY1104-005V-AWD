
import {HeaderComponent ,SearchBar } from './sharedComponents/components'

import { ImageList,PreviousSearches } from './imagesComponents/components'

import { robots } from './mock-data/robots.mocks'

import './index.css'

export const ImageApp = () => {


  const handleTermClicked = ( term:string ) => {
    console.log({term});
  }

  const handleSearch = ( query:string ) => {
    console.log( query );
  }

  return (    
    <>        
        <HeaderComponent 
            title="Busca tu imagen" 
            text="Bienvenido a tu pagina favorita de busqueda de imagenes"/>

        
        <SearchBar 
            placeHolder="Ingresa el nombre de tu imagen"
            onQuery = { handleSearch }
            />

        
         <PreviousSearches 
            searches={['protoman','megaman','shadowman','skullman']}
            onLabelClicked = { handleTermClicked }
            />

        
        <ImageList 
            robots={robots} />
        

    </>
  )
}
