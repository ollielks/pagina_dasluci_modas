
function initMap() {
    const dasLuci = { lat: -22.9770914, lng: -49.8691722};
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 19,
      center: dasLuci,
    });
    const marker = new google.maps.Marker({
      position: dasLuci,
      map: map,
    });
  }
  
  window.initMap = initMap;