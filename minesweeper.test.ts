import { assertEquals } from "jsr:@std/assert";

function minesweeper(minefield: string): string {
  let compterBombe=0;
  let compterZone=0;


  if(minefield[1]=="*"){
    

  minefield= minefield.replace(".","1")

  return minefield;
  }
return "";
}
let mine = minesweeper(".*.**.\n....*.\n..*...")
console.log(mine)
Deno.test('Rempalcer les cases vide avec le numéro des bombes a coté *100', () => {
  assertEquals(mine, "1*.**.\n....*.\n..*...");
});
