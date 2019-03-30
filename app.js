function disabled(id, firstTimeoutValue, secondTimeoutValue) {
  setTimeout(() => {
    document.getElementById(id).disabled = true;
  }, firstTimeoutValue);
  setTimeout(() => {
    document.getElementById(id).disabled = false;
  }, secondTimeoutValue);
}

function myFunction(e) {
  if (e.keyCode === 69) {
    let harpsichord = document.getElementById('harpsichord');
    harpsichord.play();
    disabled('harpsichord-button', 1, 12000);
  }
  if (e.keyCode === 87) {
    let choir = document.getElementById('choir');
    choir.play();
    disabled('choir-button', 1, 2300);
  }
}

document.getElementById('choir-button').onclick = function() {
  document.getElementById('choir').play();
  disabled('choir-button', 1, 2300);
};

document.getElementById('harpsichord-button').onclick = function() {
  document.getElementById('harpsichord').play();
  disabled('harpsichord-button', 1, 12000);
};
