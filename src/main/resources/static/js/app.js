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
                        + "</td>)

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
                var seats;
                $('#tablaCinemas').on('click', 'tbody tr', function (event) {
                 for (var i = 0; i < cines.length ;i++) {
                                if (cines[i].movie.name == event.target.dataset.funcion) {
                                   seats=cines[i].seats;break;
                                }
                            }
                }
                for(var row=0;i<seats.length;i++) {
                                    for (var i = 0; i < ; i++) {
                                        $("#tableS").append("<tr>");
                                        for (var j = 0; j < seats.length; j++) {
                                            $("#tableS").append('<td>');
                                            if(seats[i][j]){
                                            $("#tableS").append('<button data-row="' + i + '" data-col="' + j + '" class="btn-seat"><img data-row="' + i + '" data-col="' + j + '" src="../images/sillas2.png" /></button>')
                                            }else{
                                            $("#tableS").append('<button data-row="' + i + '" data-col="' + j + '" class="btn-seat"><img data-row="' + i + '" data-col="' + j + '" src="../images/sillas2.png" /></button>')
                                            }$("#tableS").append('</td>');
                                        }
                                        $("#tableS").append("</tr>");
                                    }

                                }
                }
                
            });
        }
    }


})();


