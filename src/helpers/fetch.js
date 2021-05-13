export const fetchData = async() => {


    try {
        const resp = await fetch( './data.json', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        } );
        return await resp.json();
    } catch (error) {
        return error
    }


}