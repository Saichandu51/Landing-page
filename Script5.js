
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const phone = form.elements.phone.value;
        const membership = form.elements.membership.value;

      
        const message = `Registration Details:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMembership: ${membership}`;
        alert(message);

    
        form.reset();
    });
});
