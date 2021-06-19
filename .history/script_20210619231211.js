function toast({ tittle = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");
    const autoRemoved = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoved);
      }
    };
    const icons = {
      success: "fas fa-check-circle",
      warning: "fas fa-exclamation-circle",
      error: "fas fa-exclamation-circle",
    };
    const icon = icons[type];
    toast.classList.add("toast", `toast--${type}`);
    const delay = (duration / 1000).toFixed(2);
    toast.style.animation = `animation: slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
    toast.innerHTML = `
      <div class="toast__icon">
        <i class="${icon}"></i>
      </div>
      <div class="toast__body">
        <h3 class="toast__title">${tittle}</h3>
        <p class="toast__msg">${message}</p>
      </div>
      <div class="toast__close">
        <i class="fas fa-times"></i>
      </div>
    `;
    main.appendChild(toast);
  }
}
toast({
  tittle: "Thành công",
  message: "Dòng này dài bình thường nè.",
  type: "success",
  duration: 3000,
});
function showSuccessToast() {
  toast({
    tittle: "Thành công",
    message: "Dòng này dài bình thường nè.",
    type: "success",
    duration: 3000,
  });
}
function showErrorToast() {
  toast({
    tittle: "Thất bại",
    message: "Dòng này dài bình thường nè.",
    type: "error",
    duration: 3000,
  });
}
