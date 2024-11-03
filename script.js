// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function sendEmail(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from the input fields
  const name = event.target.elements.name.value;
  const email = event.target.elements.email.value;
  const message = event.target.elements.message.value;

  // Define the recipient email address
  const recipient = "contact@manishacharya.name.np";

  // Construct the email subject and body
  const subject = `Contact Form Submission from ${name}`;
  const body = `Email: ${email}\nMessage: ${message}`;

  // Create a mailto link with the recipient's email address
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Redirect to the mail client
  window.location.href = mailtoLink;
}

const starContainer = document.querySelector(".stars");

for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = `${Math.random() * 100}vh`;
  star.style.right = `${Math.random() * 100}vw`;
  star.style.animationDelay = `${Math.random() * 3}s`;
  starContainer.appendChild(star);
}
