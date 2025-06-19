
// Making Hidden Items Visible using JS 
document.getElementById("proj1").addEventListener("click", function () {
    toggleVisibility("article1");
  });

  document.getElementById("proj2").addEventListener("click", function () {
    toggleVisibility("article2");
  });

  document.getElementById("proj3").addEventListener("click", function () {
    toggleVisibility("article3");
  });

  function toggleVisibility(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }



  // Updating The time I started programming 
   const programmingStart = new Date("2017-01-01T00:30:00"); // YYYY-MM-DDTHH:MM:SS

  function updateSeconds() {
    const now = new Date();
    const secondsPassed = Math.floor((now - programmingStart) / 1000);
    document.getElementById("secondsCounter").textContent = secondsPassed.toLocaleString();
  }
  // Update immediately and then every second
  updateSeconds();
  setInterval(updateSeconds, 1000);