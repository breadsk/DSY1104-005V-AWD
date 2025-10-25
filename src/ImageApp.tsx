import { 
  useCallback , 
  useEffect, 
  useState  
} from 'react'



import {HeaderComponent ,SearchBar } from './sharedComponents/components'
import { ImageList,PreviousSearches } from './imagesComponents/components'

import { getImages } from './actions/get-images.actions'
import { getImagesByQuery } from './actions/get-images-by-query.actions'

import type { robotsProps } from './interfaces/images.interfaces'

import './index.css'


export const ImageApp = () => {

  
  const [ robots , setRobots ] = useState<robotsProps[]>([]);
  const [ AllRobots , setAllRobots ] = useState<robotsProps[]>([]);
  const [imagenPrevia , setImagenPrevia] = useState<string[]>([]);
    
  useEffect(()=> {
    const fetchData = async() => {
      try{

        const data = await getImages();
        const robots = data.robots;
        setRobots(robots);
        setAllRobots(robots);

      }catch(error){
        console.error(`Error en: ${error}`);
      }

    }

    fetchData()

  },[])
  
  


  const handleTermClicked = ( term:string ) => {
    console.log({term});
  }

  const handleSearch = useCallback(async( query:string ) => {
        
    query = query.trim().toLowerCase();

    if(query.length === 0){//Carga robots si no hay nada
      setRobots(AllRobots);
      return;
    } 

    setImagenPrevia(( prevSearches ) => {//Valida las previous
      //Si el termino ya es el primero, no actualizar
      if(prevSearches[0] === query) return prevSearches;

      const filteredSearches = prevSearches.filter((term) => {
        return term.toLocaleLowerCase() !== query;
      })
      //Agregar el nuevo termino al inicio
      const updateSearches = [query, ...filteredSearches].slice(0,7);
      return updateSearches;
    });
    
    try{
      const searchRobotResults = await getImagesByQuery(query);

      if(searchRobotResults.robot){
        setRobots([searchRobotResults.robot]);
      } 

      return;

    }catch(error){
      setRobots(AllRobots);
    }


  },[AllRobots]);



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
            robots={ robots  } />
        

    </>
  )
}
