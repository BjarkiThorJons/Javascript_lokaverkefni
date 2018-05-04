let tonleikar = {}
$.ajax({
  'url': 'http://apis.is/concerts',
  'type': 'GET',
  'dataType': 'json',
  'success': function(response) {
  	for (let i = 0; i < response.results.length; i++) {			
		tonleikar[response.results[i].eventDateName] = {date : response.results[i].dateOfShow, stadur : response.results[i].eventHallName, mynd : response.results[i].imageSource};
	};
	for (let key in tonleikar){
		let hlutur = tonleikar[key]
		document.getElementById("syningar").innerHTML +='<div id="'+key+'">'+'<h2>'+key + hlutur.date+'</h2><img src='+hlutur.mynd+' /></div>';
	};

  }
});
function leita(){
		let divtag = document.getElementById("syningar");
		let syningarnar = divtag.getElementsByTagName('div');
		let text = document.getElementById("search");
		filter = text.value.toLowerCase();
		console.log(filter)
		for (let i = 0; i< syningarnar.length; i++){
			if (syningarnar[i].id.toLowerCase().indexOf(filter)){
				syningarnar[i].style.display = "none";
			}
			else {
				syningarnar[i].style.display = "";
			}
			
		}
	};