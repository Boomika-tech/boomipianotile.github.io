let a_o=[];
let c_o=[];
let tile;
let temp_a_o=[];
let score=0;

document.addEventListener('keypress',color_change);
document.addEventListener('click',function(e){

      if(e.target.id !=0 && e.target.id !="header"){
        if(temp_a_o.includes(e.target.id)){
          temp_a_o=temp_a_o.filter(item => item !== e.target.id);
          
        }else{
          alert("oops!WRONG click!!! YOUR SCORE"+" "+score);
          a_o=[];
          c_o=[];
          score=0;
        }
        if(temp_a_o.length==0){
          score+=1;
          color_change();
        }
      }
    });
    function color_change(){
      tile=(1+Math.floor(Math.random()*16)).toString();
      document.getElementById(tile).style.backgroundColor="white";
      setTimeout(function(){
        document.getElementById(tile).style.backgroundColor="black";
      },500);
      a_o.push(tile);
      temp_a_o=a_o;
      
     }