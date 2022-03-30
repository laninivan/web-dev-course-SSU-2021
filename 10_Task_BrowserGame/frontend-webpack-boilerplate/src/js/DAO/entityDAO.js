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
        let wave=1;
        
     }
     createPlayer(centerCanvasCordX,centerCanvasCordY){
      this.player= new Player(1,this.picturesDAO.getByKey('PlayerImg'),new Collider(new RoundArea(centerCanvasCordX,centerCanvasCordY,15)),
      centerCanvasCordX,centerCanvasCordY,1,1,'melee',3,15,8,8,0,0,0);
     }
     Init(){
         this.wave=1;

         for(let i=0;i<50;i++){
            this.decorationDAO.createDeco_1(Math.random()*Math.random()*20000,Math.random()*Math.random()*20000);
         this.decorationDAO.createDeco_2(Math.random()*Math.random()*20000,Math.random()*Math.random()*20000);
         this.decorationDAO.createDeco_3(Math.random()*Math.random()*20000,Math.random()*Math.random()*20000);
         this.decorationDAO.createDeco_4(Math.random()*Math.random()*20000,Math.random()*Math.random()*20000);

         this.decorationDAO.createDeco_1(-Math.random()*Math.random()*20000,-Math.random()*Math.random()*20000);
            this.decorationDAO.createDeco_2(-Math.random()*Math.random()*20000,-Math.random()*Math.random()*20000);
            this.decorationDAO.createDeco_3(-Math.random()*Math.random()*20000,-Math.random()*Math.random()*20000);
            this.decorationDAO.createDeco_4(-Math.random()*Math.random()*20000,-Math.random()*Math.random()*20000);

            this.decorationDAO.createDeco_1(Math.random()*Math.random()*20000,-Math.random()*Math.random()*20000);
         this.decorationDAO.createDeco_2(Math.random()*Math.random()*20000,-Math.random()*Math.random()*20000);
         this.decorationDAO.createDeco_3(Math.random()*Math.random()*20000,-Math.random()*Math.random()*20000);
         this.decorationDAO.createDeco_4(Math.random()*Math.random()*20000,-Math.random()*Math.random()*20000);

         this.decorationDAO.createDeco_1(-Math.random()*Math.random()*20000,Math.random()*Math.random()*20000);
            this.decorationDAO.createDeco_2(-Math.random()*Math.random()*20000,Math.random()*Math.random()*20000);
            this.decorationDAO.createDeco_3(-Math.random()*Math.random()*20000,Math.random()*Math.random()*20000);
            this.decorationDAO.createDeco_4(-Math.random()*Math.random()*20000,Math.random()*Math.random()*20000);
         }

         setInterval(() => {
            this.decorationDAO.decorations.forEach( (dec,index) => {
               if(Math.hypot(dec.X,dec.Y)>this.player.X*2)
               this.decorationDAO.decorations.splice(index,1);
            });
            for(let i=0;i<50;i++){
            this.decorationDAO.createDeco_1(600+Math.random()*Math.random()*20000,600+Math.random()*Math.random()*20000);
            this.decorationDAO.createDeco_2(600+Math.random()*Math.random()*20000,600+Math.random()*Math.random()*20000);
            this.decorationDAO.createDeco_3(600+Math.random()*Math.random()*20000,600+Math.random()*Math.random()*20000);
            this.decorationDAO.createDeco_4(600+Math.random()*Math.random()*20000,600+Math.random()*Math.random()*20000);

            this.decorationDAO.createDeco_1(-Math.random()*Math.random()*20000,-Math.random()*Math.random()*20000);
            this.decorationDAO.createDeco_2(-Math.random()*Math.random()*20000,-Math.random()*Math.random()*20000);
            this.decorationDAO.createDeco_3(-Math.random()*Math.random()*20000,-Math.random()*Math.random()*20000);
            this.decorationDAO.createDeco_4(-Math.random()*Math.random()*20000,-Math.random()*Math.random()*20000);

            this.decorationDAO.createDeco_1(600+Math.random()*Math.random()*20000,-Math.random()*Math.random()*20000);
            this.decorationDAO.createDeco_2(600+Math.random()*Math.random()*20000,-Math.random()*Math.random()*20000);
            this.decorationDAO.createDeco_3(600+Math.random()*Math.random()*20000,-Math.random()*Math.random()*20000);
            this.decorationDAO.createDeco_4(600+Math.random()*Math.random()*20000,-Math.random()*Math.random()*20000);
            
            this.decorationDAO.createDeco_1(-Math.random()*Math.random()*20000,600+Math.random()*Math.random()*20000);
            this.decorationDAO.createDeco_2(-Math.random()*Math.random()*20000,600+Math.random()*Math.random()*20000);
            this.decorationDAO.createDeco_3(-Math.random()*Math.random()*20000,600+Math.random()*Math.random()*20000);
            this.decorationDAO.createDeco_4(-Math.random()*Math.random()*20000,600+Math.random()*Math.random()*20000);


            }
         }, 10000);
       
      
      
        
        this.decorationDAO.createPlayerHpDeco(1,80,this.player.Y*2-80);
      this.decorationDAO.createPlayerMoney(250,this.player.Y*2-30);
      

      setInterval(() => {
         for(let i=0;i<this.wave;i++)
         {
            this.enemiesDAO.createEnemie_1(0,Math.random()*1000,this.player.X,this.player.Y);
            this.enemiesDAO.createEnemie_1(Math.random()*1000,0,this.player.X,this.player.Y)
            this.enemiesDAO.createEnemie_1(this.player.X*2,Math.random()*1000,this.player.X,this.player.Y);
            this.enemiesDAO.createEnemie_1(Math.random()*1000,this.player.Y*2,this.player.X,this.player.Y)
            if(this.wave>1){
               this.enemiesDAO.createEnemie_2(0,Math.random()*1000,this.player.X,this.player.Y);
               this.enemiesDAO.createEnemie_2(Math.random()*1000,0,this.player.X,this.player.Y)
               this.enemiesDAO.createEnemie_2(this.player.X*2,Math.random()*1000,this.player.X,this.player.Y);
               this.enemiesDAO.createEnemie_2(Math.random()*1000,this.player.Y*2,this.player.X,this.player.Y)
            }
         }
         
      }, 10000);

      setInterval(() => {
            this.wave++;
               this.player.hp+=0.25*this.player.maxHp;
            if(this.player.hp>this.player.maxHp)
            this.player.hp=this.player.maxHp
            
      }, 60000);
     }
     drawAll(){
      this.decorationDAO.drawAll();  
      this.player.draw(this.context);   
      this.shellDAO.drawAll();
      this.enemiesDAO.drawAll();
      this.decorationDAO.drawInterface();
      this.context.fillText("Волна: "+ this.wave, this.player.X, 20);

      this.context.fillStyle = "black";
       this.context.fillText("HP: "+this.player.hp+"/"+this.player.maxHp, 60, this.player.Y*2-20);
       this.context.fillStyle = "white";
       this.context.fillText(" x "+this.player.money, 300, this.player.Y*2-20);
       
     }

     service(maxCordX,maxCordY){
     
      this.shellDAO.removeUsedProjectlies(this.player.posX,this.player.posY);
      
      this.isShellHitEnemy();
      this.isDeadEnemy();
      this.movementInItsOwnDirection(maxCordX,maxCordY);
      this.changePlayerHpScale();
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
         if(this.player.countShell%2!=0){
            this.shellDAO.createStandartShell(cursorX,cursorY,centerCanvasCordX,centerCanvasCordY);
         }
         for(let i =1;i<Math.floor(this.player.countShell/2)+1;i++){
            this.shellDAO.createStandartShell(cursorX*(1+i/(this.player.countShell*8)),
               cursorY*(1+i/(this.player.countShell*8)),centerCanvasCordX,centerCanvasCordY);
            this.shellDAO.createStandartShell(cursorX*(1-i/(this.player.countShell*8)),
               cursorY*(1-i/(this.player.countShell*8)),centerCanvasCordX,centerCanvasCordY);
         }
         
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
      this.enemiesDAO.enemies.forEach((enemy,indexEnemy)=>{
        
         this.shellDAO.shells.forEach((sh,indexSh)=>{
            
            if(enemy.isCollision(sh.X,sh.Y))
            {
               this.shellDAO.shells.splice(indexSh,1);
               this.player.attack(enemy);
            }
         })
            

      })
   }

      isDeadEnemy(){
         this.enemiesDAO.enemies.forEach((en,IndexEn)=>{  
               if(en.hp<=0)
               {
                     let pros = Math.random();
                     // if(pros*en.level>0.9 && this.player.hp!=this.player.maxHp)
                     //    this.player.hp++;
                     this.player.xp+=en.level;
                     this.player.money+=en.level;
                     this.enemiesDAO.enemies.splice(IndexEn,1);
               }
                  
         })
      }
      isEnemyAttackPlayer(){
         
            this.enemiesDAO.enemies.forEach((enemy,indexEnemy)=>{
   
               this.player.repulsion(enemy);
               if(enemy.isCollision(this.player.X,this.player.Y))
               {
                  enemy.attack(this.player)
               }
               if(this.player.hp<=0)
               this.isGameOver=true;
               
            })
            return this.isGameOver;
      }

      changePlayerHpScale(){
         let proc=this.player.hp/this.player.maxHp;
         if(proc==1)
            this.decorationDAO.createPlayerHpDeco(1,80,this.player.Y*2-80);
            else if(proc>=0.875)
            this.decorationDAO.createPlayerHpDeco(2,80,this.player.Y*2-80);
            else if(proc>=0.75)
            this.decorationDAO.createPlayerHpDeco(3,80,this.player.Y*2-80);
            else if(proc>=0.625)
            this.decorationDAO.createPlayerHpDeco(4,80,this.player.Y*2-80);
            else if(proc>=0.50)
            this.decorationDAO.createPlayerHpDeco(5,80,this.player.Y*2-80);
            else if(proc>=0.375)
            this.decorationDAO.createPlayerHpDeco(6,80,this.player.Y*2-80);
            else if(proc>=0.25)
            this.decorationDAO.createPlayerHpDeco(7,80,this.player.Y*2-80);
            else if(proc>=0.125)
            this.decorationDAO.createPlayerHpDeco(8,80,this.player.Y*2-80);
            
      }
 }