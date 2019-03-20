apiclient = (function() {

	return {
		getCinemaByName : function(cinema, callback) {
			$.get("cinemas/" + cinema, function(data) {
				callback(data);
			});
		}
	}

})();