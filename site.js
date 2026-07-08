const SEARCH_INDEX = [
  {
    title: "Test-Time Compute Changes What a Benchmark Means",
    url: "../posts/test-time-compute/",
    date: "July 7, 2026",
    summary:
      "Model capability is no longer a single score. It is closer to a budget function shaped by time, tokens, tools, and verification.",
    tags: "AI reasoning evaluation test-time compute budget benchmark",
    author: "ra_xxx"
  },
  {
    title: "Hidden Goals Are Not Directly Visible",
    url: "../posts/hidden-goal/",
    date: "July 6, 2026",
    summary:
      "A search, click, favorite, or cart event is not a person's goal. It is a trace that supports several possible explanations.",
    tags: "human model shopping hidden goal user intent",
    author: "ra_xxx"
  },
  {
    title: "A Benchmark Is a Value Statement",
    url: "../posts/benchmark-as-value-statement/",
    date: "July 5, 2026",
    summary:
      "A benchmark decides what behavior is rewarded, what errors are ignored, and what kind of system gets built.",
    tags: "benchmark evaluation agent safety",
    author: "ra_xxx"
  }
];

function resultTemplate(post) {
  return `
    <article class="post-summary">
      <h2><a href="${post.url}">${post.title}</a></h2>
      <p>${post.summary}</p>
      <p class="post-meta">Date: ${post.date} | Author: ${post.author}</p>
    </article>
  `;
}

function renderSearch(query = "") {
  const target = document.getElementById("searchResults");
  if (!target) return;

  const normalized = query.trim().toLowerCase();
  const results = normalized
    ? SEARCH_INDEX.filter((post) => {
        const haystack = `${post.title} ${post.summary} ${post.tags}`.toLowerCase();
        return haystack.includes(normalized);
      })
    : SEARCH_INDEX;

  target.innerHTML = results.length
    ? results.map(resultTemplate).join("")
    : `<p class="post-meta">No matching notes yet.</p>`;
}

const input = document.getElementById("searchInput");
if (input) {
  renderSearch();
  input.addEventListener("input", () => renderSearch(input.value));
}
