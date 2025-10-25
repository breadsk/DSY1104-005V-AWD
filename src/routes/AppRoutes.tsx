import { useRoutes } from 'react-router-dom';
import { ImageApp } from '../ImageApp';
import { RobotComponent } from '../imagesComponents/components/RobotComponent';
// Importa otros componentes que necesites para rutas

export const AppRoutes = () => {
  const routes = useRoutes([
    { 
      path: '/', 
      element: <ImageApp /> 
    },
    { 
      path: '/robot-component', // Agregué parámetro opcional
      element: <RobotComponent /> // ✅ FALTABA cerrar el componente
    },
    { 
      path: '*', 
      element: <div>Página no encontrada - 404</div> 
    }
  ]);

  return routes;
}