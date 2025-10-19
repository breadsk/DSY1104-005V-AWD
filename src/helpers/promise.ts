

export interface ApiResponse<T = any>{
    data?:T;
    error?:string;
}

export const getServerData = async <T = any>(): Promise<ApiResponse<T>> => {
    try{
        const response = await fetch("https://repaso-node.onrender.com/");

        if(!response.ok){
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();

        return { data };
    } catch(error:any){
        return {error: error.message || "Error desconocido al conectar con el servidor"}
    }
}