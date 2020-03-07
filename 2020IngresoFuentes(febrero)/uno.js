
function mostrar()
{
var contador=0;
var articulo; //jabon,alcohol,barbijo
var precio; //entre 100 y 300
var cantidad; //0 a 1000
var marca;
var fabricante;
var precioMasCaroBarbijo;
var cantidadMasCaroBarbijo;
var fabricanteMasCaroBarbijo;
var banderaBarbijo=0;
var precioMasBaratoBarbijo;
var fabricanteMasBaratoBarbijo;
var cantidadMasBaratoBarbijo;
var cantidadMax;
var fabricanteMaxCantidad;
var banderaCantidad=0;
var banderaJabon=0;
var contadorJabon=0;

	while(contador<5)
	{
		articulo=prompt("Ingrese el articulo");
	  
	while(!isNaN(articulo))
	{
		
			articulo=prompt("Error, ingrese el articulo nuevamente");	
		
	}
		
		precio=prompt("Ingrese el precio del articulo");
		precio=parseInt(precio);
		
	while(isNaN(precio) && precio<100 || precio>1000 )
	{
			precio=prompt("Error,ingrese el precio nuevamente")
			precio=parseInt(precio);

	}
		
		cantidad=prompt("Ingrese la cantidad");
		cantidad=parseInt(cantidad);

	while (isNaN(cantidad) && cantidad<0 || cantidad>1000 )
	{
			cantidad=prompt("Error,ingrese la cantidad nuevamente");
			cantidad=parseInt(cantidad);
	}
		
	marca=prompt("Ingrese la marca");
		
	while (!isNaN(marca))
	{
		marca=prompt("Error, ingrese la marca nuevamente");
	}
		
		fabricante=prompt("Ingrese el fabricante");
		
	while(!isNaN(fabricante))
	{
			fabricante=prompt("Error,ingrese el fabricante nuevamente");
	}
	
		
	if(articulo=="barbijo" && banderaBarbijo == 0 ||precioMasCaroBarbijo<precio)//MAXIMO primera vez
	{
		precioMasCaroBarbijo=precio;
		cantidadMasCaroBarbijo=cantidad;
		fabricanteMasCaroBarbijo=fabricante;
		banderaBarbijo++;
	}
		
	if(articulo=="barbijo" && banderaBarbijo == 0 ||precioMasBaratoBarbijo>precio)//Minimo primera vez
	{
		precioMasBaratoBarbijo=precio;
		cantidadMasBaratoBarbijo=cantidad;
		fabricanteMasBaratoBarbijo=fabricante;
		banderaBarbijo++;
	}
	if (articulo=="barbijo")
	{
		
		

	}




	respuesta=confirm("desea continuar?")
	}

}
