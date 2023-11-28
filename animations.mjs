import cowsay from "cowsay";

export function animateWin() {
  console.log("\nCongratulations! You Win!");
  setTimeout(() => {
    console.log(
      cowsay.say({
        text: "Celebrate!",
        e: "oO",
        T: "U ",
      })
    );
    console.log("\n");
  }, 500);
}

export function animateDraw() {
  console.log("\nIt's a Draw!");
  setTimeout(() => {
    console.log(
      cowsay.say({
        text: "Draw!",
        e: "xX",
        T: "U ",
      })
    );
    console.log("\n");
  }, 500);
}

export function animateLose() {
  console.log("\nSorry, You Lose!");
  setTimeout(() => {
    console.log(
      cowsay.say({
        text: "Loser!",
        e: "xx",
        T: "U ",
      })
    );
    console.log("\n");
  }, 500);
}
