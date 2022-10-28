const letters = ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]; //change to array.split for input

setInterval(()=>{
  let lettersI = letters;
  for (let i = lettersI.length - 1; i > 0; i--) { //iterates through array, swaps values with a random index.
    const j = Math.floor(Math.random() * (i + 1));
    const temp = lettersI[i];
    lettersI[i] = lettersI[j];
    lettersI[j] = temp;
  }
  document.getElementById("hw").innerHTML = lettersI.join("");
  /*
    style = document.getElementById("Hello World").style;
    style.color = 
  */
  document.getElementById("hw").style.color = `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`;
  document.getElementById("hw").style["font-size"] = `${Math.floor(Math.random()*200)+50}px`;
}, 2000);








/*
  letters.map(() => {
    return
  });
  document.getElementById("Hello World").innerHTML = "changed!";
  document.getElementById("Hello World").style.color = `(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`;
*/


/*
  document.getElementById("Hello World").innerHTML = "changed!";
  document.getElementById("Hello World").style.color = `(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`;
*/