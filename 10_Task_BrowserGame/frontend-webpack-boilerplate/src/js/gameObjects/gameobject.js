import Collider from "../colider/collider";
import Picture from "../visualization/picture";

 export default class GameObject{
    constructor(id, picture,colllider,X,Y){
        this.id=id;
        this.picture=picture;
        this.colllider=colllider;
        this.isVisible=true;
        this.X=X;
        this.Y=Y;
     }
     
     isCollision(X,Y){
        return this.colllider.isPointIntersectsArea(this.X,this.Y,X,Y);
     }

     move(offsetX,offsetY,maxCordX,maxCordY){


    this.isAbrod(maxCordX,maxCordY); 
      this.X+=offsetX;
      this.Y+=offsetY;
     }

     draw(context){
         if(this.isVisible)
         {
            this.picture.draw(context,this.X,this.Y);
        }
     }
     isAbrod(maxCordX,maxCordY){
        if(this.X<=-50 ||this.X>=maxCordX+50 || this.Y<=-50 || this.Y>=maxCordY+50)
            this.isVisible=false;
        else this.isVisible=true;
        
     }
 }