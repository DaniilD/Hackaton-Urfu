
const ACTION_CHANGE_FOLDER = 'ACTION_CHANGE_FOLDER';
const ACTION_GO_BACK = 'ACTION_GO_BACK';

//Действия. Экшэны


export const changeFolderAction = (data)=>{
	return {
		type:ACTION_CHANGE_FOLDER,
		payload:data
	}
}

export const goBackAction = (data)=>{
    return{
        type:ACTION_GO_BACK,
        payload:data
    }
}