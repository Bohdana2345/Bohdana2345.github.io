let watchID = null;
let map;
let markers = [];

const ourCoords = { lat: 48.943888180678925, lng: 24.73222456145915 };

document.addEventListener('DOMContentLoaded', getMyLocation);

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation, displayError);
        
        let watchButton = document.getElementById('watch');
        watchButton.addEventListener('click', watchLocation);
        
        let clearWatchButton = document.getElementById('clearWatch');
        clearWatchButton.addEventListener('click', clearWatch);
    } else {
        alert('Oops, no geolocation support');
    }
}

function displayLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let accuracy = position.coords.accuracy;
    let timestamp = new Date(position.timestamp).toLocaleString();

    let div = document.getElementById('location');
    div.innerHTML = `You are at Latitude: ${latitude}, Longitude: ${longitude}`;
    div.innerHTML += ` (with ${accuracy} meters accuracy)`;

    let km = computerDistance(position.coords, ourCoords);
    let distance = document.getElementById('distance');
    distance.innerHTML = `You are ${km.toFixed(2)} km from the college`;

    const currentPosition = { lat: latitude, lng: longitude };
    addMarker(
        currentPosition, 
        `You are here: ${latitude}, ${longitude} <br> Date: ${timestamp}`
    );
    map.setCenter(currentPosition);
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
    });
}

function displayError(error) {
    const errorTypes = {
        0: 'Unknown error',
        1: 'Permission denied by user',
        2: 'Position is not available',
        3: 'Request timed out'
    };
    let errorMessage = errorTypes[error.code] || "Unknown error";
    let div = document.getElementById('location');
    div.innerHTML = errorMessage;
}

function computerDistance(startCoords, destCoords) {
    let startLatRads = degreesToRadians(startCoords.latitude);
    let startLongRads = degreesToRadians(startCoords.longitude);
    let destLatRads = degreesToRadians(destCoords.lat);
    let destLongRads = degreesToRadians(destCoords.lng);
    let Radius = 6371;  

    let distance = Math.acos(
        Math.sin(startLatRads) * Math.sin(destLatRads) +
        Math.cos(startLatRads) * Math.cos(destLatRads) *
        Math.cos(startLongRads - destLongRads)
    ) * Radius;

    return distance;
}

function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}

function watchLocation() {
    console.log("Started watching location");
    watchID = navigator.geolocation.watchPosition(displayLocation, displayError);
}

function clearWatch() {
    if (watchID) {
        console.log("Stopped watching location");
        navigator.geolocation.clearWatch(watchID);
        watchID = null;
    }
}

function addMarker(coords, content) {
    const marker = new google.maps.Marker({
        position: coords,
        map: map,
    });

    const infoWindow = new google.maps.InfoWindow({
        content: `<div class="info-window"><p>${content}</p></div>`,
    });

    marker.addListener("click", function() {
        infoWindow.open(map, marker);
    });

    markers.push(marker);
}

document.getElementById('scrollButton').onclick = function() {
    const lat = parseFloat(document.getElementById('latInput').value);
    const lng = parseFloat(document.getElementById('lngInput').value);

    if (!isNaN(lat) && !isNaN(lng)) {
        const destinationCoords = { lat, lng };
        map.setCenter(destinationCoords);
        addMarker(destinationCoords, `Destination: ${lat}, ${lng}`);
    } else {
        alert('Enter valid coordinates!👄!👄!👄');
    }
};
