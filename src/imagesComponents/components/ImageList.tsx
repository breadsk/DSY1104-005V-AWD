import type { robotsProps } from '../../mock-data/robots.mocks'

import { getServerData } from '../../helpers/promise'
import { useEffect } from 'react'


interface Props{
    robots:robotsProps[]
}

//Para que tu componente renderice los datos 
// obtenidos del servidor, necesitas 
// almacenarlos en el estado del componente. 
// Aquí te muestro cómo modificar tu 
// componente:

export const ImageList = ({robots}:Props) => {

    useEffect(()=> {
        const fetchData = async() => {
            const result = await getServerData();
            const { robots } = result.data;
            console.log(robots);
        }

        fetchData()
    },[])


  return (
    <div className="gifs-container">
        {
            robots.map( ( robot ) => {
                return (
                    <div key={ robot.id } className="gif-card">
                        <img src={ robot.avatar } alt={ robot.name } />
                        <h3>{ robot.name }</h3>
                        <p>{`Megaman: ${robot.series}`}</p>
                    </div>
                )
            })
        }
        </div>
  )
}
