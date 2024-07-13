function loadScreen() {
  let numberHTML = 0;
  let numberHTML2 = 0;
  let check = false;
  let quotes = "";
  document.querySelectorAll(".button-numbers").forEach((number) => {
    number.addEventListener("click", () => {
      if (!check) {
        const number_selected = parseInt(number.innerText);
        numberHTML = numberHTML * 10 + number_selected;
        document.querySelector(".value").innerHTML = numberHTML;
      } else {
        const number_selected = parseInt(number.innerText);
        numberHTML2 = numberHTML2 * 10 + number_selected;
        document.querySelector(".value").innerHTML = numberHTML2;
      }
    });
  });
  document.getElementById("clear").addEventListener("click", () => {
    document.querySelector(".value").innerHTML = 0;
    numberHTML = 0;
    numberHTML2 = 0;
    check = false;
  });
  document.getElementById("plus").addEventListener("click", () => {
    check = true;
    quotes = document.getElementById("plus").innerText;
  });
  document.getElementById("equal").addEventListener("click", () => {
    try {
      if (check) {
        if (quotes === "+") {
          document.querySelector(".value").innerHTML = numberHTML + numberHTML2;
          numberHTML = numberHTML + numberHTML2;
          numberHTML2 = 0;
        }
        if (quotes === "-") {
          document.querySelector(".value").innerHTML = numberHTML - numberHTML2;
          numberHTML = numberHTML - numberHTML2;
          numberHTML2 = 0;
        }
        if (quotes === "X") {
          document.querySelector(".value").innerHTML = numberHTML * numberHTML2;
          numberHTML = numberHTML * numberHTML2;
          numberHTML2 = 0;
        }
        if (quotes === "%") {
          if (numberHTML / numberHTML2 === Infinity) throw new Error();
          document.querySelector(".value").innerHTML = numberHTML / numberHTML2;
          numberHTML = numberHTML / numberHTML2;
          numberHTML2 = 0;
        }
      }
    } catch (error) {
      document.querySelector(".value").innerHTML = "ERROR";
    }
  });
  document.getElementById("minus").addEventListener("click", () => {
    check = true;
    quotes = document.getElementById("minus").innerText;
  });
  document.getElementById("multiply").addEventListener("click", () => {
    check = true;
    quotes = document.getElementById("multiply").innerText;
  });
  document.getElementById("divide").addEventListener("click", () => {
    check = true;
    quotes = document.getElementById("divide").innerText;
  });
}
loadScreen();
