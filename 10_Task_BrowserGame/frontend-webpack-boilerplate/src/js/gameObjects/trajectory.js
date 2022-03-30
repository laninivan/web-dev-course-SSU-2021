
 export default class Trajectory {
   constructor(coordTargetX,coordTargetY){
        this.coordTargetX=coordTargetX;
        this.coordTargetY=coordTargetY;
   }
   directionX;
   directionY;

   definitionDirection(X,Y){
    const deltX=this.coordTargetX-X;
    const deltY=this.coordTargetY-Y;
        
        if(Math.abs(deltX)>Math.abs(deltY))    {
            this.directionX=(deltX)/(Math.abs(deltX)+1);
            this.directionY=(deltY)/(Math.abs(deltX)+1);
        }
        else{
            this.directionX=(deltX)/(Math.abs(deltY)+1);
            this.directionY=(deltY)/(Math.abs(deltY)+1);
        }
   }
   
 }

 