function darkmodetogle() {
  const wasDarkmode = localStorage.getItem('darkmode') === 'true';
  localStorage.setItem('darkmode', !wasDarkmode);
  const element = document.body;
  element.classList.toggle('dark-mode', !wasDarkmode);
}

function onload() {
  document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
  var elem = document.getElementById("drkmd");
  if (localStorage.getItem('darkmode') === 'true') elem.innerHTML = "☀️";
}
function darkmode(){
  var elem = document.getElementById("drkmd");
  if (localStorage.getItem('darkmode') === 'true') elem.innerHTML = "🌙";
  else elem.innerHTML = "☀️";darkmodetogle()
  }