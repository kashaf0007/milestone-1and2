// Select the button and the skills section by their IDs
var toggleButton = document.getElementById('toggleButton');
var skillsSection = document.getElementById('skillsSection');
// Function to toggle visibility
function toggleSkills() {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
}
// Add event listener to the button
toggleButton.addEventListener('click', toggleSkills);
