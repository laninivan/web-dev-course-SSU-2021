import SolidArea from "./solidarea";

export default class RectangularArea extends SolidArea{
    constructor(X,Y,width,height){
        super(X,Y);
        this.width=width;
        this.height=height;
    }
    isAreaIntersectsArea(posX,posY,X,Y){
        return X>=this.X+posX-this.width/2 && X<=this.X+posX+this.width/2 &&
        Y>=this.Y+posY-this.height/2 && Y<=this.Y+posY+this.height/2;
    }
}