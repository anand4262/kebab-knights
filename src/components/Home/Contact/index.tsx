'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Add formatted time
    const now = new Date();
    const formattedTime = now.toLocaleString('en-AU', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZoneName: 'short',
    });

    const timeInput = formRef.current?.querySelector<HTMLInputElement>('#email-time-field');
    if (timeInput) timeInput.value = formattedTime;

     emailjs
      .sendForm(
        'service_nr388ku',
        'template_0xa1tlh',
        formRef.current!,
        'oNOd-vwpReqR-cRkC'
      )
      .then(() => {
        setSuccess(true);
        formRef.current?.reset();
      })
      .catch(() => setSuccess(false))
      .finally(() => {
        setLoading(false);
        setTimeout(() => setSuccess(null), 4000); // Hide notification after 4 sec
      });
  };

  return (
    <section
      id="contact-section"
      className="relative bg-[#fdfcfa] text-charcoal py-24 sm:py-36 px-4"
    >
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-primary mb-4">Get In Touch</h2>
          <p className="text-md text-gray-600 mb-6">
            Whether you're craving a kebab or have a question, we’re just a message away!
          </p>

          {/* Notification */}
          {success !== null && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`mb-6 px-4 py-3 rounded-xl border text-sm font-medium shadow ${
                success ? 'bg-green-100 text-green-800 border-green-300' : 'bg-red-100 text-red-800 border-red-300'
              }`}
            >
              {success
                ? '🎉 Message sent successfully! We’ll get back to you shortly.'
                : '⚠️ Something went wrong. Please try again later.'}
            </motion.div>
          )}

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
            {/* Hidden time field */}
            <input type="hidden" name="time" id="email-time-field" />

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
          </form>
        </motion.div>

        {/* Map and Business Hours */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Map */}
          <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-xl border">
            <iframe
              title="Kebab Knights Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1112.0950232782122!2d144.91579446639196!3d-37.78205021476035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65ddfe04dae0f%3A0xd303cb1f0ce7f34c!2sKebab%20Knights!5e0!3m2!1sen!2sau!4v1750416084368!5m2!1sen!2sau"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-none"
            ></iframe>
          </div>

          {/* Business Hours */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-primary mb-3">Business Hours</h3>
            <ul className="text-gray-700 space-y-2 text-sm sm:text-base leading-relaxed">
              <li><strong>Monday – Sunday:</strong> 11:00 AM – 2:00 AM (next day)</li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">
              We’re open late every night — perfect for midnight kebab cravings!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
