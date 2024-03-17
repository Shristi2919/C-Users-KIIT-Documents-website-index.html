document.addEventListener("DOMContentLoaded", function() {
    const fanSpeedSelect = document.getElementById("fanSpeed");
    const lightBrightnessRange = document.getElementById("lightBrightness");
    const fanSwitchCheckbox = document.getElementById("fanSwitch");
  
    // Event listener for fan speed change
    fanSpeedSelect.addEventListener("change", function() {
      const selectedSpeed = fanSpeedSelect.value;
      // Call API function to update fan speed
      updateFanSpeed(selectedSpeed);
    });
  
    // Event listener for light brightness change
    lightBrightnessRange.addEventListener("input", function() {
      const brightnessValue = lightBrightnessRange.value;
      // Call API function to adjust light brightness
      adjustLightBrightness(brightnessValue);
    });
  
    // Event listener for fan switch toggle
    fanSwitchCheckbox.addEventListener("change", function() {
      const isFanOn = fanSwitchCheckbox.checked;
      // Call API function to toggle fan on/off
      toggleFanSwitch(isFanOn);
    });
  
    // Function to update fan speed via API
    function updateFanSpeed(speed) {
      // Make API request to update fan speed
      // Example: fetch('/api/fan/speed', { method: 'POST', body: JSON.stringify({ speed }) });
    }
  
    // Function to adjust light brightness via API
    function adjustLightBrightness(brightness) {
      // Make API request to adjust light brightness
      // Example: fetch('/api/light/brightness', { method: 'POST', body: JSON.stringify({ brightness }) });
    }
  
    // Function to toggle fan switch via API
    function toggleFanSwitch(isOn) {
      // Make API request to toggle fan switch
      // Example: fetch('/api/fan/switch', { method: 'POST', body: JSON.stringify({ isOn }) });
    }
  });