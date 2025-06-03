import { assertEquals } from "jsr:@std/assert";

function minesweeper(minefield: string): string {
  let compter=0;
  let compterBombe=0;
for(let i of minefield){
  compter++
 
 if(i=="*"){
  compterBombe++
 
}  
  if(i=="." && minefield[compter-1]=== "*" ||minefield[compter+1]=== "*"){
  
    minefield = minefield.replace(".",String(2))
 
  }
    if(i=="*" && minefield[compter-1]=== "." ||minefield[compter+1]=== "*"){
    minefield = minefield.replace(".",String(1))
   
  }
      if(i=="." && minefield[compter-1]=== "*" ||minefield[compter+1]=== "."){

    minefield = minefield.replace(".",String(1))
   
  }
      if(i=="." && minefield[compter-1]=== "*.." ||minefield[compter+3]=== "*" ||minefield[compter-3]=== "*..."){

    minefield = minefield.replace(".",String(2))
   
  }
    if(i=="." && minefield[compter-1]=== "**" ||minefield[compter+1]=== "."){
    minefield = minefield.replace(".",String(2))
 
  }
  if(i=="." && minefield[compter-1]=== ".*" ||minefield[compter+1]=== "*."){
    minefield = minefield.replace(".",String(1))

  }
    if(i=="." && minefield[compter-1]=== "." ||minefield[compter+1]=== "."){
    minefield = minefield.replace(".",String(0))

  }
      if(i=="." && minefield[compter-1]=== "**." ||minefield[compter+2]=== "*."||minefield[compter-2]=== "**"){
    minefield = minefield.replace(".",String(2))

  }


}


 return (String(compterBombe),"",minefield);

}
let mine = minesweeper(".*.**.\n....*.\n..*...")
console.log(mine)
Deno.test('remplacer le nombre de point pas les numéro correct ', () => {
  assertEquals(mine, "1*2**2\n1234*2\n01*211");
});

Deno.test('Nombre Bombe', () => {
  assertEquals(mine, "5");
});
