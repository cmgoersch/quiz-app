console.clear();

const bookmark = document.querySelector('[data-js="bookmark"]');
const bookmarkIcon = document.querySelector("[data-js=bookmark-icon]");

bookmark.addEventListener("click", () => {
  const iconSource = bookmarkIcon.getAttribute("src");
  if (iconSource === "icons/bookmark_w.svg") {
    bookmarkIcon.setAttribute("src", "icons/bookmark_s.svg");
  } else {
    bookmarkIcon.setAttribute("src", "icons/bookmark_w.svg");
  }
});
