function showDetails(name, date, desc, imgSrc) {
  const modal = document.getElementById("detailsModal");
  document.getElementById("modalPhoto").src = imgSrc;
  document.getElementById("modalName").textContent = name;
  document.getElementById("modalDate").textContent = "🎂 " + date;
  document.getElementById("modalDesc").textContent = desc;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("detailsModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("detailsModal");
  if (event.target === modal) modal.style.display = "none";
};