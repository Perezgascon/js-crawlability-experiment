document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const content = document.getElementById("content");
    content.innerHTML = `
      <p><strong>Unique test sentence:</strong> This text was injected by JavaScript after a 5-second delay, so Google may render or index it less reliably or more slowly.</p>
    `;
  }, 5000);
});