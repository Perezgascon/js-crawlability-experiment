document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("content");
  content.innerHTML = `
    <p><strong>Unique test sentence:</strong> This text was injected by JavaScript immediately after page load, so it is not present in the raw HTML.</p>
  `;
});