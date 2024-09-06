document.getElementById("copyButton").addEventListener("click", function () {
  const email = "kenny123654@msn.cn";
  const el = document.createElement("textarea");
  el.value = email;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  const popup = document.getElementById("popup");
  if (
    popup.classList.contains("fade-in") ||
    popup.classList.contains("fade-out")
  ) {
    popup.classList.remove("fade-in", "fade-out");
  }
  setTimeout(() => {
    popup.classList.add("fade-in");
    setTimeout(() => {
      popup.classList.remove("fade-in");
      popup.classList.add("fade-out");
    }, 1000);
  }, 10);
});
