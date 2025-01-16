document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq__subtitle");
    const answer = item.querySelector(".faq__answer");

    if (button && answer) {
      answer.style.height = "0";
      answer.style.transform = "scaleY(0)";

      button.addEventListener("click", () => {
        const isActive = answer.classList.contains("active");

        if (isActive) {
          closeAnswer(answer);
        } else {
          openAnswer(answer);
        }

        answer.classList.toggle("active", !isActive);
        button.classList.toggle("active", !isActive);
      });
    }
  });

  function openAnswer(answer) {
    const fullHeight = answer.scrollHeight;
    answer.style.transition = "none";
    answer.style.height = "auto";
    requestAnimationFrame(() => {
      answer.style.transition = "transform 0.5s ease, padding 0.5s ease";
      answer.style.transform = "scaleY(1)";
    });
  }

  function closeAnswer(answer) {
    answer.style.transition = "transform 0.5s ease, padding 0.5s ease";
    answer.style.transform = "scaleY(0)";
  }
});
