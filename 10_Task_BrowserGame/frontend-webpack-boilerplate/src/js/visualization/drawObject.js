import Picture from "./picture";
 export default class DrawObject extends Picture{
    constructor(X,Y,radius,color){
        super(X,Y);
        this.radius=radius;
        this.color=color;
    }
    draw(context,offsetX,offsetY)
    {
        context.beginPath()
        context.arc(this.X+offsetX,this.Y+offsetY,this.radius,Math.PI*2,false);
        context.fillStyle=this.color;
        context.fill();           
    }
}