import Entity from "./entity";
import Trajectory from "./trajectory";

 export default class Enemy extends Entity{
   constructor(id, picture,colllider,X,Y,level,damage,typeAttack,velocity,speedAttack,hp,maxHp,armor,coordTargetX,coordTargetY){
      super(id, picture,colllider,X,Y,level,damage,typeAttack,velocity,speedAttack,hp,maxHp,armor);

      this.trajectory= new Trajectory(coordTargetX,coordTargetY);
      this.trajectory.definitionDirection(X,Y);
   }
   
   attack(entity){
      if(this.isCanAttack)
      {
        
          this.isCanAttack=false;
          super.attack(entity);
          setTimeout(() => {
              this.isCanAttack=true;
          }, 5000/this.speedAttack);
      }
   }
   isCollision(X,Y){
      return super.isCollision(X,Y);
      
   }

   moveWithVelosity(maxCordX,maxCordY){
      
      this.trajectory.definitionDirection(this.X,this.Y);
      super.moveWithVelosity(this.trajectory.directionX, this.trajectory.directionY,maxCordX,maxCordY)
      }
    



 }