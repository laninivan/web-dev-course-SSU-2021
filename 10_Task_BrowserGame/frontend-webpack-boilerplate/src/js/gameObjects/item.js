
import GameObject from "./gameobject";
export default class Item extends GameObject{
  constructor(id, picture,colllider,position,typeItems){
     super(id, picture,colllider,position);
     this.typeItems=typeItems;
  }
}