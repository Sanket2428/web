

// for scolling the website and better performance
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

window.onload = function () {
    const productId = getQueryParam('id');

    if (productId) {
        const productDiv = document.getElementById(productId);
        if (productDiv) {
            productDiv.style.paddingTop = '72px';
            productDiv.scrollIntoView({ behavior: 'auto' });
        }
    }
};

// For multilanguage support in perticular languages

function loadGoogleTranslate() {
    // Initialize the Google Translate Element with options
    new google.translate.TranslateElement(
        {
            pageLanguage: 'en', // Set the default language of the page
            includedLanguages: 'en,hi,mr', // Add languages you want to support (e.g., English, Spanish, French, German)
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE // This defines the layout of the Google Translate widget
        },
        'google_element' // ID of the element where the widget will be placed
    );
    // document.querySelector("nav.google_element").style.paddingBottom = 10px;
}


// contact form validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name1').value;
    const email = document.getElementById('email1').value;
    const number = document.getElementById('number1').value;
    const message = document.getElementById('message1').value;

    let errorMsg = document.getElementById('errorMsg');
    let successMessages = document.getElementById('successMsg');

    errorMsg.innerHtml = '';
    let hasError = false;
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        errorMsg.innerHtml += "Please enter a valid email address";
    }
    if (!hasError) {
        successMessages.innerHTML += 'Form submitted successfully!<br>';
        form.submit();
    }
});
