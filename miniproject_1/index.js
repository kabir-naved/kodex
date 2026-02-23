const movieBox = document.querySelector(".movieDiv");
const search = document.querySelector("input");
const pages = document.querySelectorAll(
  ".moviePage button:not(#prevPage, #nextPage)",
);
const prev = document.getElementById("prevPage");
const next = document.getElementById("nextPage");

let page = 1;
let timer;

async function loadMovies(q = "", p = 1) {
  const base = "https://api.themoviedb.org/3/";
  const key = "api_key=04c35731a5ee918f014970082a0088b1";
  const img = "https://image.tmdb.org/t/p/w1280";

  let url;

  if (q) {
    url = `${base}search/movie?${key}&query=${q}&page=${p}`;
  } else {
    url = `${base}discover/movie?sort_by=popularity.desc&${key}&page=${p}`;
  }

  try {
    const res = await fetch(url);
    const data = await res.json();

    movieBox.innerHTML = "";

    data.results.forEach((movie) => {
      if (!movie.poster_path) return;

      movieBox.innerHTML += `
        <div class="movieItems">
          <img src="${img + movie.poster_path}">
          <div>
            <h3>${movie.original_title} ${movie.release_date ? `(${movie.release_date.slice(0, 4)})` : ""}</h3>
          </div>
        </div>
      `;
    });

    page = p;

    prev.style.display = page > 1 ? "inline-block" : "none";
    next.disabled = page >= data.total_pages;
  } catch (err) {
    console.log("something broke", err);
  }
}

/* number buttons */
pages.forEach((btn) => {
  btn.onclick = () => {
    loadMovies(search.value, Number(btn.textContent));
  };
});

/* prev */
prev.onclick = () => {
  if (page > 1) loadMovies(search.value, page - 1);
};

/* next */
next.onclick = () => {
  loadMovies(search.value, page + 1);
};

/* search */
search.addEventListener("keyup", () => {
  clearTimeout(timer);

  timer = setTimeout(() => {
    page = 1;
    loadMovies(search.value.trim(), 1);
  }, 350);
});

/* first load */
loadMovies();

const scrollBtn = document.getElementById("scrollBtn");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;

  /* show after 50px */
  if (scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }

 
  if (scrollTop + windowHeight >= pageHeight - 5) {
    scrollBtn.textContent = "⬆️";
    scrollBtn.dataset.mode = "up";
  } else {
    scrollBtn.textContent = "⬇️";
    scrollBtn.dataset.mode = "down";
  }
});


scrollBtn.addEventListener("click", () => {
  if (scrollBtn.dataset.mode === "up") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }
});