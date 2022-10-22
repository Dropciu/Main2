window.scroll({
    left: 0, 
    behavior: 'smooth'
});



document.body.setAttribute("ondragstart", "return false");
document.body.setAttribute("ondrag", "return false");

if(window.location.protocol == "http"){
    document.location = document.URL.replace(/^http:/i, "https:"); 
}

if (window.location.protocol == "https:" && window.location.href.substr(window.location.href.lastIndexOf('/') + 1) != ""){
    window.location.replace("http://drobik.site");
}


window.addEventListener('load', (event) => {
    document.getElementById("loading_layer").classList.add("loading_layer_exit");
    setTimeout(() => {
        document.getElementById("loading_layer").remove();
    }, 500);
    document.querySelector(".b iframe").src = "https://statystyka.pzla.pl/personal.php?page=profile&nr_zaw=125537&r=2";
});



document.querySelector("#section_1_tile  li:nth-child(1)").addEventListener("click", to_achievents);
document.querySelector("#section_1_tile  li:nth-child(2)").addEventListener("click", to_record);
document.querySelector("#section_1_tile  li:nth-child(3)").addEventListener("click", to_project);
document.querySelector("#section_1_tile  li:nth-child(4)").addEventListener("click", to_contact);

document.querySelector("#menu-items  li:nth-child(1)").addEventListener("click", () => {to_start(); click_nav()});
document.querySelector("#menu-items  li:nth-child(2)").addEventListener("click", () => {to_achievents(); click_nav()});
document.querySelector("#menu-items  li:nth-child(3)").addEventListener("click", () => {to_record(); click_nav()});
document.querySelector("#menu-items  li:nth-child(4)").addEventListener("click", () => {to_project(); click_nav()});
document.querySelector("#menu-items  li:nth-child(5)").addEventListener("click", () => {to_contact(); click_nav()});

document.getElementById("blurry-background").addEventListener("click", click_nav);

function click_nav(){
    document.getElementById("check").click();
}
function to_start(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}
function to_achievents(){
    window.scrollTo({
        top: window.innerHeight * 5,
        left: 0,
        behavior: 'smooth'
    });
}
function to_record(){
    window.scrollTo({
        top: window.innerHeight * 6.25,
        left: 0,
        behavior: 'smooth'
    });
}
function to_project(){
    window.scrollTo({
        top: window.innerHeight * 8.75,
        left: 0,
        behavior: 'smooth'
    });
}
function to_contact(){
    window.scrollTo({
        top: window.innerHeight * 10,
        left: 0,
        behavior: 'smooth'
    });
}






var controller = new ScrollMagic.Controller();



var section_1_title = new ScrollMagic.Scene({offset: 100, duration: window.innerHeight * 2 / 3}).setPin("#section_1_title").addTo(controller);




var nav = new ScrollMagic.Scene({offset: window.innerHeight * 0.1}).setClassToggle("#nav", "nav_active").on("enter", function () { 
    document.getElementById("nav").style.visibility="visible";
}).on("leave", function () { setTimeout(() => {
    document.getElementById("nav").classList.add("nav_active2");
    document.getElementById("nav").style.visibility="hidden";
    setTimeout(() => {
        document.getElementById("nav").classList.remove("nav_active2");
    }, 450);
}, 10); }).addTo(controller);




document.getElementById("check").addEventListener('change', e => {
    if(e.target.checked === true) {
        document.getElementById("menu-items").classList.add("menu-items-entrance");
        document.getElementById("blurry-background").classList.add("blurry-background-entrance");
        document.getElementById("menu-items").style.visibility = "visible";
        document.getElementById("blurry-background").style.visibility = "visible";
        document.querySelector("body").style.overflow = "hidden";

        setTimeout(() => {
            document.getElementById("menu-items").classList.remove("menu-items-entrance");
            document.getElementById("blurry-background").classList.remove("blurry-background-entrance");
        }, 500);
    }
    else if(e.target.checked === false) {
        document.getElementById("menu-items").classList.add("menu-items-exit");
        document.getElementById("blurry-background").classList.add("blurry-background-exit");
        document.querySelector("body").style.overflow = "auto";
        document.querySelector("body").style.overflowX = "hidden";
        
        setTimeout(() => {
            document.getElementById("menu-items").style.visibility = "hidden";
            document.getElementById("blurry-background").style.visibility = "hidden";
            document.getElementById("menu-items").classList.remove("menu-items-exit");
            document.getElementById("blurry-background").classList.remove("blurry-background-exit");
        }, 500);
    }
});




var section_1_desc = new ScrollMagic.Scene({offset: window.innerHeight * 1.60, duration: window.innerHeight}).setPin("#section_1_desc").addTo(controller);



var section_1_zoom = new ScrollMagic.Scene({offset: window.innerHeight * 2.6}).setClassToggle("#section_1_right", "section_1_zoom").on("leave", function () { setTimeout(() => {
    document.getElementById("section_1_right").classList.add("section_1_zoom_return");
    setTimeout(() => {
        document.getElementById("section_1_right").classList.remove("section_1_zoom_return");
    }, 400);
}, 1); }).addTo(controller);


var section_1_quote = new ScrollMagic.Scene({offset: window.innerHeight * 3.3}).setClassToggle("#section_1_quote", "section_1_quote_anim").on("enter", function () { 
    document.getElementById("section_1_quote").style.visibility="visible";
}).on("leave", function () { setTimeout(() => {
    document.getElementById("section_1_quote").classList.add("section_1_quote_anim2");
    setTimeout(() => {
        document.getElementById("section_1_quote").classList.remove("section_1_quote_anim2");
        document.getElementById("section_1_quote").style.visibility="hidden";
    }, 650);
}, 10); }).addTo(controller);





var wipeAnimation = new TimelineMax().to("#slideContainer", 0.5, {z: -150}).to("#slideContainer", 1,   {x: "-25%"}).to("#slideContainer", 0.5, {z: 0}).to("#slideContainer", 0.5, {z: -150, delay: 1}).to("#slideContainer", 1,   {x: "-50%"}).to("#slideContainer", 0.5, {z: 0}).to("#slideContainer", 0.5, {z: -150, delay: 1}).to("#slideContainer", 1,   {x: "-75%"}).to("#slideContainer", 0.5, {z: 0});
    
           
new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "500%"
}).setPin("#pinContainer").setTween(wipeAnimation).addTo(controller);




var contact_arrow = new ScrollMagic.Scene({offset: window.innerHeight * 9.5}).setClassToggle("#contact_arrow", "contact_arrow_anim").on("enter", function () { 
    document.getElementById("contact_arrow").style.visibility="visible";
    document.getElementById("quote-text").innerHTML = "Programista <br> chodziarz";
}).on("leave", function () { setTimeout(() => {
    document.getElementById("contact_arrow").classList.add("contact_arrow_anim2");
    document.getElementById("quote-text").innerText = "Per aspera ad astra";
    setTimeout(() => {
        document.getElementById("contact_arrow").classList.remove("contact_arrow_anim2");
        document.getElementById("contact_arrow").style.visibility="hidden";
    }, 650);
}, 10); }).addTo(controller);