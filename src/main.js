const hamBurger = document.querySelector("#hamBurger");
const menu = document.querySelector("#menu");
const hLinks = document.querySelectorAll("#hLink");


function openPopup(title, subtitle, description, image) {
  document.getElementById('popupTitle').innerText = title;
  document.getElementById('popupSubtitle').innerText = subtitle;
  document.getElementById('popupDescription').innerText = description;
  document.getElementById('popupImage').src = image;
  document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}


hamBurger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamBurger.classList.toggle("")
})

hLinks.forEach(link=>{
    link.addEventListener("click", ()=>{
        menu.class.toggle("hidden")
        hamBurger.classList.toggle("bg-white")
    })
});

// Visitor count logic
  let visitorCount = 0;
  function updateVisitorCount() {
    visitorCount++;
    document.getElementById('visitorCount').innerText = 'Visitors: ' + visitorCount;
  }
  updateVisitorCount();

  // Geolocation and ticker logic
  function updateTicker() {
    const tickerText = document.getElementById('tickerText');
    const date = new Date();
    const dateString = date.toLocaleString();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        tickerText.innerText = `Date: ${dateString} | Location: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
      });
    } else {
      tickerText.innerText = `Date: ${dateString} | Location: Not available`;
    }
  }
  updateTicker();