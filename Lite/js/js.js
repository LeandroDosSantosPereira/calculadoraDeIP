// invisivel()
function invisivel()
{
document.getElementById('tabela').style.display = "none";
}
function ok()
{ 
ip=document.getElementById("sample3").value;
qtd=document.getElementById("sample4").value; 
var a = parseInt(qtd)
var converteIp = ip.split(".");
var octeto1 = converteIp[0]
var octeto2 = converteIp[1]
var octeto3 = converteIp[2]
var octeto4 = converteIp[3]
var oct4=parseInt(octeto4);
var cont=1;
var i=0;
var potencia=2;
if (a%2 !=0) 
{
a=a+1;
}
if(a<=64)
{ 
document.getElementById('tabela').style.display = "";
// verifica a potencia
for(i=0;i<8;i++)
{
if (potencia<a)
{
potencia=potencia*2;
cont++;
}
}
var multiplos = new Array(128,64,32,16,8,4,2,1)
for (var j=0; j<cont;j++)
{
var pulo =  multiplos[j]
}
for(m=0;m<qtd;m++)
{
var conta=0;
while(oct4<255){
var bod = document.getElementById("bo");
var tre = document.createElement("tr");
bod.appendChild(tre);
tre.setAttribute('id','idtr'+conta)
// TD DE REDE ************************************
var pegatr= document.getElementById("idtr"+conta);
var criatd = document.createElement("td"); 
pegatr.appendChild(criatd);
criatd.setAttribute('id','idtd'+conta) 	   				
document.querySelector("#idtd"+conta).innerHTML= 
converteIp[0]+"."+converteIp[1]+"."+converteIp[2]+"."+oct4    
// ++++++++++++++++++++++++++++++++++++++++++++++
// PRIMEIRO HOST****************************************
var hots = oct4+1
var getTrPHost = document.getElementById("idtr"+conta);
var criatdPHost = document.createElement("td");
getTrPHost.appendChild(criatdPHost);
criatdPHost.setAttribute('id','idPHost'+conta);
document.querySelector("#idPHost"+conta).innerHTML=
converteIp[0]+"."+converteIp[1]+"."+converteIp[2]+"."+hots   
// 	***********************************************************
oct4=oct4+pulo;
// ULTIMO HOST****************************************************
var ultimo = oct4-2
var getTrUltimoHost = document.getElementById("idtr"+conta)
var criatdUltimoHost = document.createElement("td")
getTrUltimoHost.appendChild(criatdUltimoHost)
criatdUltimoHost.setAttribute('id','idUltimo'+conta)
document.querySelector("#idUltimo"+conta).innerHTML=
converteIp[0]+"."+converteIp[1]+"."+converteIp[2]+"."+ultimo       
// ******************************************************************   
// BROADCAST**************************************************
var broad =oct4-1;
var getBroadcast = document.getElementById("idtr"+conta)
var criatdBroadcast = document.createElement("td")
getBroadcast.appendChild(criatdBroadcast)
criatdBroadcast.setAttribute('id','broadcastid'+conta)
document.querySelector("#broadcastid"+conta).innerHTML=
converteIp[0]+"."+converteIp[1]+"."+converteIp[2]+"."+broad    		
conta++
}
	}
		}// FECHA IF
	else
	{
	alert("Quantidade não suportada")
	}
}