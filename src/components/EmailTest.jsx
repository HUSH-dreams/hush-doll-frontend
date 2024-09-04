import React from 'react';
import emailjs from 'emailjs-com';

const EmailTest = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_d0k1ryo', 'template_ht27b7b', e.target, 'iUU36VO0dZ847gKpl')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="from_name" />
            <label>Email</label>
            <input type="email" name="from_email" />
            <label>Subject</label>
            <input type="text" name="from_text" />
            <label>Text</label>
            <input type="text" name="subject" />
            <label>Message</label>
            <textarea name="html_message" />
            <input type="submit" value="Send" />
        </form>
    );
};

export default EmailTest;