import SolidArea from "./solidarea";

export default class RoundArea extends SolidArea{
    constructor(X,Y,radius){
        super(X,Y);
        this.radius=radius;
    }
    isAreaIntersectsArea(posX,posY,X,Y){
    //     console.log("!!!!!!!!!!!!!!!!!!")
    //     console.log("Dinst= "+Math.hypot(X-this.X-posX,Y-this.Y-posY))
    //   console.log("Rkv= "+Math.hypot(this.radius,this.radius))
        return Math.hypot(X-this.X-posX,Y-this.Y-posY)<=Math.hypot(this.radius,this.radius);
    }
}