app = (function () {


    return {

        getCinemaByName:function(name){
            return apiclient.getCinemaByName(name, function (cinemas) {
                console.log("parceeeeeee");
                var cines = cinemas.functions;
                var mxSeats=0;
                for (var i = 0; i < cines.length; i++) {

                    $("#tableCinemas").append("<tr><td>" + cines[i].date
                        + "</td><td>" + cines[i].movie.name
                        + "</td><td>" + cines[i].seats.length
                        + "</td><td>" +'<button type="button" class="btn btn-danger" '+

                        'onclick="app.getCinemaSeats('+"'"+cinemas.name+"'"+')>See</button>'+
               
                    "</td>")

                }

                for(var row=0;i<10;i++) {
                    for (var i = 0; i < 10; i++) {
                        $("#tableS").append("<tr>");
                        for (var j = 0; j < 10; j++) {
                            $("#tableS").append('<td>');
                            $("#tableS").append('<button data-row="' + i + '" data-col="' + j + '" class="btn-seat"><img data-row="' + i + '" data-col="' + j + '" src="../images/sillas2.png" /></button>')
                            $("#tableS").append('</td>');
                        }
                        $("#tableS").append("</tr>");
                    }

                }
                
            });
        },
        getCinemaSeats:function(name){
            
            return apiclient.getCinemaByName(name, function (cinemas){
                var cines = cinemas.functions;
                var seats;
                for( var i = 0; i < cines.length; i++){
                    if(cines[i].movie.name==cf){
                        seats=cines[i].seats;
                        break;
                    }
                }
                for(var row=0;i<10;i++) {
                    for (var i = 0; i < 10; i++) {
                        $("#tableS").append("<tr>");
                        for (var j = 0; j < 10; j++) {

                            $("#tableS").append('<td>');
                            $("#tableS").append('<button data-row="' + i + '" data-col="' + j + '" class="btn-seat"><img data-row="' + i + '" data-col="' + j + '" src="../images/sillas2.png" /></button>')
                            $("#tableS").append('</td>');
                        }
                        $("#tableS").append("</tr>");
                    }

                }
            });


        }
    }


})();


