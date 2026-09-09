/*
  Password gate for the Week 3 dashboard.

  This is a soft, client-side deterrent, not real access control: because
  this repo is public, PASSWORD below is visible to anyone who reads the
  source. It's meant to keep the page from showing up unannounced to
  search engines or random visitors, not to protect sensitive content.
  Don't put anything here you wouldn't want a determined stranger to see.
*/
(function () {
  var PASSWORD = "Modeling!";
  var STORAGE_KEY = "week3-dashboard-unlocked";

  var gate = document.getElementById("gate");
  var content = document.getElementById("content");
  var input = document.getElementById("gate-input");
  var submit = document.getElementById("gate-submit");
  var error = document.getElementById("gate-error");

  function unlock() {
    gate.classList.add("hidden");
    content.classList.add("visible");
  }

  try {
    if (sessionStorage.getItem(STORAGE_KEY) === "yes") {
      unlock();
    }
  } catch (e) {
    // sessionStorage unavailable (private browsing, blocked storage, etc.)
    // — the gate just asks again next time, which is fine.
  }

  function tryUnlock() {
    if (input.value === PASSWORD) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "yes");
      } catch (e) {}
      unlock();
    } else {
      error.textContent = "Incorrect password — try again.";
      input.value = "";
      input.focus();
    }
  }

  submit.addEventListener("click", tryUnlock);
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") tryUnlock();
  });
  input.focus();
})();
