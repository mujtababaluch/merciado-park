function countprice() {
    var n0 = document.getElementById("N0").value * 50;
    var n1 = document.getElementById("N1").value * 350;
    var n2 = document.getElementById("N2").value * 90;
    var n3 = document.getElementById("N3").value * 100;
    var n4 = document.getElementById("N4").value * 600;
    var n5 = document.getElementById("N5").value * 500;
    var n6 = document.getElementById("N6").value * 80;
    var n7 = document.getElementById("N7").value * 100;
    var n8 = document.getElementById("N8").value * 70;
    var n9 = document.getElementById("N9").value * 200;
    var n10 = document.getElementById("N10").value * 70;
    var n11 = document.getElementById("N11").value * 300;
    var n12 = document.getElementById("N12").value * 5;
    var price = n12 + n11 + n10 + n9 + n8 + n7 + n6 + n5 + n4 + n3 + n2 + n1 + n0;
    para.innerHTML = "Total Amount: " +"$"+ price ;
}
//////Forcreditcard///////
//////Q12///////

/////JavascriptforOnsubmit/////
function mysubmit() {
  alert(" Thank You!! Please Come Again");
}

$(document).ready(function(){
    $("#cc").click(function(){
        $("#cno").toggle("slide");
    });
});

$(document).ready(function(){
    $("#cod").click(function(){
        $("#cno").hide("slide");
    });
});

$(document).ready(function(){
    $("#coo").click(function(){
    $("#cno").hide("slide");
    });
});