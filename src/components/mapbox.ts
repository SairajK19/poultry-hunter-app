import mapboxgl, { Map } from "mapbox-gl";
export function TestMap(container_id: string) {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2FpcmFqazE5IiwiYSI6ImNrc3hiMTkwcTBhdWQybnAyZnJjZmYybHkifQ.RaD2tnWTR8vjk4Q20zDTzQ";

  const mapBox = new mapboxgl.Map({
    container: container_id, // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: [15.583988, 73.792318], // starting position [lng, lat]
    zoom: 2, // starting zoom
  });
  return mapBox;
}