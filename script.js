let selectedMovie = "";

function noButton() {
    alert("Извини, женушка ❤️\nЭто не входит в наши планы 😂");
}

function showMovies() {
    document.getElementById("invite-screen").classList.add("hidden");
    document.getElementById("movie-screen").classList.remove("hidden");
}

function selectMovie(button, movie) {
    selectedMovie = movie;

    let buttons = document.querySelectorAll("#movie-screen button");

    buttons.forEach(function(item) {
        item.classList.remove("selected");
    });

    button.classList.add("selected");

    document.getElementById("continue-button").classList.remove("hidden");
}

function customMovie() {
    let movie = prompt("Какой фильм хочешь посмотреть? ❤️");

    if (movie && movie.trim() !== "") {
        selectedMovie = movie.trim();

        let buttons = document.querySelectorAll("#movie-screen button");

        buttons.forEach(function(item) {
            item.classList.remove("selected");
        });

        document.getElementById("continue-button").classList.remove("hidden");
    }
}

function continueToTime() {
    document.getElementById("movie-screen").classList.add("hidden");
    document.getElementById("time-screen").classList.remove("hidden");

    document.getElementById("selected-movie").textContent =
        "Вы выбрали: " + selectedMovie + " ❤️";
}

function selectTime(time) {
    alert(
        "Отлично! ❤️\n\n" +
        "Фильм: " + selectedMovie + "\n" +
        "Время: " + time
    );
}