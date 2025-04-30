// Get references to HTML elements
const equipmentForm = document.getElementById('equipment-form');
const equipmentNameInput = document.getElementById('equipment-name');
const equipmentConditionInput = document.getElementById('equipment-condition');
const equipmentImageInput = document.getElementById('equipment-image');
const equipmentList = document.getElementById('equipment-items');

// Event listener for form submission
equipmentForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const equipmentName = equipmentNameInput.value;
  const equipmentCondition = equipmentConditionInput.value;
  const equipmentImage = equipmentImageInput.files[0]; // This will be handled later with AWS S3

  // Create a list item for the equipment
  const equipmentItem = document.createElement('li');
  equipmentItem.innerHTML = `
    <strong>${equipmentName}</strong> - ${equipmentCondition}<br>
    <img src="${URL.createObjectURL(equipmentImage)}" alt="${equipmentName}" width="100">
  `;

  // Append to the equipment list
  equipmentList.appendChild(equipmentItem);

  // Reset form fields
  equipmentForm.reset();
});
