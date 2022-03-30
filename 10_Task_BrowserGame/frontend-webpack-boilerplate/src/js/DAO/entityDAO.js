import Collider from "../colider/collider";
import RoundArea from "../colider/roundarea";
import Decoration from "../gameObjects/decoration";
import Enemy from "../gameObjects/enemy";
import Player from "../gameObjects/payer";
import DecorationsDAO from "./decorationsDAO";
import EnemiesDAO from "./enemiesDAO";
import PictureDAO from "./pictureDAO";
import ShellsDAO from "./shellsDAO";
import ProjectliesDAO from "./shellsDAO";

 export default class EntityDAO{
     constructor(context){
        this.context=context;
        this.picturesDAO = new PictureDAO();
        this.decorationDAO = new DecorationsDAO(context,this.picturesDAO);
        this.shellDAO= new ShellsDAO(context,this.picturesDAO)
        this.enemiesDAO=new EnemiesDAO(context,this.picturesDAO);
        this.isPossibleShot=true;
        this.isGameOver=false;
        
     }
     createPlayer(centerCanvasCordX,centerCanvasCordY){
      this.player= new Player(1,this.picturesDAO.getByKey('PlayerImg'),new Collider(new RoundArea(centerCanvasCordX,centerCanvasCordY,15)),
      centerCanvasCordX,centerCanvasCordY,1,1,'melee',5,10,5,5,0,0,0);
     }
     Init(){
        for(let i=0;i<25;i++){
         this.decorationDAO.createDeco_1(Math.random()*Math.random()*20000,Math.random()*Math.random()*20000);
      this.decorationDAO.createDeco_2(Math.random()*Math.random()*20000,Math.random()*Math.random()*20000);
      this.decorationDAO.createDeco_3(Math.random()*Math.random()*20000,Math.random()*Math.random()*20000);
      this.decorationDAO.createDeco_4(Math.random()*Math.random()*20000,Math.random()*Math.random()*20000);
        }
      

      setInterval(() => {
         this.enemiesDAO.createEnemie_1(0,Math.random()*1000,this.player.X,this.player.Y);
         this.enemiesDAO.createEnemie_1(Math.random()*1000,0,this.player.X,this.player.Y)
         this.enemiesDAO.createEnemie_1(this.player.X*2,Math.random()*1000,this.player.X,this.player.Y);
         this.enemiesDAO.createEnemie_1(Math.random()*1000,this.player.Y*2,this.player.X,this.player.Y)

      }, 1000);

      setInterval(() => {


         this.enemiesDAO.createEnemie_2(0,Math.random()*1000,this.player.X,this.player.Y);
         this.enemiesDAO.createEnemie_2(Math.random()*1000,0,this.player.X,this.player.Y)
         this.enemiesDAO.createEnemie_2(this.player.X*2,Math.random()*1000,this.player.X,this.player.Y);
         this.enemiesDAO.createEnemie_2(Math.random()*1000,this.player.Y*2,this.player.X,this.player.Y)
      }, 100000);
      
     }
     drawAll(){
      this.decorationDAO.drawAll();  
      this.player.draw(this.context);   
      this.shellDAO.drawAll();
      this.enemiesDAO.drawAll();
      this.context.fillText("Level: "+ this.player.level, 20, 20);
      this.context.fillText("XP: "+this.player.xp, 20, 40);
      this.context.fillText("Money: "+this.player.money, 20, 60);
      this.context.fillText("HP: "+this.player.hp+"/"+this.player.maxHp, 20, 80);

       
     }

     service(maxCordX,maxCordY){
     
     

      this.shellDAO.removeUsedProjectlies(this.player.posX,this.player.posY);
      
      this.isShellHitEnemy();
      this.isDeadEnemy();
      this.movementInItsOwnDirection(maxCordX,maxCordY);
        this.drawAll();
        if(this.isEnemyAttackPlayer())
        {
         return true
        }
         
        else {
           return false;
         }
     }

     offsetAllPositions(offsetX,offsetY,maxCordX,maxCordY){
      this.decorationDAO.offsetAllPositions(offsetX*this.player.velocity,offsetY*this.player.velocity,maxCordX,maxCordY);
      this.shellDAO.offsetAllPositions(offsetX*this.player.velocity,offsetY*this.player.velocity,maxCordX,maxCordY);
      this.enemiesDAO.offsetAllPositions(offsetX*this.player.velocity,offsetY*this.player.velocity,maxCordX,maxCordY);
     }

     createShell(cursorX,cursorY,centerCanvasCordX,centerCanvasCordY){
    
      if(this.isPossibleShot)
      {
         this.shellDAO.createStandartShell(cursorX,cursorY,centerCanvasCordX,centerCanvasCordY);
         this.isPossibleShot=false;
         setTimeout(() => {
            this.isPossibleShot=true;
         }, 5000/this.player.speedAttack);
      }
      
     
         
     }
     


     movementInItsOwnDirection(maxCordX,maxCordY)
     {
        this.shellDAO.movementInItsOwnDirection(maxCordX,maxCordY);
        this.enemiesDAO.movementInItsOwnDirection(maxCordX,maxCordY);
     }

     isShellHitEnemy()
     {
      this.shellDAO.shells.forEach((sh,indexSh)=>{
         
         this.enemiesDAO.enemies.forEach((enemy,indexEnemy)=>{

            if(enemy.isCollision(sh.X,sh.Y))
            {
               this.shellDAO.shells.splice(indexSh,1);
               this.player.attack(enemy)
            }
            
         })

      })
   }

      isDeadEnemy(){
         this.enemiesDAO.enemies.forEach((en,IndexEn)=>{  
               if(en.hp<=0)
               {
                     this.player.xp+=en.level;
                     this.player.money+=Math.random()*10*en.level;
                     this.enemiesDAO.enemies.splice(IndexEn,1);
               }
                  
         })
      }
      isEnemyAttackPlayer(){
         
            this.enemiesDAO.enemies.forEach((enemy,indexEnemy)=>{
   
               if(enemy.isCollision(this.player.X,this.player.Y))
               {
                  enemy.attack(this.player)
               }
               if(this.player.hp<=0)
               this.isGameOver=true;
               
            })
            return this.isGameOver;
      }

 }