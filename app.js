


function res(){
    //Obtenir les valeurs
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;

    //Faire l'operation
    if(a != 0){
        var operation = (c - b) / a;

        var solution = a + "x + (" + b + ") = " + c + "<br>"
            + a + "x = " + c + " - " + b + "<br>"
            + "x = (" + (c - b) + ") / " + a + "<br>"
            + "<strong> s = " +operation.toFixed(2) + "</strong>";

        document.getElementById('resultat').innerHTML = solution;

    }else{
        document.getElementById('resultat').innerHTML = "Divise par 0";
    }
    
}