document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();  // Form ka default submit behavior disable karega

    // Form data collect karo
    let formData = {
        name: document.querySelector('[name="name"]').value,
        email: document.querySelector('[name="email"]').value,
        website: document.querySelector('[name="website"]').value,
        message: document.querySelector('[name="message"]').value
    };

    // Fetch API se FormSubmit ko data send karo
    fetch("https://formsubmit.co/ajax/s.harshjangir@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("✅ Message Sent Successfully!");
            document.getElementById("contactForm").reset(); // Form reset karega
        } else {
            alert("❌ Failed to send message!");
        }
    })
    .catch(error => {
        alert("❌ Error sending message!");
        console.error("Error:", error);
    });
});
