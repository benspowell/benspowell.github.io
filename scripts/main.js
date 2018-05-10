var logo = document.querySelector("img[id='logo']");

logo.onmouseover= function(){
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