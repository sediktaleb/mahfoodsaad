setTimeout(doit, 1500)

function doit(){
document.getElementById("download").innerHTML="تم التحميل ";
setTimeout(test, 500)


};

function test(){
    window.open("../../index.html");
    close();

};