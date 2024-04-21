const loadindg = document.getElementById("loading");
let progress = document.getElementById("progress");
let count = 0;
let loadcount = document.getElementById("loadcount");
let loaded = false;
const intervale = setInterval(() => {
  if (count < 101) {
    loadcount.textContent = count++;
    progress.style.width = count++ + "%";
  } else if (loaded) {
    loading.style.opacity = 0;
    clearInterval(intervale);
    setTimeout(() => {
      loading.style.display = "none";
    }, 450);
    window.location.href='index.html'
  }
}, 200);
window.addEventListener("load", () => {
  loaded = true;
});
