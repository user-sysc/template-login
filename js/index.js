const user = JSON.parse(localStorage.getItem("login_success")) || false;
if (!user) {
  window.location.href = "pages/login.html";
}

const logout = document.querySelector("#logout");

logout.addEventListener("click", () => {
  alert("Hasta pronto!");
  alert("Los que se van!");
  alert("Nospirin junior!");
  alert("Saliendo el sol!");
  localStorage.removeItem("login_success");
  window.location.href = "pages/login.html";
});
