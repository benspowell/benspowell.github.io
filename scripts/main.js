var logo = document.querySelector("img[id='logo']");
pickLogoColor();
var icons = document.querySelectorAll("img[id='footer-icon']");
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

//url.textContent=window.location.href;

function othersGrey(posInIcons){
    for (j=0; j<icons.length;j++){        
        if (j!==posInIcons){
                otherIcon=icons.item(j);
                path=otherIcon.getAttribute("src");
                path=path.substring(0,path.indexOf("-"))+"-grey.png";
                otherIcon.setAttribute("src",path);
            }
    }
}
var path;
var icon;
var otherIcon;
var i;
var j;
for(i = 0; i<icons.length;i++){
    icon = icons.item(i);
    icon.setAttribute("pos",i);
    icon.onmouseout=function(){
    for (j=0; j<icons.length;j++){        
            otherIcon=icons.item(j);
            path=otherIcon.getAttribute("src");
            path=path.substring(0,path.indexOf("-"))+"-blk.png";
            otherIcon.setAttribute("src",path);
        }
    }
}
    
icons.item(0).onmouseover=function(){othersGrey(0);}
icons.item(1).onmouseover=function(){othersGrey(1);}
icons.item(2).onmouseover=function(){othersGrey(2);}
icons.item(3).onmouseover=function(){othersGrey(3);}
icons.item(4).onmouseover=function(){othersGrey(4);}
icons.item(5).onmouseover=function(){othersGrey(5);}
icons.item(6).onmouseover=function(){othersGrey(6);}
icons.item(7).onmouseover=function(){othersGrey(7);}


logo.onmouseover= function(){pickLogoColor();}
logo.onclick=function(){pickLogoColor();}