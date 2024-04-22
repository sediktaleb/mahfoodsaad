window.scroll(0,0)

document.getElementById("Math").addEventListener("click",function(){
    document.getElementById("Math").style.animation="bonuce 1s";

    setTimeout(Math(), 1000)

});
        function Math(){

            
            window.open ("Scripts/Html/math.html");
            close();
        };
document.getElementById("Physic").addEventListener("click",function(){
    document.getElementById("Physic").style.animation="bonuce 1s";

    setTimeout(Physic(), 1000)

});
        function Physic(){

            
            window.open ("Scripts/Html/Physic.html");
            close();
        };
document.getElementById("Sience").addEventListener("click",function(){
    document.getElementById("Sience").style.animation="bonuce 1s";

    setTimeout(Sience(), 1000)

});
        function Sience(){

            
            window.open ("Scripts/Html/Sience.html");
            close();
        };




document.getElementById("Arrow").addEventListener("click",function(){
document.getElementById("Arrow").style.animation="download 1s ease";

setTimeout(myFunction, 1000)
    

});
function myFunction(){

    window.scroll(0,550)
    
};

document.getElementById("MImg").style.opacity="0";
document.getElementById("PImg").style.opacity="0";
document.getElementById("SImg").style.opacity="0";
document.getElementById("Math").addEventListener("mouseenter",function(){document.getElementById("MImg").style.opacity="1";});
document.getElementById("Math").addEventListener("mouseleave",function(){document.getElementById("MImg").style.opacity="0";});
document.getElementById("Physic").addEventListener("mouseenter",function(){document.getElementById("PImg").style.opacity="1";});
document.getElementById("Physic").addEventListener("mouseleave",function(){document.getElementById("PImg").style.opacity="0";});
document.getElementById("Sience").addEventListener("mouseenter",function(){document.getElementById("SImg").style.opacity="1";});
document.getElementById("Sience").addEventListener("mouseleave",function(){document.getElementById("SImg").style.opacity="0";});
