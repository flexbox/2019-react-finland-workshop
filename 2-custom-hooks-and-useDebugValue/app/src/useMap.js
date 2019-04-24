import { useRef, useEffect } from 'react';
import Leaflet from 'leaflet';

function useMap() {
  const mapElement = useRef(null);

  useEffect(() => {
    const map = Leaflet.map(mapElement.current).setView([51.505, -0.09], 13);

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }, []);

  return mapElement;
}

export default useMap;
