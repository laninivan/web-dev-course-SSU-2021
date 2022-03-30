import Picture from "./picture";

 export default class ImageObject extends Picture{
    constructor(imgSrc,X,Y,wight,height){
        super(X,Y);
        this.wight=wight;
        this.height=height;
        this.image=new Image;
        this.image.src=imgSrc;
        
    }
    draw(context,offsetX,offsetY)
    {
        const posX=this.X+offsetX;
        const posY=this.Y+offsetY;
         
            context.drawImage(this.image,posX,posY,this.wight,this.height);  
    }      
 }