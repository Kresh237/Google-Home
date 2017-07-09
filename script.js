document.querySelector('html').onclick=function () {
	if (document.querySelector('.content').style.display === 'none'){
	document.querySelector('.content').style.display = 'block';
    } else {
    	document.querySelector('.content').style.display = 'block';
    }
}

document.querySelector('.recherche').onclick=function () {
	if (document.querySelector('.recherche').value == "Rechercher..."){
	document.querySelector('.recherche').value = "";
    } 
}

setTimeout(function() {
alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please");
},10000);
