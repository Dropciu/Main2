
if(window.innerWidth < 1000 || (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))){
  document.getElementById("to_nav").remove();
}
else {

  document.getElementById("to_nav").addEventListener("click", function(){
    window.scroll({
      top: window.innerHeight * 1.2, 
      left: 0, 
      behavior: 'smooth'
    });

  }, { once: true });


  window.addEventListener("scroll", function scroll(){
    if(window.pageYOffset > window.innerWidth / 12){
        document.getElementById("to_nav").remove();
        this.window.removeEventListener("scroll", scroll);
    }
  })

}
