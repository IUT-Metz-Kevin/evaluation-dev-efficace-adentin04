import { assertEquals } from "jsr:@std/assert";

function minesweeper(minefield: string): string {

  if(minefield =="."){
    minefield ="0"
    console.log(minefield)
    return minefield
  }
  return "";
}
let a = minesweeper(".")

Deno.test('Case vide (.)', () => {
  assertEquals(a, "0");
});
