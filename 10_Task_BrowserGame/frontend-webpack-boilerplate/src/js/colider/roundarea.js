import SolidArea from "./solidarea";

export default class RoundArea extends SolidArea{
    constructor(X,Y,radius){
        super(X,Y);
        this.radius=radius;
    }
    isAreaIntersectsArea(posX,posY,X,Y){

        return Math.hypot(X-this.X-posX,Y-this.Y-posY)<=Math.hypot(this.radius,this.radius);
    }
}