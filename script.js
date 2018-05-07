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
		let timi = hlutur.date.split("T");
		let dagsettning = timi[0].split("-")
		let dagsettningin = dagsettning[2]+"-"+dagsettning[1]+"-"+dagsettning[0]
		document.getElementById("syningar").innerHTML +='<div id="'+key+'" class="syning">'+'<h2>'+key+'</h2><h4>'+dagsettningin+'</h4><h6>'+timi[1]+'</h6><img src='+hlutur.mynd+' /></div>';
	};

  }
});
function leita(){
		let divtag = document.getElementById("syningar");
		let syningarnar = divtag.getElementsByTagName('div');
		let text = document.getElementById("search");
		let filter = text.value.toLowerCase();
		for (let i = 0; i< syningarnar.length; i++){
			if (syningarnar[i].id.toLowerCase().indexOf(filter)){
				syningarnar[i].style.display = "none";
			}
			else {
				syningarnar[i].style.display = "";
			}
			
		};
	};
function dagsettning(){
	let divtag = document.getElementById("syningar");
	let syningarnar = divtag.getElementsByTagName('div');
	let fra = document.getElementById("fra");
	let til = document.getElementById("til");
	let fra_value = fra.value;
	let til_value = til.value;
	for (let i = 0; i< syningarnar.length; i++){
			console.log(syningarnar[i].getElementsByTagName("h4"))
			let timi = syningarnar[i].date.split("T");
			let dagsettning = timi[0].split("-")
			console.log(timi)
		};
}