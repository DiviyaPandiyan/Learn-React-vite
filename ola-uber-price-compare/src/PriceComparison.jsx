import React, { useEffect, useState } from 'react';
import { fetchOlaPrice } from './olaService';
import { fetchUberPrice } from './uberService';

const PriceComparison = () => {
  const [olaPrice, setOlaPrice] = useState(null);
  const [uberPrice, setUberPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const params = {
        start_latitude: '28.7041', // Replace with actual coordinates
        start_longitude: '77.1025', // Replace with actual coordinates
        end_latitude: '28.5355', // Replace with actual coordinates
        end_longitude: '77.3910', // Replace with actual coordinates
      };

      const olaData = await fetchOlaPrice(params);
      const uberData = await fetchUberPrice(params);

      if (olaData) {
        setOlaPrice(olaData.price); // Adjust according to API response structure
      }
      if (uberData) {
        setUberPrice(uberData.price); // Adjust according to API response structure
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Price Comparison</h1>
      <div>
        <h2>Ola</h2>
        {olaPrice !== null ? <p>Price: ₹{olaPrice}</p> : <p>Loading...</p>}
      </div>
      <div>
        <h2>Uber</h2>
        {uberPrice !== null ? <p>Price: ₹{uberPrice}</p> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default PriceComparison;
