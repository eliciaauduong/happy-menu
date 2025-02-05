const lists = {
  appetisers: ["stretch break", "clean your space", "meal/outfit plan", "play your favourite song", "gratitude journal", "breathing techniques", "get some sunlight"],
  mains: ["watch a comfort show/movie", "do your nails", "create a journal entry", "make a playlist", "go for a walk with a view", "read a book", "build lego", "make some charms"],
  sides: ["listen to a podcast", "light a candle", "put on a face mask", "listen to a playlist", "call a friend", "watch ambience streams"],
  desserts: ["book a trip", "go see a play/concert", "have a spa day", "visit a museum/art gallery"],
};

const selectedItems = new Set();
const finalSelectionList = document.getElementById("finalSelection");

function createListItems(listElement, items) {
    items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<p>${item}</p> <img class="fav-icon" src="images/star.svg">`;
        
        li.addEventListener("click", function () {
          const star = li.querySelector(".fav-icon");
          
          if (selectedItems.has(item)) {
                selectedItems.delete(item);
                star.style.display = "none";
              } else {
                selectedItems.add(item);
                star.style.display = "inline";
            }
            updateFinalSelection();
            console.log(finalSelectionList);
          });
          
          listElement.appendChild(li);
        });
}

function updateFinalSelection() {
  finalSelectionList.innerHTML = "";
  selectedItems.forEach(item => {
    const li = document.createElement("li");
      li.innerHTML = `<img class="my-fav-icon" src="images/star.svg"> <p>${item}</p>`;
    // li.textContent = item;
      finalSelectionList.appendChild(li);
    });
}

document.querySelectorAll(".menu-list").forEach(ul => {
    const listKey = ul.getAttribute("data-list");
    createListItems(ul, lists[listKey]);
});

document.querySelectorAll('.menu-title').forEach(column => {
  column.addEventListener('click', function () {
      let hiddenSection = this.nextElementSibling;
      let icon = this.querySelector('.expand-icon');

      if (hiddenSection.style.maxHeight) {
          hiddenSection.style.maxHeight = null;
          hiddenSection.style.padding = "0 10px";
          icon.src = "images/add.svg";
      } else {
          hiddenSection.style.maxHeight = hiddenSection.scrollHeight + "px";
          hiddenSection.style.padding = "10px";
          icon.src = "images/minus.svg";
      }
  });
});
