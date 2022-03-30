import Collider from "../colider/collider";
import ImageObject from "../visualization/imageObject";
import Entity from "./entity";
import GameObject from "./gameobject";


 export default class Aura extends GameObject{
    constructor(power,picture,colllider,X,Y){
        super(0,picture,colllider,X,Y);
        this.power=power;

     }
     
     increasingSize(koef){
        this.colllider.solidAreas[0].radius*=(1+koef);
      this.picture.wight*=(1+koef);
      this.picture.height*=(1+koef);
      this.picture.X*=(1+koef);
      this.picture.Y*=(1+koef);
     }

     isCollision(X,Y){
        return super.isCollision(X,Y);
     }

     move(offsetX,offsetY,maxCordX,maxCordY){

        super.move(offsetX,offsetY,maxCordX,maxCordY);
     }

     draw(context){
         super.draw(context);
     }
     isAbrod(maxCordX,maxCordY){
        super.isAbrod(maxCordX,maxCordY);
        
     }
     repulsion(entity){
        
         if(this.isCollision(entity.X,entity.Y)){
            let vecX=entity.X-this.X;
        let vecY=entity.Y-this.Y;
        entity.move(this.power*vecX/Math.abs(vecX)/4,this.power*vecY/Math.abs(vecY)/4)
        //entity.velocity/=this.power;
         }
          
    }

 }