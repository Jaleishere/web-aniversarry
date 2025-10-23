const correctPassword = "love123";

// Tampilkan login saat halaman dimuat
window.onload = function() {
  document.getElementById("loginScreen").style.display = "flex";
  document.getElementById("passwordInput").value = "";
};

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("errorMsg");

  if (input === correctPassword) {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("welcomeScreen").style.display = "flex";

    setTimeout(() => {
      document.getElementById("welcomeScreen").style.display = "none";
      document.getElementById("mainContent").style.display = "block";
    }, 2000);
  } else {
    error.style.display = "block";
  }
}

function showContent(id) {
  document.querySelectorAll(".content").forEach(el => el.style.display = "none");
  document.getElementById(id).style.display = "block";
  document.getElementById("mainTitle").style.display = "none";
}

function playSong(file) {
  const audio = document.getElementById("audioPlayer");
  audio.src = file;
  audio.play();
}
