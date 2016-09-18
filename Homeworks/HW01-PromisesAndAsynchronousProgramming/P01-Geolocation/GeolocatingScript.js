/**
 * Created by Panglot on 18-Sep-16.
 */
(function Geolocator() {
    let GeolocationPromise = new Promise(function (resolve, reject) {
        return navigator.geolocation.getCurrentPosition(function (geo) {
            let currentLocation = {
                    lat: null,
                    lon: null
                },
                pos = geo.coords;
            currentLocation.lat = pos.latitude;
            currentLocation.lon = geo.coords.longitude;
            resolve(currentLocation);
        })
    });

    function loadMap(detectedLocation) {
        let loadingLocation = document.getElementById("loading-window"),
            googleApiLoadingLink = "https://maps.googleapis.com/maps/api/staticmap?center=" +
                detectedLocation.lat + "," + detectedLocation.lon
                + "&zoom=11&size=900x900&maptype=hybrid";
        loadingLocation.src = googleApiLoadingLink;
    }

    GeolocationPromise.then((loadMap));
})();