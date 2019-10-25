const correctAnswer = ["A", "B", "B", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
form.addEventListener("submit", e => {
  e.preventDefault();

  //    create a score variable and a variable for user answers that targets the value they choose.
  let score = 0;
  const userAnsers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];

  // check the users answers by creating a forEach method that cycles through each answer and has a callback function to compare the index of the correct answers to the user answers
  userAnsers.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 25;
    }
  });

  // Score results show resuls by adding a new query selector to look inside the results of the span tag and change the content to refelect userScore
  scrollTo(0, 0);

  result.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

// creating animated score tally by using setInterval
