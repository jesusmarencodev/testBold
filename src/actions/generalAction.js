import { fetchData } from "../helpers/fetch";
import { types } from "../types/types"


//accion asincrona para login
export const starGetData = ( ) => {

	return async( dispatch ) => {
		const resp = await fetchData();
        dispatch(activeData(resp));
		return resp;
	}
}


export const activeData = ( data ) => ({
	type    : types.getData,
	payload : data
});


export const changeTitleTable = ( data ) => ({
	type    : types.changeTitle,
	payload : data
});
