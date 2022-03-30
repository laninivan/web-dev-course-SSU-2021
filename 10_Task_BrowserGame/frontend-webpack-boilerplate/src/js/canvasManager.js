
import ImageObject from './visualization/imageObject';
import DrawObject from './visualization/drawObject';
import Picture from './visualization/picture';

import EntityDAO from './DAO/entityDAO';
import DecorationsDAO from './DAO/decorationsDAO';
import PictureDAO from './DAO/pictureDAO';
import Decoration from './gameObjects/decoration';
import Collider from './colider/collider';
import RoundArea from './colider/roundarea';

const canvas = document.querySelector('canvas')
    canvas.width=innerWidth
    canvas.height=innerHeight
const context = canvas.getContext('2d')

let centerCanvasCordY=canvas.height/2;
let centerCanvasCordX=canvas.width/2;

context.fillStyle = "#556B2F";
context.strokeStyle = "#F00";
context.font = 'bold 15px sans-serif';



var entityDAO = new EntityDAO(context);

entityDAO.createPlayer(centerCanvasCordX,centerCanvasCordY);
entityDAO.Init();






let directVoluePlayerY=0;
let directVoluePlayerX=0;
function animate()
{
   requestAnimationFrame(animate);
    context.clearRect(0,0,canvas.width,canvas.height);
   
  entityDAO.offsetAllPositions(directVoluePlayerX,directVoluePlayerY,canvas.width,canvas.height);
  if(entityDAO.service(canvas.width,canvas.height))
   console.log("GAME OVER")
    

    
}

let lastPressEventCode;




window.addEventListener('keyup',function(event){
   lastPressEventCode='';
   if(event.code=='KeyW'||event.code=='KeyS')
   {
      setTimeout(() => {  directVoluePlayerY=0; }, 100);
      
   }
   else if(event.code=='KeyD' || event.code=='KeyA')
   {
      setTimeout(() => {  directVoluePlayerX=0; }, 100);
      
   }  
})

 window.addEventListener('keydown',function(event){

   if(event.code=='KeyW')
   {
      directVoluePlayerY=1;
      lastPressEventCode=event.code;
   }
   else if(event.code=='KeyS')
   {
      directVoluePlayerY=-1;
      lastPressEventCode=event.code;
   }
   else if(event.code=='KeyD')
   {
      directVoluePlayerX=-1;
      lastPressEventCode=event.code;
   }
   else if(event.code=='KeyA')
   {
      directVoluePlayerX=1;
      lastPressEventCode=event.code;
   }
   
 })

 window.addEventListener('click',function(event){
   entityDAO.createShell(event.clientX,event.clientY,centerCanvasCordX,centerCanvasCordY);
   
 })
animate();



