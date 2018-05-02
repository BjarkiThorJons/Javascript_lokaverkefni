$.ajax({
  'url': 'http://apis.is/concerts',
  'type': 'GET',
  'dataType': 'json',
  'success': function(response) {
  	let test = {}
  	for (let i = 0; i < response.results.length; i++) {			
		test[response.results[i].eventDateName] = {date : response.results[i].dateOfShow, stadur : response.results[i].eventHallName, mynd : response.results[i].imageSource};
	};
	console.log(test);
	for (let key in test){
		let hlutur = test[key]
		document.getElementById("syningar").innerHTML +='<h2>'+key+'</h2><img src='+hlutur.mynd+' />';
	}
  }
});