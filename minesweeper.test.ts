import { assertEquals } from "jsr:@std/assert";

function minesweeper(minefield: string): string {
  let compter=0;
  let compterBombe=0;
for(let i of minefield){
  compter++
 
 if(i=="*"){
compterBombe+=1
 
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


 return (String(compterBombe),minefield);

}
function Bombe(minefield: string){
  let compterBombe=0;
  for(let i of minefield){
   if(i=="*"){
compterBombe+=1
 
}  }
return compterBombe;
}
let mine = minesweeper(".*.**.\n....*.\n..*...")
let bombe = Bombe(".*.**.\n....*.\n..*...")

Deno.test('remplacer le nombre de point prémiere ligne', () => {
  assertEquals(mine, "1*2**2\n");
});
Deno.test('remplacer le nombre de point deuxième ligne', () => {
  assertEquals(mine, "1234*2\n");
});
Deno.test('remplacer le nombre de point troisième ligne', () => {
  assertEquals(mine, "01*211\n");
});

Deno.test('Nombre Bombe', () => {
  assertEquals(bombe, 5);
});

