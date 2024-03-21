
const token = 'cc6f48876034b2952bc6e5985a4f640032b46c5ac80f059d'
export const server_calls = {
    get: async () => {
        const response = await fetch (`https://flask-sneaker-database.onrender.com/api/sneakers`,
        {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if(!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {})=>{
        const response = await fetch(`https://flask-sneaker-database.onrender.com/api/sneakers`,
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if(!response.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },
    
    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://flask-sneaker-database.onrender.com/api/sneakers/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on Server')
        }
        
        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://flask-sneaker-database.onrender.com/api/sneakers/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
        })

        if (!response.ok){
            throw new Error('Failed to delete data on Server')
        }
        
        return;

    }
    
    
}