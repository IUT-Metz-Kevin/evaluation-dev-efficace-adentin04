import { assertEquals } from "jsr:@std/assert";

function grille(){
      let point = ".";
       let bombe = "*"
      /*
     
      let tableau = [".",".","."]
      *//*
for(let i=0; i<3;i++){
console.log(point+point+point );
          for(let j=0;j<6;j++){

          }
}*/

if(bombe === "."){
return "1"
}
}
let testGrille = grille();
Deno.test('prémier test', () => {
  assertEquals(testGrille, "1");
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