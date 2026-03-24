document.addEventListener("DOMContentLoaded", function () {
  const links = document.getElementById("links");
  links.innerHTML = `
    <ul>
      <li><a href="/js-crawlability-experiment/page-a.html">JS-added link to Page A</a></li>
      <li><a href="/js-crawlability-experiment/page-b.html">JS-added link to Page B</a></li>
      <li><a href="/js-crawlability-experiment/page-c.html">JS-added link to Page C</a></li>
    </ul>
    <p><strong>Unique test sentence:</strong> These internal links were inserted with JavaScript only.</p>
  `;
});