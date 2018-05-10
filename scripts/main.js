var logo = document.querySelector("img[id='logo']");

logo.onmouseover= function(){
    logo.setAttribute("src","images/logo-reverse.gif");
    setTimeout(function(){
        logo.setAttribute("src","images/logo-forward.gif");
        setTimeout(function(){
            logo.setAttribute("src","images/logo-still.gif");
    }, 2250);
    }, 2275);
}