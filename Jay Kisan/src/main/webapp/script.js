window.onload = function () {
    const productId = getQueryParam('id');

    if (productId) {
        const productDiv = document.getElementById(productId);
        if (productDiv) {
            productDiv.classList.add('active-card');  // Add active card class
            productDiv.scrollIntoView({ behavior: 'smooth', inline: 'center' });

            // Optionally, remove the active class after a short delay
            setTimeout(() => {
                productDiv.classList.remove('active-card');
            }, 3000);  // Adjust the delay as needed
        }
    }
};

// Helper function to get query parameter
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


// For multilanguage support in perticular languages

function loadGoogleTranslate() {
    // document.querySelector('nav').style.marginTop = '38px';
    // Initialize the Google Translate Element with options
    new google.translate.TranslateElement(
        {
            pageLanguage: 'en', // Set the default language of the page
            includedLanguages: 'en,hi,mr', // Add languages you want to support (e.g., English, Spanish, French, German)
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE // This defines the layout of the Google Translate widget
        },
        'google_element' // ID of the element where the widget will be placed
    );
}

