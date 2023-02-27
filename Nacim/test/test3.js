function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }

  const allStars = document.querySelectorAll (".fa-star");
  console.log("allStars", allStars);
  
  init();
  
  function init() {
      allStars.forEach(star => {
          star.addEventListener("click", getRating)
      })
  }
  
  function getRating(e) {
      console.log(e);
  }