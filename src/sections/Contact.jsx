import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "../services/email";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await sendEmail(formRef);
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact"className="py-28 px-6 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Get In Touch
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Have an opportunity, project idea, or just want to connect?
          Feel free to reach out.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-[#0f172a] border border-gray-800 rounded-lg outline-none focus:border-blue-500"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-[#0f172a] border border-gray-800 rounded-lg outline-none focus:border-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 bg-[#0f172a] border border-gray-800 rounded-lg outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-center">
              Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;
