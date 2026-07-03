import "./Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Sectiontitle from "../Sectiontitle/Sectiontitle";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("✅ Message sent successfully!");

        setForm({
          from_name: "",
          from_email: "",
          subject: "",
          message: "",
        });

        setLoading(false);
      })
    .catch((error) => {
  console.error("EMAILJS ERROR:", error);

  alert(
    `Failed!\n\nStatus: ${error.status}\n\nText: ${error.text}`
  );

  setLoading(false);
});
  };

  return (
    <section className="contact" id="contact">
      <Sectiontitle
        title="Contact Me"
        subtitle="Let's Connect"
      />

      <div className="contact-container">

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Let's Build Something Amazing 🚀</h2>

          <p>
            I'm always interested in discussing software engineering,
            AI, cloud technologies, and exciting opportunities.
            Feel free to connect with me.
          </p>

          <div className="info-item">
            <FaEnvelope />
            <span>dileepbyrisetti@gmail.com</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <span>Hyderabad, Telangana, India</span>
          </div>

          <div className="info-item">
            <FaLinkedin />
            <a
              href="https://linkedin.com/in/dileepbyrisetti"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/dileepbyrisetti
            </a>
          </div>

          <div className="info-item">
            <FaGithub />
            <a
              href="https://github.com/codewithdileep"
              target="_blank"
              rel="noreferrer"
            >
              github.com/codewithdileep
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={form.from_name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            value={form.from_email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            <FaPaperPlane />

            {loading ? "Sending..." : "Send Message"}
          </button>

        </motion.form>

      </div>
    </section>
  );
}

export default Contact;