import { assertEquals } from "jsr:@std/assert";

function minesweeper(minefield: string): string {

  if(minefield =="*"){
    minefield +="1"
    console.log(minefield)
    return minefield
  }
  return "";
}
let a = minesweeper("*")

Deno.test('Bombe (*)', () => {
  assertEquals(a, "*1");
});
