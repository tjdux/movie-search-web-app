window.addEventListener("click", (e) => {
  explode(e.pageX, e.pageY);  // ✅ pageX, pageY로 바꿈
});


function explode(x, y) {
  for (let i = 0; i < 30; i++) {
    const div = document.createElement("div");
    div.classList.add("dot");
    document.body.appendChild(div);

    const size = 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    // 정확히 커서 중앙에 오도록 left, top을 직접 설정
    div.style.left = `${x - size / 2}px`;
    div.style.top = `${y - size / 2}px`;

    const dx = gsap.utils.random(-200, 200);
    const dy = gsap.utils.random(-200, 200);
    const duration = gsap.utils.random(0.6, 1.2);

    div.style.backgroundColor = gsap.utils.random(["#02f0ff", "#00ff89", "#ff0055"]);

    gsap.to(div, {
      x: dx,
      y: dy,
      scale: 0,
      opacity: 0,
      duration: duration,
      ease: "power2.out",
      onComplete: () => div.remove(),
    });
  }
}

