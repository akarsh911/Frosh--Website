const translateX = document.querySelectorAll(".translateX");
const translateY = document.querySelectorAll(".translateY");
window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  translateX.forEach(element => {
    let speed = element.dataset.speed;
    element.style.transform = `translateX(${scroll * speed}px)`;
  })
  translateY.forEach(element => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  })
})

function loadMapScenario() {


  var map = new Microsoft.Maps.Map('#myMap', {
    credentials: 'Au3LSzanBLGwhJ0mu3GmwWd-L1UDsSk7iC5QMczU8NxRYIjWJYFBSEfcuE4NU3SI',
    center: new Microsoft.Maps.Location(30.3382, 76.3844), // set initial center of map
    zoom: 16
  });
  var locations = [
    { name: 'Main Auditorium', lat: 30.3395, lng: 76.3847 },
    { name: 'Academic Block', lat: 30.3382, lng: 76.3834 },
    { name: 'Central Library', lat: 30.3387, lng: 76.3829 },
    { name: 'Hostel K', lat: 30.3408, lng: 76.3866 },
    { name: 'Hostel Q', lat: 30.3398, lng: 76.3861 }
  ];
  locations.forEach(function (loc) {
    var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(loc.lat, loc.lng), { title: loc.name });
    map.entities.push(pushpin);
  });
}
