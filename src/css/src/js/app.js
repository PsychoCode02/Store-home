/* Reto del día:
Dados 2 Arreglos, a = [ 2, 3, 6, 8, 10 ] y b = [ 1, 10, 5, 8, 9 ]. 
Enlazar los dos arreglos en uno y ordenarlos de mayor a menor. Salida esperada: [ 10, 10, 9, 8, 8, 6, 5, 3, 2, 1 ].
 Un plus sería eliminar los números que están repetidos. */
 const a = [2, 3, 6, 8, 10];
 const b = [ 1, 10, 5, 8, 9 ];
 const c = a.concat(b);

 c.sort(function(b,a) {
    return a-b;
  });

  for(var i = c.length -1; i >=0; i--){
    if(c.indexOf(c[i]) !== i) c.splice(i,1);
  }
  
  console.log(c);
  
 
