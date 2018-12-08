var verficador=null;
var classe=null;
var mascara = null;
var enderecoRede=null;
var inicio=null;
var ultimo=null;
var broad=null;
var lann=null;

function ok()
{
 


var str = sample3.value;
var res = str.split(".");



  var v1=null;
  var v2 = null;
  var v3= null;
  var v4= null;


  v1 = res[0];
  v2 = res[1];
  v3 = res[2];
  v4 = res[3];

  var p1 = parseInt(v1)
  var p2 = parseInt(v2)
  var p3 = parseInt(v3)
  var p4 = parseInt(v4)

  // ************************************CLASSE A ****************************************

 if((p1>=1 && p1<=126) && (p2>=0 && p2<=255) && (p3>=0 && p3<=255) && (p4>=0 && p4<=255))
  {
 	 
 	if(p2+p3+p4<=765)
	 {
	 
	    verficador = 1;
	    classe = "A";	 
      mascara= "255.0.0.0";	
      enderecoRede= v1+"."+"0."+"0."+"0";
      inicio=v1+"."+"0"+"."+"0"+"."+"1";
      ultimo=v1+"."+"255"+"."+"255"+"."+"254";
      broad=v1+"."+"255"+"."+"255"+"."+"255";



      if((p1==10 && p2>=0 && p3>=0 && p4>=0) && (p1==10 && p2<=255 && p3<=255 && p4<=255))
      {
       lann="SIM"
      } 
      else
        {
          lann="NÃO"
        }

	 }
 	
  }

   // ************************************CLASSE B ****************************************

 if((p1>=128 && p1<=191) && (p2>=0 && p2<=255) && (p3>=0 && p3<=255) && (p4>=0 && p4<=255))
  {
 	
 	if(p3+p4<=510)
	 {
	 
	    verficador = 1;
	    classe = "B";	 	
      mascara="255.255.0.0";
      enderecoRede= v1+"."+v2+"."+"0."+"0";
      inicio=v1+"."+v2+"."+"0"+"."+"1";
      ultimo=v1+"."+v2+"."+"255"+"."+"254";
      broad=v1+"."+v2+"."+"255"+"."+"255";





      if((p1==172 && p2>=16 && p3>=0 && p4>=1) && (p1==172 && p2<=31 && p3<=255 && p4<=255))
      {
       lann="SIM"
      } 
      else
        {
          lann="NÃO"
        }

   }
      
	 }
 	

 

  // ************************************CLASSE C****************************************

 if((p1>=192 && p1<=223) && (p2>=0 && p2<=255) && (p3>=0 && p3<=255) && (p4>=0 && p4<=255))
  {
 	
 	   
 	
	    verficador = 1;
	    classe = "C";	
      mascara ="255.255.255.0";
      enderecoRede= v1+"."+v2+"."+v3+"."+"0";
       inicio=v1+"."+v2+"."+v3+"."+"1";
       ultimo=v1+"."+v2+"."+v3+"."+"254";
       broad=v1+"."+v2+"."+v3+"."+"255";
      //  QUANTIDADE DE HOSTS
       var hosts = 254-v4
     


        if((p1==192 && p2>=168 && p3>=0 && p4>=0) && (p1==192 && p2<=168 && p3<=255 && p4<=255))
        {
         lann="SIM"
        } 
        
        else
          {
            lann="NÃO"
          }
       
}


var decimal1 =p1 ;
var decimal2 =p2 ;
var decimal3 =p3 ;
var decimal4 =p4 ;
 
// converte em binário
var binario1 = decimal1.toString(2);
var binario2 = decimal2.toString(2);
var binario3 = decimal3.toString(2);
var binario4 = decimal4.toString(2);
 

  

if(verficador==1)
{
  // document.getElementById('informacao').style.backgroundColor="#CFCFCF";
 
  t1.innerHTML = hosts
  t2.innerHTML = v1+"."+v2+"."+v3+"."+v4 +" até "+ v1+"."+v2+"."+v3+"."+254
  t3.innerHTML=  v1+"."+v2+"."+v3+"."+v4
  t4.innerHTML=  v1+"."+v2+"."+v3+"."+255

} 
 else{alert("IP INVÁLIDO");}

}