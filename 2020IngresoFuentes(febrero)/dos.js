function mostrar()
{
var comida;//a v m
var peso; //10 a 1000
var precio; //mayor a 0
var respuesta=true;
var acumuladorPeso=0;
var precioFinal;

    while(respuesta)
     {
     
      comida=prompt("Ingrese la comida a v o m");

      while(!isNaN(comida) || comida!="a" && comida!="v" && comida!="m" )
      {
        comida=prompt("Error, ingrese comida nuevamente");

      }
      
      peso=prompt("Ingrese el peso");

      while(isNaN(peso) || peso < 0 || peso > 1000 )
      {
        peso=prompt("Error, ingrese el peso nuevamente");
        peso=parseInt(peso);
      }

      precio=prompt("Ingrese el precio")

      while(isNaN(precio) || precio < 0 )
      {
        precio=prompt("Ingrese el precio nuevamente");
        precio=parseInt(precio);
      }

      respuesta=confirm("Desea seguir cargando datos?")
    
    
    //puntoA
    acumuladorPeso=acumuladorPeso+peso;
    
   if(acumuladorPeso>300)
   {
    descuento=0.25
    
   }else if(acumuladorPeso>100 && acumuladorPeso<300)
   {
   descuento=0.15
   }
    
  }
    precioFinal=acumuladorPeso*descuento*precio;

}
