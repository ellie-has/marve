document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function showRegistrationForm() {
    document.getElementById('registrationForm').style.display = 'block';
    document.getElementById('registrationForm').scrollIntoView({behavior: 'smooth'});
}

function submitForm(event) {
    event.preventDefault();
    alert('הטופס נשלח בהצלחה!');
    document.getElementById('registrationForm').style.display = 'none';
}
