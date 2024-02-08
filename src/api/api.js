const API_URL = 'http://localhost:3000/receptes'

export const getReceptes = async () => {
    const resp = await fetch(API_URL)
    const data = await resp.json()
    return data
}

export const getRecepta = async (id) => {
    const url = `${API_URL}/${id}`
    const resp = await fetch(url)
    const data = await resp.json()
    return data
}

export const deleteRecepta = async (id) => {
    const url = `${API_URL}/${id}`
    console.log( url );
    await fetch(url, {
        method: 'DELETE',
    });
    const data = await getReceptes();
    return data;
};

export const updateRecepta = async ( id, updateLaunch ) => {
    const url = `${API_URL}/${id}`

    try {
        const resp = await fetch(url, {
            method: "PUT",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify( updateLaunch ),
        })
    
        if( !resp.ok ){
            throw new Error(`No se pudo actualizar la receta. Código de estado: ${resp.status}`)
        }
        const data = await resp.json()
    
        return data
        
    } catch (error) {
        console.error('Error al actualizar la receta:', error);
        throw error;
    }
}


export const createRecepta = async (newRecepta) => {
    const resp = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRecepta)
    });
    return resp.json();
}