import type { robotsProps } from '../../interfaces/images.interfaces'


interface Props{
    robots:robotsProps[]
}


export const ImageList = ({robots}:Props) => {

    const robotsArray = Array.isArray(robots) ? robots : [robots];


  return (
    <div className="gifs-container">
        {
            robotsArray.map( ( robot ) => {
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
