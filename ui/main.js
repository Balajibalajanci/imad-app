console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='THEORY OF COMPUTATION';
//maove image
var image=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginleft + 10;
    image.style.marginLeft =marginLeft + 'px';
}



image.onclick=function(){
    
    var interval=setInterval(moveRight,100);
      
};