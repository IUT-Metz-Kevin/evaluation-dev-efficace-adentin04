import { assertEquals } from "jsr:@std/assert";

function minesweeper(minefield: string): string {
  let compterBombe=0;
for(let i of minefield){
  if(minefield =="*"){
  compterBombe++

  
  }
  return String(compterBombe);
}return ""}
let mine = minesweeper(".*.**.\n....*.\n..*...")
console.log(mine)
Deno.test('Chercher Bombe dans un tableau (*)', () => {
  assertEquals(mine, "5");
});
