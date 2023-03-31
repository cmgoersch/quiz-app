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

const QUESTION_MAX_LENGTH = 150;
const ANSWER_MAX_LENGTH = 72;

const form = document.querySelector('[data-js="form"]');
const questionInput = document.querySelector('[data-js="question"]');
const answerInput = document.querySelector('[data-js="answer"]');
const labelInput = document.querySelector('[data-js="tag"]');
const submitButton = document.querySelector('[data-js="submit"]');
const questionErrorLength = document.querySelector(
  '[data-js="question-error-length"]'
);
const answerErrorLength = document.querySelector(
  '[data-js="answer-error-length"]'
);

function isInputValid(name, maxLength, formData) {
  if (formData[name].length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

questionInput.addEventListener("input", (event) => {
  //console.log(questionInput.value.length);
  const textLength = questionInput.value.length;
  // console.log(textLength);
  if (textLength < QUESTION_MAX_LENGTH) {
    questionErrorLength.textContent = `You have chosen ${questionInput.value.length} of ${QUESTION_MAX_LENGTH} letters!`;
  } else {
    questionErrorLength.textContent = `You have reached ${QUESTION_MAX_LENGTH} letters!`;
  }
});

answerInput.addEventListener("input", (event) => {
  const textLength = answerInput.value.length;

  if (textLength < ANSWER_MAX_LENGTH) {
    answerErrorLength.textContent = `You have chosen ${answerInput.value.length} of ${ANSWER_MAX_LENGTH} letters!`;
    answerErrorLength.classList.remove("red");
  } else {
    answerErrorLength.textContent = `You have reached ${ANSWER_MAX_LENGTH} letters!`;
    console.log("feilk");
    answerErrorLength.classList.add("red");
  }
});

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

  form.reset();
  titleInput.focus();
});

const showAnswer = document.querySelector('[data-js="show-answer"]');

showAnswer.addEventListener("click", (event) => {
  event.preventDefault();

  const answerOutput = document.querySelector('[data-js="answer-output"]');
  answerOutput.className = "question-answer-show";

  console.log("showanswer", filldFormData);
});
