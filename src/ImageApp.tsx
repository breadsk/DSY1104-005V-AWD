import { useState } from 'react'

import {HeaderComponent ,SearchBar } from './sharedComponents/components'
import { ImageList,PreviousSearches } from './imagesComponents/components'

import { getImagesByQuery } from './actions/get-images-by-query.actions'
import { robots } from './mock-data/robots.mocks'

import './index.css'

export const ImageApp = () => {

  const [imagenPrevia , setImagenPrevia] = useState(['']);


  const handleTermClicked = ( term:string ) => {
    console.log({term});
  }

  const handleSearch = async( query:string ) => {
    query = query.trim().toLowerCase();

    if(query.length === 0) return;

    if(imagenPrevia.includes(query)) return;

    setImagenPrevia([ query , ...imagenPrevia ].splice(0,7))
    
    await getImagesByQuery(query);
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
            searches={ imagenPrevia }
            onLabelClicked = { handleTermClicked }
            />

        
        <ImageList 
            robots={robots} />
        

    </>
  )
}
