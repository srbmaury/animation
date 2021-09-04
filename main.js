var i = 0;
var txt = 'Wlcm ';
console.log(txt);
var speed = 400;
function typeWriter(){
    if(i < txt.length){
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }
    else{
        document.getElementById('demo2').style.visibility = "visible";
    }
}

function myMove(a){
    var elem = document.getElementById(a);
    var pos = 500;
    var size = 2;
    var opac = 0;
    var id = setInterval(frame,10);
    function frame(){
        if(pos==100){
            clearInterval(id);
            var obj = document.getElementById('text2');
            obj.style.visibility = 
            "visible";
            
            var pos2 = 200;
            var id2 = setInterval(frame2,10);
            function frame2(){
                if(pos2==480){
                    clearInterval(id2);
                    var objs = document.getElementById('text3');
                    objs.style.visibility = 
                    "visible";
                    typeWriter();
                }
                else{
                    pos2++;
                    obj.style.paddingLeft = pos2+'px';
                }   
            }   
        }
        else{
            pos--;
            size+=0.1;
            opac+=0.2;
            elem.style.fontSize = size+'px';
            elem.style.paddingTop = pos+'px';
            elem.style.opacity = opac;
        }
    }
}
