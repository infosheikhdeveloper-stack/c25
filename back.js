function createBackButton() {

  const btn = document.createElement("div");
  btn.className = "back-btn";

  btn.innerHTML = `<i class="fa-solid fa-arrow-left"></i>`;

  btn.onclick = () => {

    if (navigator.vibrate) {
      navigator.vibrate(50);
    }

    // REAL BACK (previous page)
    window.history.back();
  };

  document.body.appendChild(btn);
}