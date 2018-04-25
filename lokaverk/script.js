$.ajax({
  'url': 'http://apis.is/concerts',
  'type': 'GET',
  'dataType': 'json',
  'success': function(response) {
  	for (var i = 0; i < response.results.length; i++) {			
		console.log(response.results[i].eventDateName);
	};	
  }
});