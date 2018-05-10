var logo = document.querySelector("img[id='logo']");

logo.onmouseover= function(){
if (logo.getAttribute("src")==="images/logo/1.png"){
    setTimeout(function(){
        logo.setAttribute('src','images/logo/2.png');
        setTimeout(function(){
            logo.setAttribute('src','images/logo/3.png');
            setTimeout(function(){
                logo.setAttribute('src','images/logo/4.png');
                setTimeout(function(){
                    logo.setAttribute('src','images/logo/5.png');
                }, 100);
            }, 100);
        }, 100);
    }, 100);
}else{
    setTimeout(function(){
        logo.setAttribute('src','images/logo/4.png');
        setTimeout(function(){
            logo.setAttribute('src','images/logo/3.png');
            setTimeout(function(){
                logo.setAttribute('src','images/logo/2.png');
                setTimeout(function(){
                    logo.setAttribute('src','images/logo/1.png');
                }, 100);
            }, 100);
        }, 100);
    }, 100);
}
}