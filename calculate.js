// let floor;
// //floor=this.getAttribute("class");
// console.log(floor);
   let sum=0;
   let f1=document.getElementById("1f");
   let f2=document.getElementById("2f");
   let price;
   let km=document.getElementById("km").value;
   let finalPrice=[0,0,0,0,0,0,0,0,0,0,0];
   let idArr= new Array();
   // f2.onclick=function(){
      

      
   // }
   function kvadratmetr(){
     
      km=document.getElementById("km").value;
         if(km<=99){price=km*9500}
         if(km>=100 && km<=130){price=km*9000}
         if(km>=131){price=km*8500}
         finalPrice[0]=price;
      arraySum();
         
   }  
   
   document.getElementById("km").addEventListener( 'keyup',function(){  ///////////////////// KARDA keyup, keydown, keypress tarberutyunnery
      kvadratmetr();
      finalPrice[2]=km*800;
      if(km=='' || km==0){
      	sum=0;
      	//document.getElementById("result").innerHTML='hello';
      	//console.log('ok')
      }
      //const f2 = document.getElementById('2f');
      if (document.getElementById('2.5').checked) {
      	console.log('checked 2.5');
      }

      //console.log(km);
      //console.log(typeof km);
      document.getElementById("result").innerHTML=sum;
   } );


 //1
   document.getElementById("2.5").addEventListener('click',function(){
    
      finalPrice[1]=0;
      arraySum();
      if(km==0 || km==undefined)sum=0;
      document.getElementById("result").innerHTML=sum;
   });	


   document.getElementById("2.8").addEventListener('click',function(){
      
      finalPrice[1]=km*200;      
      arraySum();
      if(km==0)sum=0;
      document.getElementById("result").innerHTML=sum;
   });




	//2
   document.getElementById("1").addEventListener('click',function(){
      
   	finalPrice[2]=km*800;          ///односкатная крыша
      arraySum();
      if(km==0)sum=0;
      document.getElementById("result").innerHTML=sum;
   });
   
   document.getElementById("2").addEventListener('click',function(){
       
   	      ///Мансардная(двухскатная),
      finalPrice[2]=km*1000;
      arraySum();
      if(km==0)sum=0;
      document.getElementById("result").innerHTML=sum;
   });

   document.getElementById("3").addEventListener('click',function(){
      ///полноценный второй этаж 2,5 метра высотой 
      finalPrice[2]=km*1200;
      arraySum();
      if(km==0)sum=0;
      document.getElementById("result").innerHTML=sum;
   });

	//3
	document.getElementById("174").addEventListener('click',function(){
      
      finalPrice[3]=0;
      arraySum();
      if(km==0)sum=0;
      document.getElementById("result").innerHTML=sum
	})

   document.getElementById("224").addEventListener('click',function(){ 
    
   	finalPrice[3]=km*300;
      arraySum();
      if(km==0)sum=0;
      document.getElementById("result").innerHTML=sum;
   });


///4
document.getElementById("karkas").addEventListener('click',function(){
   
   finalPrice[4]=0;
   arraySum();
   if(km==0)sum=0;
   document.getElementById("result").innerHTML=sum;
})

document.getElementById("124").addEventListener('click',function(){ 
  
      finalPrice[4]=km*600;
      arraySum();
      if(km==0)sum=0;
      document.getElementById("result").innerHTML=sum;
   });
   


  ///5
  document.getElementById("wind").addEventListener('keyup',function(){
   
   finalPrice[5]=document.getElementById("wind").value*8000;
   arraySum();
   if(km==0)sum=0;
   document.getElementById("result").innerHTML=sum;
});


///6
document.getElementById("saiding").addEventListener('click',function(){
   
   finalPrice[6]=km*1500;
   arraySum();
   if(km==0)sum=0;
   document.getElementById("result").innerHTML=sum;
});

document.getElementById("xaus").addEventListener('click',function(){
   
   finalPrice[6]=km*1700;
   arraySum();
   if(km==0)sum=0;
   document.getElementById("result").innerHTML=sum;
});

document.getElementById("kirpich").addEventListener('click',function(){
   
   finalPrice[6]=km*4200;
   arraySum();
   if(km==0)sum=0;
   document.getElementById("result").innerHTML=sum;
});


///7
let j=0;
document.getElementById("vodostochnaya").addEventListener('click',function(){
   
   j++;
   if(j%2!=0){finalPrice[7]=km*350;} 
   else{finalPrice[7]=0;};
   arraySum();
   if(km==0)sum=0;
   document.getElementById("result").innerHTML=sum;
});


///8

document.getElementById("terassa").addEventListener('keyup',function(){
   
   finalPrice[8]=document.getElementById("terassa").value*3000;
   arraySum();
   if(km==0)sum=0;
   document.getElementById("result").innerHTML=sum;
   
});


///9
document.getElementById("kark").addEventListener('click',function(){
  
   finalPrice[9]=0;
   arraySum();
   if(km==0)sum=0;
   document.getElementById("result").innerHTML=sum;
});

document.getElementById("mejp").addEventListener('click',function(){
   
   finalPrice[9]=km*1200;
   arraySum();
   if(km==0)sum=0;
   document.getElementById("result").innerHTML=sum;
});


///10
////
////
////
////
/////
/////
/////
/////
/////
















function arraySum(){
   sum=0;
   for (let i = 0; i < finalPrice.length; i++) {
      sum += finalPrice[i];
      
   }
}