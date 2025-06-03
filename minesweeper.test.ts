import { assertEquals } from "jsr:@std/assert";

function grille(){
  let points = "."
  if(points === "."){
    points = "0"
    console.log(points) 
    return points;
  }
}
let testGrille = grille();
Deno.test('blabla', () => {
  assertEquals(testGrille, "0");
});

// class minesweeper{
//     constructor(){}

//     grille(){
//         for(let i=0; i<3;i++){
//             let point = "."
      
//               console.log(".");
//               if(point === ".")
//               {
//                 console.log(0);
//               }
//         }
//         for(let i=0;i<3;i++)
//     }
    
// }
// let a = new minesweeper()
// a.grille()