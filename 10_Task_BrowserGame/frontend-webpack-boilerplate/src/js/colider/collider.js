import SolidArea from "./solidarea";

export default class Collider{
    constructor(solidArea){
       
        this.solidAreas.push(solidArea);
    }
    solidAreas=[];

    isPointIntersectsArea(posX,posY,X,Y){
        let flag=false;
        this.solidAreas.forEach(area => {
            if(area.isAreaIntersectsArea(posX,posY,X,Y))
            {
                flag=true;
            }
            
            
        });
        return flag;
    }

    addArea(solidArea){
        solidAreas.push(solidArea);
    }
} 