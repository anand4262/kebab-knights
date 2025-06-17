'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Icon } from '@iconify/react';

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current!, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setSuccess(true);
        formRef.current?.reset();
      })
      .catch(() => setSuccess(false))
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact-section" className="relative bg-[#fdfcfa] text-charcoal py-24 sm:py-36  px-4">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Contact Form */}
        <div>
          <h2 className="text-4xl font-extrabold text-primary mb-8">Get In Touch</h2>
          <p className="text-md text-gray-600 mb-6">
            Whether you're craving a kebab or have a question, we’re just a message away!
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={5}
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-black py-3 px-6 rounded-full font-semibold hover:bg-[#c99700] transition flex items-center gap-2"
            >
              {loading ? (
                <Icon icon="eos-icons:loading" className="animate-spin text-xl" />
              ) : (
                <>
                  Send Message
                  <Icon icon="tabler:send" className="text-xl" />
                </>
              )}
            </button>

            {success === true && <p className="text-green-600 font-medium">Message sent!</p>}
            {success === false && <p className="text-red-600 font-medium">Something went wrong.</p>}
          </form>
        </div>

        {/* Embedded Map */}
        <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-xl border">
          <iframe
            title="Kebab Knights Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.6955421948223!2d144.9632806756616!3d-37.814217979652074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f12fecd3%3A0x506f5b4b2b0d1b0!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1718430000000!5m2!1sen!2sau"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-none"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
