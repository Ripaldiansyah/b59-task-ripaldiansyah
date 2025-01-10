document.addEventListener("DOMContentLoaded", () => {
  const ratingFilterInputs = document.querySelectorAll(
    'input[name="rating-filter"]'
  );
  const allProjects = document.querySelectorAll(".card"); // Semua proyek yang ditampilkan

  function filterProjects(rating) {
    allProjects.forEach((project) => {
      const projectRating = parseInt(
        project.querySelector(".rates").dataset.rating
      );

      if (rating === 0 || projectRating === rating) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  }

  ratingFilterInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
      const selectedRating = parseInt(event.target.value);
      filterProjects(selectedRating);
    });
  });
  filterProjects(0);
});
