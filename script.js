let dice = document.getElementById("dice");
let advice1 = document.getElementById("advice1");
let span = document.getElementById("span");
function advicegenerator() {
  const apiUrl = "https://api.adviceslip.com/advice";
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("URL Do not work");
      }
      return response.json();
    })
    .then((data) => {
      const adviceId = data.slip.id;
      const adviceText = data.slip.advice;

      console.log(adviceId);
      console.log(adviceText);
      span.textContent = adviceId;
      advice1.textContent = '"' + adviceText + '"';
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

dice.addEventListener("click", advicegenerator);
