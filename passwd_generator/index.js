
// window.onload = () => {
//     const rangeInput = document.getElementById('rangeInput');
//     rangeInput.value = 12; // Reset to 12 when the page loads
//   };


const copytext = () => {
    const copyText = document.querySelector('.generated');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}



const generatePassword = (length, hasUppercase, hasLowercase, hasNumbers, hasSymbols) => {
    let generatedPassword = '';
    const typesCount = hasUppercase + hasLowercase + hasNumbers + hasSymbols;
    if (typesCount === 0) {
        return "empty"
    }
    
    const numbers = '0123456789';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()_+{}":?><';

    let i = 0;
    while (i < length) {
        if (hasUppercase && i < length) {
            generatedPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
            i++;
        }
        if (hasLowercase && i < length) {
            generatedPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
            i++;
        }
        if (hasNumbers && i < length) {
            generatedPassword += numbers[Math.floor(Math.random() * numbers.length)];
            i++;
        }
        if (hasSymbols && i < length) {
            generatedPassword += symbols[Math.floor(Math.random() * symbols.length)];
            i++;
        }
    }
    return generatedPassword;
}

const random_pass = () => {
    const lengthValueSpan = document.querySelector('.length-value');
    const uppercase = document.querySelector('.uppercase');
    const lowercase = document.querySelector('.lowercase');
    const numbers = document.querySelector('.numbers');
    const symbols = document.querySelector('.symbols');
    const password = document.querySelector('.generated');
    // const generate = document.querySelector('.generate');

    if (lengthValueSpan && uppercase && lowercase && numbers && symbols && password) {
            const length = lengthValueSpan.textContent;
            const hasUppercase = uppercase.classList.contains('active');
            const hasLowercase = lowercase.classList.contains('active');
            const hasNumbers = numbers.classList.contains('active');
            const hasSymbols = symbols.classList.contains('active');

            password.value = generatePassword(length, hasUppercase, hasLowercase, hasNumbers, hasSymbols);
    }
}

const updateLength = () => {
    const lengthValue = document.querySelector('.range');
    const lengthValueSpan = document.querySelector('.length-value');
    const lengthSpan = document.querySelector('.length_span');

    if (lengthValue && lengthValueSpan) {
        lengthValueSpan.textContent = lengthValue.value;
        lengthSpan.textContent = lengthValue.value;
    }
}

const toggleSlider = () => {
    const slider = document.querySelector('.uppercase');
    slider.classList.toggle('active');
}

const toggleLowercase = () => {
    const slider = document.querySelector('.lowercase');
    slider.classList.toggle('active');
}

const toggleNumbers = () => {
    const slider = document.querySelector('.numbers');
    slider.classList.toggle('active');
    
}

const toggleSymbols = () => {
    const slider = document.querySelector('.symbols');
    slider.classList.toggle('active');
}

