app = (function () {
    console.log("holi");

    return {

        getCinemaByName:function(name){
            return apiclient.getCinemaByName(name, function (cinemas) {
                var table = $("#tableCinemas");
                var cines = cinemas.functions;
                for (var i = 0; i < cines.length; i++) {
                    table.append("<tr><td>" + cines[i].date + "</td><td>" + cines[i].movie.name + "</td><td>" + cinemas.name + "</td><td>" + cines[i].seats.length + "</td>")
                }
                console.log(cinemas);
            });
        }
    }

})();


