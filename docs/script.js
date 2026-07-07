// Scroll naar boven knop
const btn = document.createElement("button");
btn.innerText = "↑";
btn.id = "scrollTop";
document.body.appendChild(btn);

btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
});
