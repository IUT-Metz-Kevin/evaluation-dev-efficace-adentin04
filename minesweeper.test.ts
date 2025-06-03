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
function Ligne(minefield: string){
  let compterBombe=0;
  for(let i of minefield){
   if(i=="."){
minefield = minefield.replace(".","1")
 
}  }

return minefield;
}
let mine = minesweeper(".*.**.\n....*.\n..*...")
let bombe = Bombe(".*.**.\n....*.\n..*...")
let RemplacementLigne= Ligne(".*.**.\n....*.\n..*...")
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

Deno.test('Remplacement Ligne', () => {
  assertEquals(RemplacementLigne, "1*1**1\n1111*1\n11*111");
});

