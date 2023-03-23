console.clear();

//bookmark flip

const bookmark = document.querySelector('[data-js="bookmark"]');
const bookmarkIcon = document.querySelector("[data-js=bookmark-icon]");

if (bookmark) {
  bookmark.addEventListener("click", () => {
    const iconSource = bookmarkIcon.getAttribute("src");
    if (iconSource === "icons/bookmark_w.svg") {
      bookmarkIcon.setAttribute("src", "icons/bookmark_s.svg");
    } else {
      bookmarkIcon.setAttribute("src", "icons/bookmark_w.svg");
    }
  });
}

//Formular

const QUESTION_MAX_LENGTH = 5;
const ANSWER_MAX_LENGTH = 5;

const form = document.querySelector('[data-js="form"]');
const questionInput = document.querySelector('[data-js="question"]');
const answerInput = document.querySelector('[data-js="answer"]');
const labelInput = document.querySelector('[data-js="tag"]');
const submitButton = document.querySelector('[data-js="submit"]');

function isInputValid(name, maxLengt, formData) {
  const errorFeld = document.querySelector(`[js-data="${name}-error-hide"]`);

  if (formData[name].length <= maxLengt) {
    errorFeld.className = `${name}-error-hide`;
    return true;
  } else {
    errorFeld.className = `${name}-error-show`;
    return false;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const filldFormData = Object.fromEntries(formData);
  const isQuestionValid = isInputValid(
    "question",
    QUESTION_MAX_LENGTH,
    filldFormData
  );
  const isAnswerValid = isInputValid(
    "answer",
    ANSWER_MAX_LENGTH,
    filldFormData
  );
  if (isQuestionValid && isAnswerValid) {
    const questionOutput = document.querySelector(
      '[data-js="question-output"]'
    );
    questionOutput.textContent = filldFormData.question;

    const answerOutput = document.querySelector('[data-js="answer-output"]');
    answerOutput.textContent = filldFormData.answer;

    const tagOutput = document.querySelector('[data-js="tag-ouput"]');
    tagOutput.textContent = "#" + filldFormData.tag;
  }
  console.log("form", filldFormData);
});

const showAnswer = document.querySelector('[data-js="show-answer"]');

showAnswer.addEventListener("click", (event) => {
  event.preventDefault();

  const answerOutput = document.querySelector('[data-js="answer-output"]');
  answerOutput.className = "question-answer-show";

  console.log("showanswer", filldFormData);
});
