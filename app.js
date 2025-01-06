document.getElementById('generateOTP').addEventListener('click', function () {
    // Generate a 6-digit random OTP
    var otp = Math.floor(100000 + Math.random() * 900000);

    // Display OTP in popup with message
    document.getElementById('otpContent').textContent = 'State Bank of India: One Time Password for your payment is ' + otp + '. Do not share OTP with any other person.';
    document.getElementById('otpPopup').classList.add('show');

    // Store generated OTP for verification (optional)
    localStorage.setItem('otp', otp);

    // Hide payment form and display OTP verification form
    document.getElementById('paymentForm').style.display = 'none';
    document.getElementById('otpVerification').style.display = 'block';
});

document.getElementById('verifyOTP').addEventListener('click', function () {
    // Get user-entered OTP
    var enteredOTP = document.getElementById('otp').value;

    // Get stored OTP (optional)
    var storedOTP = localStorage.getItem('otp');

    // Verify entered OTP
    if (enteredOTP === storedOTP) {
        // Show payment confirmation
        document.getElementById('otpPopup').classList.remove('show');
        document.getElementById('otpVerification').style.display = 'none';
        document.getElementById('paymentConfirmation').style.display = 'block';
    } else {
        alert('Invalid OTP. Please try again.');
    }
});