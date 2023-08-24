document.addEventListener("DOMContentLoaded", function() {
    const customerNameInput = document.getElementById("customerName");
    const checkInDateInput = document.getElementById("checkInDate");
    const totalDaysInput = document.getElementById("totalDays");
    const totalPersonsInput = document.getElementById("totalPersons");
    const roomTypeSelect = document.getElementById("roomType");
    const amenitiesSelect = document.getElementById("amenities");
    const advanceAmountInput = document.getElementById("advanceAmount");
    const balanceInput = document.getElementById("balance");
    const totalRoomCostInput = document.getElementById("totalRoomCost");
    const totalAmenitiesCostInput = document.getElementById("totalAmenitiesCost");
    const totalCostInput = document.getElementById("totalCost");
    const extraPersonsInput = document.getElementById("extraPersons");
  
    function calculateTotal() {
      const roomRates = {
        deluxe: 2500,
        suite: 4000,
        ac: 1000,
        locker: 300
      };
  
      const selectedRoomType = roomTypeSelect.value;
      const selectedAmenities = Array.from(amenitiesSelect.selectedOptions, option => option.value);
      const totalDays = parseInt(totalDaysInput.value);
      const extraPersons = parseInt(extraPersonsInput.value);
  
      const roomCost = roomRates[selectedRoomType] * totalDays;
      const amenitiesCost = selectedAmenities.reduce((total, amenity) => total + roomRates[amenity] * totalDays, 0);
      const extraPersonsCost = extraPersons > 2 ? 1000 * (extraPersons - 2) * totalDays : 0;
  
      const totalRoomCost = roomCost + amenitiesCost;
      const totalCost = totalRoomCost + extraPersonsCost;
      const advanceAmount = parseFloat(advanceAmountInput.value);
  
      const balance = totalCost - advanceAmount;
  
      totalRoomCostInput.value = totalRoomCost.toFixed(2);
      totalAmenitiesCostInput.value = amenitiesCost.toFixed(2);
      totalCostInput.value = totalCost.toFixed(2);
      balanceInput.value = balance.toFixed(2);
    }
  
    advanceAmountInput.addEventListener("input", calculateTotal);
    extraPersonsInput.addEventListener("input", calculateTotal);
  });
  