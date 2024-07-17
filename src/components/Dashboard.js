import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [dosingData, setDosingData] = useState('Loading dosing data...');
  const [lightingData, setLightingData] = useState('Loading lighting data...');
  const [environmentData, setEnvironmentData] = useState('Loading environment data...');
  const [relayStatus, setRelayStatus] = useState('Relay status unknown');

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setDosingData('Dosing data updated');
      setLightingData('Lighting data updated');
      setEnvironmentData('Environment data updated');
    }, 1000);
  }, []);

  const toggleRelay = (state) => {
    setRelayStatus(`Relay is ${state.toUpperCase()}`);
  };

  return (
    <div>
      <h2>Dosing Data</h2>
      <p>{dosingData}</p>
      <button onClick={() => setDosingData('Dosing data refreshed')}>Refresh Dosing Data</button>

      <h2>Lighting Data</h2>
      <p>{lightingData}</p>
      <button onClick={() => setLightingData('Lighting data refreshed')}>Refresh Lighting Data</button>

      <h2>Environment Data</h2>
      <p>{environmentData}</p>
      <button onClick={() => setEnvironmentData('Environment data refreshed')}>Refresh Environment Data</button>

      <h2>Relay Control</h2>
      <p>{relayStatus}</p>
      <button onClick={() => toggleRelay('on')}>Turn Relay ON</button>
      <button onClick={() => toggleRelay('off')}>Turn Relay OFF</button>
    </div>
  );
}

export default Dashboard;
