let scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#navbar-main' })

// Gallery function to launch Modal popup with Image
function showImage( event ) {
  console.log( event.target );
  const src = event.target.getAttribute("src");
  console.log( src );
  document.querySelector(".modal-img").src = src;
  document.querySelector(".modal-img").height = "400";
  document.querySelector(".modal-img").width = "400";
  const myModal = new bootstrap.Modal( document.getElementById( 'galleryModal' ) );
  myModal.show();
}

// Function to show different category images based on drop down value
function showGalleryCategoryImages() {

  if ( document.getElementById("gallerySelect").value == 1 ) {
    document.getElementById("Cardiovascular").style.display = "block";
    document.getElementById("Weights").style.display = "block";
  }
  else if ( document.getElementById("gallerySelect").value == 2 ) {
    document.getElementById("Weights").style.display = "none"
    document.getElementById("Cardiovascular").style.display = "block";
  }
  else {
    document.getElementById("Cardiovascular").style.display = "none"
    document.getElementById("Weights").style.display = "block";
  }
}

// Show alert after user clicks send form button
function messageSent() {
  document.getElementById("successEmail").style.display = "block";
}

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

function signUp() {
  alert("This would bring you to the sign up page");
}