var logo = document.querySelector("img[id='logo']");
pickLogoColor();
var url = document.querySelector("h1[id='url']");
function pickLogoColor(){
        logo.setAttribute("src","images/logo-colors/"+Math.floor(Math.random()*16)+".png");
    setTimeout(function(){
        logo.setAttribute("src","images/logo-colors/"+Math.floor(Math.random()*16)+".png");
        setTimeout(function(){
            logo.setAttribute("src","images/logo-colors/"+Math.floor(Math.random()*16)+".png");
            setTimeout(function(){
                logo.setAttribute("src","images/logo-colors/"+Math.floor(Math.random()*16)+".png");
                setTimeout(function(){
                    logo.setAttribute("src","images/logo-colors/"+Math.floor(Math.random()*16)+".png");
                    setTimeout(function(){
                        logo.setAttribute("src","images/logo-colors/"+Math.floor(Math.random()*16)+".png");
                        setTimeout(function(){
                            logo.setAttribute("src","images/logo-colors/"+Math.floor(Math.random()*16)+".png");
                            setTimeout(function(){
                                logo.setAttribute("src","images/logo-colors/"+Math.floor(Math.random()*16)+".png");
                                setTimeout(function(){
                                    logo.setAttribute("src","images/logo-colors/"+Math.floor(Math.random()*16)+".png");
    }, 50);
    }, 50);
    }, 50);
    }, 50);
    }, 50);
    }, 50);
    }, 50);
    }, 50);
}

logo.onmouseover= function(){pickLogoColor();}
logo.onclick=function(){pickLogoColor();}
//url.textContent=window.location.href;
