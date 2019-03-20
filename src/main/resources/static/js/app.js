app = (function () {
    console.log("holi");

    return {

        getCinemaByName:function(name){
            return apiclient.getCinemaByName(name, function (cinemas) {
                
                var cines = cinemas.functions;
                for (var i = 0; i < cines.length; i++) {
                    $("#tableCinemas").append("<tr><td>" + cines[i].date + "</td><td>" + cines[i].movie.name + "</td><td>" + cinemas.name + "</td><td>" + cines[i].seats.length + "</td>")
                }
                
            });
        }/*,
        getCinemaSeats:function(fil,col){
            
            for(var i=0;i<fil;i++){
                for(var j=0;j<col;j++){
                    $("#tableSeats")
                }
            }

        }*/
    }


})();


