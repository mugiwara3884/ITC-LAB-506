// Declare an unsorted array
let unsortedArray = [5, 3, 8, 1, 2, 9, 4, 6, 7];
let sortedArray = [];

// Function to display the unsorted array
function displayUnsortedArray() {
    document.getElementById("unsortedArray").textContent = unsortedArray.join(", ");
}

// Function to display the sorted array (only after sorting)
function displaySortedArray() {
    document.getElementById("sortedArrayHeading").style.display = "block";
    document.getElementById("sortedArray").style.display = "block";
    document.getElementById("sortedArray").textContent = sortedArray.join(", ");
}

// Function to reshuffle the unsorted array and hide sorted array
function reshuffleArray() {
    for (let i = unsortedArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [unsortedArray[i], unsortedArray[j]] = [unsortedArray[j], unsortedArray[i]]; // Swap elements
    }

    // Hide sorted array when reshuffling
    document.getElementById("sortedArrayHeading").style.display = "none";
    document.getElementById("sortedArray").style.display = "none";

    displayUnsortedArray();
}

// Function to sort the unsorted array and display the sorted array
function sortArray() {
    sortedArray = [...unsortedArray].sort((a, b) => a - b); // Sort array in ascending order
    displaySortedArray();
}

// Event listeners for sort and reshuffle buttons
document.getElementById("sortButton").addEventListener("click", sortArray);
document.getElementById("reshuffleButton").addEventListener("click", reshuffleArray);

// Display the unsorted array when the page loads
displayUnsortedArray();
