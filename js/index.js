window.onload=function(){
 let pic=document.querySelectorAll(".pic") ;
 // let pic1=document.querySelector(".pic1");
    let roundframes=document.querySelectorAll(".Round-frame ul li");

    console.log(pic,roundframes);
    let tl=setInterval(mover,2000);

    let now=next=0;
    function mover(){
        next++;
        if(next==pic.length){
            next=0;
        }
        pic[next].style.left="1349px";
        animate(pic[now],{left:-1349});
        animate(pic[next],{left:0});
        roundframes[now].classList.remove("hot");
        roundframes[next].classList.add("hot");
        now=next;

    }















}