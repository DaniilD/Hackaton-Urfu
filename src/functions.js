export function searchFolders(json){
	let folders = [];
	json._embedded.items.forEach(function (item, i, arr){
		if (item.type == 'dir'){
			folders.push({
				name:item.name,
				path:item.path,
				resource_id:item.resource_id
			});
		}
	});

	return folders;
}

export function searchFiles(json){
	let files = [];
	json._embedded.items.forEach(function(item,i,arr){
		if(item.type == 'file'){
			files.push({
				name:item.name,
				path:item.path,
				preview:item.preview
			});
		}
	});

	return files;
}

export function generateBackUrl(url,name){
    console.log(url);
    console.log(name);
    var result = url.replace( name ,"");
    console.log(result);
   // console.log(url.slice(0,  ));
}