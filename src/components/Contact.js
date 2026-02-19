import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import PageHeader from "./PageHeader";
import bannerThreeImg from "../assets/images/panner/3.jpeg";
const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: ["info@parsanagrochem.com"],
      color: "teal",
    },
    {
      icon: <MapPin size={24} />,
      title: "Headquarters",
      details: [
        "Plot No 145, Shah Industrial Estate -3, Near Kotambi Cricket Stadium, Halol-Vadodara Road.Kotambi-391510",
      ],
      color: "indigo",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        title="Get in Touch"
        subtitle="Our team of experts is ready to assist you with product inquiries, custom formulations, and global supply chain solutions."
        bgImage={bannerThreeImg}
      />

      <div className="container mx-auto px-6 py-20">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-${item.color}-50 text-${item.color}-600 group-hover:scale-110 transition-transform`}
              >
                {item.icon}
              </div>
              <h3 className="text-card mb-3">{item.title}</h3>
              {item.details.map((line, i) => (
                <p key={i} className="text-body text-sm">
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3 bg-white rounded-2xl shadow-xl p-8 border border-slate-100"
          >
            <h2 className="text-section mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-slate-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-slate-400"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-slate-400"
                    placeholder="Company Ltd"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white text-slate-600">
                    <option>Product Inquiry</option>
                    <option>Custom Formulation</option>
                    <option>Partnership Proposal</option>
                    <option>Technical Support</option>
                    <option>Regulatory Compliance</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-slate-400"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-lg hover:to-primary transition-all flex items-center justify-center gap-2 transform active:scale-95">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>

          {/* Map & Hours */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 text-center h-full">
              {/* Location Icon */}
              <MapPin className="mx-auto text-secondary mb-4" size={48} />

              <h2 className="text-2xl font-bold text-primary mb-4">
                PARSAN AGROCHEM
              </h2>

              <h3 className="font-semibold text-slate-900 mb-2">
                Corporate Address
              </h3>
              <p className="text-body mb-6">
                Plot No 145, Shah Industrial Estate -3, Near Kotambi Cricket
                Stadium, Halol-Vadodara Road.Kotambi-391510
              </p>

              <h3 className="font-semibold text-slate-900 mb-2">
                Registered Address
              </h3>
              <p className="text-body mb-8">
                A4/14A Shreeji Green BS Shreeji Highview Vadodara, Gujarat
                390019
              </p>

              {/* Email Icon */}
              <Mail className="mx-auto text-secondary mb-4" size={48} />

              <h3 className="text-xl font-semibold text-primary mb-4">Email</h3>

              <div className="space-y-1 text-body">
                <p>info@parsanagrochem.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
