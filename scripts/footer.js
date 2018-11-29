var icons = document.querySelectorAll("img[id='footer-icon']");
var cicons = document.querySelectorAll("img[id='contact-icon']");
//var foot = document.querySelector("footer");
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

//foot.onmouseover=function(){
//	for(j=0;j<icons.length;j++){
//		otherIcon=icons.item(j);
//        path=otherIcon.getAttribute("src");
//        path=path.substring(0,path.indexOf("-"))+"-grey.png";
//        otherIcon.setAttribute("src",path);
//	}
//}
//foot.onmouseout=function(){
//    for (j=0; j<icons.length;j++){        
//            otherIcon=icons.item(j);
//            path=otherIcon.getAttribute("src");
//            path=path.substring(0,path.indexOf("-"))+"-wht.png";
//            otherIcon.setAttribute("src",path);
//        }
//    }
for(i=0;i<cicons;i++){
	icon=cicons.item(i);
	icon.onmouseover=function(){
		path=icon.getAttribute("src");
		path=path.substring(0,path.indexOf("-"))+"-blk.png";
		icon.setAttribute("src",path);
	}
}

for(i = 0; i<icons.length;i++){
    icon = icons.item(i);
    icon.setAttribute("pos",i);
    icon.onmouseout=function(){
    for (j=0; j<icons.length;j++){        
            otherIcon=icons.item(j);
            path=otherIcon.getAttribute("src");
            path=path.substring(0,path.indexOf("-"))+"-wht.png";
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

