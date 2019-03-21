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
                        + "</td><td>" + cinemas.name
                        + "</td><td>" + cines[i].seats.length + "</td>")

                }

                for(var row=0;i<10;i++) {
                    for (var i = 0; i < 10; i++) {
                        $("#tableS").append("<tr>");
                        for (var j = 0; j < 10; j++) {
                            $("#tableS").append('<td>');
                            $("#tableS").append('<button data-row="' + i + '" data-col="' + j + '" class="btn-seat"><img data-row="' + i + '" data-col="' + j + '" src="../images/sillas1.png" /></button>')
                            $("#tableS").append('</td>');
                        }
                        $("#tableS").append("</tr>");
                    }

                }
                
            });
        },
        getCinemaSeats:function(){
            var name=$(document).getElementById("cineName");

            var cf=$(document).getElementById("cineFun")
            return apiclient.getCinemaByName(name, function (cinemas){
                var cines = cinemas.functions;
                var seats;
                for( var i = 0; i < cines.length; i++){
                    if(cines[i].movie.name==cf){
                        seats=cines[i].seats;
                        break;
                    }
                }
                for(var i=0;i<seats.length;i++){
                    $("#tableSeats").find("tbody").append('<tr>');
                    for(var j=0;j<seats.length;j++){
                        $("#tableSeats").find("tbody").append('<tr>');
                        $("#tableSeats").find("tbody").append('<button data-row="' + row
                            + '"data-col="' + col
                            + '" class="btn-seat"><img data-row="' + row + '" data-col="'
                            + col + '" src="../images/sillas.png" /></button>');
                    }$("#tableSeats").find("tbody").append('<tr>');
                }
            });


        }
    }


})();


