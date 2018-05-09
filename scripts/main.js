var logo = document.querySelector("img[id='logo']");

logo.onmouseover= function(){
        logo.setAttribute('src','images/logo/1.png');
        setTimeout(function(){
            logo.setAttribute('src','images/logo/2.png');
        }, 500);
        setTimeout(function(){
            logo.setAttribute('src','images/logo/3.png');
        }, 500);
        setTimeout(function(){
            logo.setAttribute('src','images/logo/4.png');
        }, 500);
        setTimeout(function(){
            logo.setAttribute('src','images/logo/5.png');
        }, 500);
}