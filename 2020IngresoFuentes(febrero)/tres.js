function mostrar()
{
var nombre;
var edad; //mayores a 18
var sexo; //f o m
var estadoCivil; //soltero,casado,viudo
var respuesta=true;
var edadMin;
var nombreJovenCasado;
var nombreMasViejo;
var edadMax;
var sexoViejo;
var contadorMujeresViudas=0;
var edadMujeres=0;
var contadorHombresSolteros=0;
var promedioEdadHombresSolteros;
var promedioEdadMujeresViudas;
var edadHombres=0;

while(respuesta){

	do
	{	
		nombre=prompt("Ingrese el nombre");

	}	while(!isNaN(nombre));
		
	do
	{	
		edad=prompt("Ingrese el edad");
		edad=parseInt(edad);
	}	while(isNaN(edad)|| edad<18);

	do
	{	
		sexo=prompt("Ingrese el sexo");
	}	while(!isNaN(sexo)||sexo!="f" && sexo!="m");

	do
	{	
		estadoCivil=prompt("Ingrese el estado civil");
	}	while(!isNaN(estadoCivil)||estadoCivil!="casado" && estadoCivil!="soltero" && estadoCivil!="viudo");


	if  (sexo=="m"&&estadoCivil=="casado"&& edad<edadMin)
	{	
		nombreJovenCasado=nombre;
		edadMin=edad;
	}else if(edad>edadMax)
	{	
		edadMax=edad;
		nombreMasViejo=nombre;
		sexoViejo=sexo;
	}
	if(sexo=="f" && estadoCivil=="casado" || estadoCivil=="viudo")
	{	
	contadorMujeresViudas=contadorMujeresViudas+1;
	
	}
	if(sexo=="f")	
	{	
	edadMujeres=edadMujeres+edad;
	
	}else if(sexo=="m"&& estadoCivil=="soltero")
	{	
		contadorHombresSolteros=contadorHombresSolteros+1;
		edadHombres+=edad;	
	}	

	
	respuesta=confirm("desea cargar mas datos?");
}

	promedioEdadMujeresViudas=edadMujeres/contadorMujeresViudas
	promedioEdadHombresSolteros=edadHombres/contadorHombresSolteros;



alert("promedio mujeres: "+promedioEdadMujeresViudas);
alert("promedio hombres: "+promedioEdadHombresSolteros);
alert("mujeres casadas o viudas: "+contadorMujeresViudas);
alert("el sexo del mas viejo es :"+sexoViejo+"edad es"+edadMax+"nombre es: "+nombreMasViejo);
alert("el hombre casado mas joven es:"+nombreJovenCasado); 


}
