const searchInput = document.getElementById("search");
const glossaryList = document.getElementById("glossary-list");
const items = glossaryList.getElementsByTagName("li");

searchInput.addEventListener("keyup", function() {
  const searchTerm = searchInput.value.toLowerCase();

  for (let i = 0; i < items.length; i++) {
    const text = items[i].textContent.toLowerCase();
    items[i].style.display = text.includes(searchTerm) ? "" : "none";
  }
});
