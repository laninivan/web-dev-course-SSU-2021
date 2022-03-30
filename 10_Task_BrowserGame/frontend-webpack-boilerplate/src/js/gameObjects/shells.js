import Acting from "./acting";
import Trajectory from "./trajectory";

 export default class Shells extends Acting {
    constructor(id, picture,colllider,X,Y,level,damage,typeAttack,velocity,coordTargetX,coordTargetY){
        super(id, picture,colllider,X,Y,level,damage,typeAttack,velocity);
        
        this.trajectory= new Trajectory(coordTargetX,coordTargetY);
        this.trajectory.definitionDirection(X,Y);
     }
     trajectory;

     isCollision(X,Y){
         return super.isCollision(X,Y);
     }


     moveWithVelosity(maxCordX,maxCordY){
         super.moveWithVelosity(this.trajectory.directionX,
            this.trajectory.directionY,maxCordX,maxCordY)
     }

 }