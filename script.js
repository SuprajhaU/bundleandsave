function toggleOptions() {
    // Get all bundle divs
    const bundles = document.querySelectorAll('.bundle');

    // Remove the 'selected' class from all bundles
    bundles.forEach(bundle => {
        bundle.classList.remove('selected');
    });

    // Find the selected radio button
    const selectedRadio = document.querySelector('input[name="bundle"]:checked');

    if (selectedRadio) {
        // Add the 'selected' class to the parent '.bundle' of the checked radio
        const selectedBundle = selectedRadio.closest('.bundle');
        selectedBundle.classList.add('selected');
    }

    // Hide all options dropdowns initially
    document.getElementById('options1').style.display = 'none';
    document.getElementById('options2').style.display = 'none';
    document.getElementById('options3').style.display = 'none';

    // Show the corresponding options dropdown based on the selected radio button
    const selectedOption = `options${selectedRadio.value}`;
    document.getElementById(selectedOption).style.display = 'block';
}
