const correctanswer = ["A", "A", "A", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctanswer[index]) {
      score += 25;
    }
  });
  result.classList.remove("d-none");
  scrollTo(0, 0);

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 25);
});

setTimeout(() => {
  alert("hello");
}, 3000); // This is a method on window object
`Methods or property like console,
   documents or alerts they are ultimately
    stored on window object`;
