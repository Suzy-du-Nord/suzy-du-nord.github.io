let defaultTopicSelection = 1

// alert("hehe");
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

window.addEventListener("load", function() {
    const form = document.getElementById('form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        // We just need to stay on the same page :)
        document.getElementById("form-message").innerText = "Thanks for your interest!";
        alert("Success!");
      })
    });
  });

function setup() {
    for (i = 1; i <= 4; i++) {
        document.getElementById("profile-topic-" + i).style = "cursor: pointer";
    }
}

function changeTopic(selection) {
    for (i = 1; i <= 4; i++) {
        document.getElementById("profile-topic-" + i).style = "text-decoration: none";
        document.getElementById("profile-topic-" + i).style = "cursor: pointer";
        document.getElementById("profile-topic-content-" + i).style = "display: none";
    }

    if (selection != 0) {
        document.getElementById("profile-topic-" + selection).style = "text-decoration: underline; cursor: pointer;";
        document.getElementById("profile-topic-content-" + selection).style = "display: ''";
    }
}

setup();
// changeTopic(1);