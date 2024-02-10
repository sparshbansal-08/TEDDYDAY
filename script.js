const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const mainImg = document.querySelector(".main-img");
const heartImg = document.querySelector(".heart-img");

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener("click", () => {
  question.innerHTML =
    "Shatakshi, What teddy will you accept, you are a teddy yourself :)";
  mainImg.style.display = "none";
  heartImg.style.display = "block";
});

noBtn.addEventListener("mouseover", () => {
  const i =
    Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const j =
    Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
  noBtn.style.left = i + "px";
  noBtn.style.top = j + "px";
});
