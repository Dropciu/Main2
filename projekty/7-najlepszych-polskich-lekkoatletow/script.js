document.body.setAttribute("ondragstart", "return false");
document.body.setAttribute("ondrag", "return false");


if(window.location.protocol == "http"){
  document.location = document.URL.replace(/^http:/i, "https:"); 
}


document.getElementById("arrow_up").addEventListener("click", function(){
  if(window.pageYOffset < 0 && window.pageYOffset > window.innerHeight * 1.1){
    var poziom = 0;
  }
  else if(window.pageYOffset >= window.innerHeight * 1 + 1 && window.pageYOffset < window.innerHeight * 2.2 + 1){
    var poziom = window.innerHeight;
  }
  else if(window.pageYOffset > window.innerHeight * 2 - 1&& window.pageYOffset < window.innerHeight * 5){
    var poziom = window.innerHeight * 2;
  }
  else{
    var poziom = 0;
  }
  
  window.scroll({
    top: poziom, 
    left: 0, 
    behavior: 'smooth'
  }); 
})




document.getElementById("arrow_down").addEventListener("click", function(){
  if(window.pageYOffset >= 0 && window.pageYOffset < window.innerHeight * 1){
    var poziom = window.innerHeight;
  }
  else if(window.pageYOffset >= window.innerHeight * 1 + 1 && window.pageYOffset < window.innerHeight * 2.2){
    var poziom = window.innerHeight * 2.2;
  }
  else if(window.pageYOffset > window.innerHeight * 2.2 - 1 && window.pageYOffset < window.innerHeight * 5){
    var poziom = window.innerHeight * 5;
  }
  else{
    var poziom = window.innerHeight * 5;
  }
  
  
  window.scroll({
    top: poziom, 
    left: 0, 
    behavior: 'smooth'
  }); 
})



if(window.pageYOffset > window.innerHeight){
  var q = 2
}
else{
  var q = 0;
}
window.addEventListener("scroll", function scroll() {
    if(window.pageYOffset > window.innerHeight / 10 && window.pageYOffset < window.innerHeight && q == 0){
        window.scroll({
            top: window.innerHeight * 1.1, 
            left: 0, 
            behavior: 'smooth'
        });
        q = 1;
    }
    else if(window.pageYOffset > window.innerHeight * 1.4 && window.pageYOffset < window.innerHeight * 2 && q == 1){
        window.scroll({
            top: window.innerHeight * 2, 
            left: 0, 
            behavior: 'smooth'
        });
        q = 2
    }
    else if(q == 2){
        window.removeEventListener('scroll', scroll);
        q = null;
    }
});





(function () {
    var container = document.getElementById("animated-container");
    var inner = document.getElementById("animated-inner");
  
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function (event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function (e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function () {
        return "(" + this.x + ", " + this.y + ")";
      }
    };
  
    mouse.setOrigin(container);
  
    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function () {
      return counter++ % updateRate === 0;
    };
  
    var onMouseEnterHandler = function (event) {
      update(event);
    };
  
    var onMouseLeaveHandler = function () {
      inner.style = "";
    };
  
    var onMouseMoveHandler = function (event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };
  
    var update = function (event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };
  
    var updateTransformStyle = function (x, y) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTransform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };
  
  
    container.onmouseenter = onMouseEnterHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmousemove = onMouseMoveHandler;
  })();

  



  var hamburger_menu = false;
  document.querySelector(".hamburger-menu").addEventListener("click", function(){
      if(hamburger_menu == false){
        document.getElementById("navbar").style.visibility = "visible";
        document.getElementById("navbar").classList.add("animated_navbar");
        hamburger_menu = true;
      }
      else{
        document.getElementById("navbar").classList.remove("animated_navbar");
        document.getElementById("navbar").classList.add("animated_navbar2");

        setTimeout(() => {
            document.getElementById("navbar").classList.remove("animated_navbar2");
            document.getElementById("navbar").style.visibility = "hidden";
            hamburger_menu = false;
        }, 400);
      }
  });


function show_character(n){
    window.scroll({
        top: window.innerHeight * 1.1, 
        left: 0, 
        behavior: 'smooth'
    });
    document.querySelectorAll(".slider__navi a")[n].click();

    document.getElementById("navbar").classList.remove("animated_navbar");
    document.getElementById("navbar").classList.add("animated_navbar2");
    setTimeout(() => {
        document.getElementById("navbar").classList.remove("animated_navbar2");
        document.getElementById("navbar").style.visibility = "hidden";
        hamburger_menu = false;
    }, 400);
}

document.getElementById("link1").addEventListener("click", function(){show_character(0)})
document.getElementById("link2").addEventListener("click", function(){show_character(1)})
document.getElementById("link3").addEventListener("click", function(){show_character(2)})
document.getElementById("link4").addEventListener("click", function(){show_character(3)})
document.getElementById("link5").addEventListener("click", function(){show_character(4)})
document.getElementById("link6").addEventListener("click", function(){show_character(5)})
document.getElementById("link7").addEventListener("click", function(){show_character(6)})
  




  $('.slide-nav').on('click', function(e) {
    e.preventDefault();
    // get current slide
    var current = $('.flex--active').data('slide'),
      // get button data-slide
      next = $(this).data('slide');
  
    $('.slide-nav').removeClass('active');
    $(this).addClass('active');
  
    if (current === next) {
      return false;
    } else {
      $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
      $('.flex--active').addClass('animate--end');
      setTimeout(function() {
        $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
        $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
      }, 800);
    }
  });






function show_details(n){
  switch(n){
    case 0: var url = "anita_wlodarczyk.html"; break;
    case 1: var url = "irena_szewinska.html"; break;
    case 2: var url = "robert_korzeniowski.html"; break;
    case 3: var url = "adam_kszczot.html"; break;
    case 4: var url = "kamila_skolimowska.html"; break;
    case 5: var url = "bronislaw_malinowski.html"; break;
    case 6: var url = "jozef_szmidt.html"; break;
  }

    var okno = document.createElement("div");
    okno.setAttribute("id", "okno");
    document.body.append(okno);

    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", url)
    okno.append(iframe);
    
    var exit = document.createElement("div");
    exit.setAttribute("id", "exit");
    okno.append(exit);
    exit.innerHTML = "<div class='container zoom_invert'><div class='close_icon zoom_invert'></div></div>";

    var background = document.createElement("div");
    background.setAttribute("id", "background");
    document.body.append(background);

    exit.addEventListener("click", function(){
      okno.remove();
      background.remove();
    })
    background.addEventListener("click", function(){
      okno.remove();
      background.remove();
    })
}

document.querySelector(".AW").addEventListener("click", function(){show_details(0)});
document.querySelector(".IS").addEventListener("click", function(){show_details(1)});
document.querySelector(".RK").addEventListener("click", function(){show_details(2)});
document.querySelector(".AK").addEventListener("click", function(){show_details(3)});
document.querySelector(".KS").addEventListener("click", function(){show_details(4)});
document.querySelector(".BM").addEventListener("click", function(){show_details(5)});
document.querySelector(".JS").addEventListener("click", function(){show_details(6)});
document.querySelector(".AWI").addEventListener("click", function(){show_details(0)});
document.querySelector(".ISI").addEventListener("click", function(){show_details(1)});
document.querySelector(".RKI").addEventListener("click", function(){show_details(2)});
document.querySelector(".AKI").addEventListener("click", function(){show_details(3)});
document.querySelector(".KSI").addEventListener("click", function(){show_details(4)});
document.querySelector(".BMI").addEventListener("click", function(){show_details(5)});
document.querySelector(".JSI").addEventListener("click", function(){show_details(6)});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

setInterval(() => {
    plusSlides(1);
}, 4000); 
  