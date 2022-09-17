

function show(img){
    var okno = document.createElement('div');
    okno.setAttribute("id", "okno");
    document.body.appendChild(okno);

    var filter = document.createElement('div');
    filter.setAttribute("id", "filter");
    document.body.appendChild(filter);


    
    switch(img){
        case 1: okno.innerHTML = "<span class='helper'></span><img src='source/galeria_1.webp'>"; break;
        case 2: okno.innerHTML = "<span class='helper'></span><img src='source/galeria_2.webp'>"; break;
        case 3: okno.innerHTML = "<span class='helper'></span><img src='source/galeria_3.webp'>"; break;
        case 4: okno.innerHTML = "<span class='helper'></span><img src='source/galeria_4.webp'>"; break;
        case 5: okno.innerHTML = "<span class='helper'></span><img src='source/galeria_5.webp'>"; break;
        case 6: okno.innerHTML = "<span class='helper'></span><img src='source/galeria_6.webp'>"; break;
        case 7: okno.innerHTML = "<span class='helper'></span><img src='source/galeria_7.webp'>"; break;
        case 8: okno.innerHTML = "<span class='helper'></span><img src='source/galeria_8.webp'>"; break;
        case 9: okno.innerHTML = "<span class='helper'></span><img src='source/galeria_9.webp'>"; break;
        case 10: okno.innerHTML = "<span class='helper'></span><img src='source/galeria_10.webp'>"; break;
    }

    var exit = document.createElement('div');
    exit.setAttribute("id", "exit");
    okno.appendChild(exit);
    exit.innerHTML = "<img src='source/exit_button.gif'>";

    var arrow_left = document.createElement('div');
    arrow_left.setAttribute("id", "arrow_left");
    okno.appendChild(arrow_left);
    arrow_left.innerHTML = "<img src='source/arrow_left.gif'>";

    var arrow_right = document.createElement('div');
    arrow_right.setAttribute("id", "arrow_right");
    okno.appendChild(arrow_right);
    arrow_right.innerHTML = "<img src='source/arrow_right.gif'>";


    arrow_left.addEventListener("click", function(){previous(img)});
    arrow_right.addEventListener("click", function(){next(img)});
    exit.addEventListener("click", hide);
    filter.addEventListener("click", hide);
}



function hide(){
    document.getElementById("filter").remove();
    document.getElementById("okno").remove();
}



function previous(img){

    var n = img - 1;
    if(n == 0){
        n = 10;
    }

    show(n);
    
    setTimeout(() => {
        hide();
    }, 200);
}



function next(img){

    var n = img + 1;
    if(n == 11){
        n = 1;
    }

    show(n);
    
    setTimeout(() => {
        hide();
    }, 200);
}




document.getElementById("g1").addEventListener("click", function(){ show(1)});
document.getElementById("g2").addEventListener("click", function(){ show(2)});
document.getElementById("g3").addEventListener("click", function(){ show(3)});
document.getElementById("g4").addEventListener("click", function(){ show(4)});
document.getElementById("g5").addEventListener("click", function(){ show(5)});
document.getElementById("g6").addEventListener("click", function(){ show(6)});
document.getElementById("g7").addEventListener("click", function(){ show(7)});
document.getElementById("g8").addEventListener("click", function(){ show(8)});
document.getElementById("g9").addEventListener("click", function(){ show(9)});
document.getElementById("g10").addEventListener("click", function(){ show(10)});