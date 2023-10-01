function toggleRat() {
	var x = document.getElementById("rate");
	if (x.style.display === "none") {
	x.style.display = "block";
	} else {
	x.style.display = "none";
	}
}
function toggleRevStruct() {
	var x = document.getElementById("struct");
	if (x.style.display === "none") {
	x.style.display = "block";
	} else {
	x.style.display = "none";
	}
}
function toggleRevs() {
	var x = document.getElementById("revs");
	if (x.style.display === "none") {
	x.style.display = "block";
	} else {
	x.style.display = "none";
	}
}
function sortByDateReadDesc() {
    const tilesContainer = document.querySelector('.tiles');
    const tiles = Array.from(tilesContainer.querySelectorAll('article'));
  
    tiles.sort((a, b) => {
      const dateA = new Date(a.getAttribute('date'));
      const dateB = new Date(b.getAttribute('date'));
  
      return dateB - dateA;
    });
  
    tilesContainer.innerHTML = '';
    tiles.forEach(tile => tilesContainer.appendChild(tile));
}
function sortByDateReadAsc() {
    const tilesContainer = document.querySelector('.tiles');
    const tiles = Array.from(tilesContainer.querySelectorAll('article'));
  
    tiles.sort((a, b) => {
      const dateA = new Date(a.getAttribute('date'));
      const dateB = new Date(b.getAttribute('date'));
  
      return dateA - dateB;
    });
  
    tilesContainer.innerHTML = '';
    tiles.forEach(tile => tilesContainer.appendChild(tile));
}
function sortByRatingDesc() {
    const tilesContainer = document.querySelector('.tiles');
    const tiles = Array.from(tilesContainer.querySelectorAll('article'));
  
    tiles.sort((a, b) => {
      const ratingA = parseInt(a.getAttribute('data-rating'));
      const ratingB = parseInt(b.getAttribute('data-rating'));
  
      return ratingB - ratingA;
    });
  
    tilesContainer.innerHTML = '';
    tiles.forEach(tile => tilesContainer.appendChild(tile));
}
function sortByRatingAsc() {
    const tilesContainer = document.querySelector('.tiles');
    const tiles = Array.from(tilesContainer.querySelectorAll('article'));
  
    tiles.sort((a, b) => {
      const ratingA = parseInt(a.getAttribute('data-rating'));
      const ratingB = parseInt(b.getAttribute('data-rating'));
  
      return ratingA - ratingB;
    });
  
    tilesContainer.innerHTML = '';
    tiles.forEach(tile => tilesContainer.appendChild(tile));
}
function sortByAlphabetAsc() {
    const tilesContainer = document.querySelector('.tiles');
    const tiles = Array.from(tilesContainer.querySelectorAll('article'));
  
    tiles.sort((a, b) => {
      const titleA = a.getAttribute('name').toLowerCase();
      const titleB = b.getAttribute('name').toLowerCase();
  
      return titleA.localeCompare(titleB);
    });
  
    tilesContainer.innerHTML = '';
    tiles.forEach(tile => tilesContainer.appendChild(tile));
}
function sortByAlphabetDesc() {
    const tilesContainer = document.querySelector('.tiles');
    const tiles = Array.from(tilesContainer.querySelectorAll('article'));
  
    tiles.sort((a, b) => {
      const titleA = a.getAttribute('name').toLowerCase();
      const titleB = b.getAttribute('name').toLowerCase();
  
      return titleB.localeCompare(titleA);
    });
  
    tilesContainer.innerHTML = '';
    tiles.forEach(tile => tilesContainer.appendChild(tile));
}
document.getElementById("sort-select").addEventListener('change', function() {
    const selectedValue = this.value;
    if (selectedValue === 'DateReadDesc') {
      sortByDateReadDesc();
    } else if (selectedValue === 'DateReadAsc') {
      sortByDateReadAsc();
    } else if (selectedValue === 'RatingDesc') {
      sortByRatingDesc();
    } else if (selectedValue === 'RatingAsc') {
      sortByRatingAsc();
    } else if (selectedValue === 'AlphabetAsc') {
      sortByAlphabetAsc();
    } else if (selectedValue === 'AlphabetDesc') {
      sortByAlphabetDesc();
    }
});
      