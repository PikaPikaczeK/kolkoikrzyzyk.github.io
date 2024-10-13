addEventListener("DOMContentLoaded", () => {
  const pola = document.querySelectorAll("div");
  const wynik = document.querySelector("#wynik");

  // Initialize scores
  let zwyciestwa_kolka = localStorage.getItem("Wynik_kółka");
  let zwyciestwa_krzyzyki = localStorage.getItem("Wynik_krzyżyki");

  if (zwyciestwa_kolka === null) zwyciestwa_kolka = 0;
  else zwyciestwa_kolka = parseInt(zwyciestwa_kolka);

  if (zwyciestwa_krzyzyki === null) zwyciestwa_krzyzyki = 0;
  else zwyciestwa_krzyzyki = parseInt(zwyciestwa_krzyzyki);

  // Update initial score display
  wynik.textContent = `${zwyciestwa_kolka} : ${zwyciestwa_krzyzyki}`;

  let tura = 0;

  pola.forEach((pole) => {
    pole.addEventListener("click", () => {
      if (!pole.classList.contains("niczyje")) {
        return;
      }
      pole.textContent = PostawZnak(tura, pole);
      pole.classList.remove("niczyje");
      tura++;

      // Check for win conditions for "X"
      if (
        (pola[0].textContent == "X" &&
          pola[1].textContent == "X" &&
          pola[2].textContent == "X") ||
        (pola[3].textContent == "X" &&
          pola[4].textContent == "X" &&
          pola[5].textContent == "X") ||
        (pola[6].textContent == "X" &&
          pola[7].textContent == "X" &&
          pola[8].textContent == "X") ||
        (pola[0].textContent == "X" &&
          pola[3].textContent == "X" &&
          pola[6].textContent == "X") ||
        (pola[1].textContent == "X" &&
          pola[4].textContent == "X" &&
          pola[7].textContent == "X") ||
        (pola[2].textContent == "X" &&
          pola[5].textContent == "X" &&
          pola[8].textContent == "X") ||
        (pola[0].textContent == "X" &&
          pola[4].textContent == "X" &&
          pola[8].textContent == "X") ||
        (pola[2].textContent == "X" &&
          pola[4].textContent == "X" &&
          pola[6].textContent == "X")
      ) {
        document.querySelector("p").textContent = "Krzyżyki wygrywają!";
        zwyciestwa_krzyzyki++;
        localStorage.setItem("Wynik_krzyżyki", zwyciestwa_krzyzyki);
        wynik.textContent = `${zwyciestwa_kolka} : ${zwyciestwa_krzyzyki}`;
        pola.forEach((element) => {
          element.classList.remove("niczyje");
        });
      }

      // Check for win conditions for "O"
      if (
        (pola[0].textContent == "O" &&
          pola[1].textContent == "O" &&
          pola[2].textContent == "O") ||
        (pola[3].textContent == "O" &&
          pola[4].textContent == "O" &&
          pola[5].textContent == "O") ||
        (pola[6].textContent == "O" &&
          pola[7].textContent == "O" &&
          pola[8].textContent == "O") ||
        (pola[0].textContent == "O" &&
          pola[3].textContent == "O" &&
          pola[6].textContent == "O") ||
        (pola[1].textContent == "O" &&
          pola[4].textContent == "O" &&
          pola[7].textContent == "O") ||
        (pola[2].textContent == "O" &&
          pola[5].textContent == "O" &&
          pola[8].textContent == "O") ||
        (pola[0].textContent == "O" &&
          pola[4].textContent == "O" &&
          pola[8].textContent == "O") ||
        (pola[2].textContent == "O" &&
          pola[4].textContent == "O" &&
          pola[6].textContent == "O")
      ) {
        document.querySelector("p").textContent = "Kółka wygrywają!";
        zwyciestwa_kolka++;
        localStorage.setItem("Wynik_kółka", zwyciestwa_kolka);
        wynik.textContent = `${zwyciestwa_kolka} : ${zwyciestwa_krzyzyki}`;
        pola.forEach((element) => {
          element.classList.remove("niczyje");
        });
      }
    });
  });
});

function PostawZnak(tura, obiekt) {
  if (tura % 2 == 0) {
    obiekt.classList.add("krzyzyk");
    return "X";
  }
  obiekt.classList.add("kolko");
  return "O";
}
