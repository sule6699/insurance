function toggleMenu() {
    document.querySelector(".mobile-menu").classList.toggle("active");
}

let currentIndex = 0;
const slides = document.querySelectorAll('.image-slide');
const totalSlides = slides.length;

function changeImage() {
    slides.forEach((slide, index) => {
        slide.style.opacity = 0; // Hide all images
    });
    
    // Show the current image
    slides[currentIndex].style.opacity = 1;
    
    // Update the index to show the next image
    currentIndex = (currentIndex + 1) % totalSlides;
}

// Change image every 3 seconds
setInterval(changeImage, 3000); 

// Initial image display
changeImage();



const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail', // You can use another email service
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-password'
        }
    });

    let mailOptions = {
        from: email,
        to: 'your-email@example.com',
        subject: 'New Message from Contact Form',
        html: `<h2>New Message from ${name}</h2>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong><br>${message}</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.send('Error sending message');
        }
        res.send('Message sent successfully');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
