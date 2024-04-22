// Function to retrieve and display saved content from sessionStorage
function displaySavedContent(locationId, sessionStorageKey) {
  const savedContent = sessionStorage.getItem(sessionStorageKey);
  document.getElementById(locationId).innerHTML = savedContent;
}

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve and display saved content for each location
  displaySavedContent("savedLocation1", "location1");

  displaySavedContent("savedLocation2", "location2");

  displaySavedContent("savedLocation3", "location3");

  // Remove the "Save for Later" buttons from the loaded content
  document.querySelectorAll(".save-btn").forEach(function (button) {
    button.remove();
  });
});

// jQuery code to fade in the main title when the document is ready
$(document).ready(function () {
  // Title fade over 2 seconds
  $("#mainTitle").fadeIn(2000);
});
