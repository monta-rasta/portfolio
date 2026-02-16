import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, X, Cpu, Terminal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast({
        title: 'System Notification',
        description: 'Transmission received successfully. Initiating protocol...',
        className: "bg-slate-900 border-cyan-500 text-white"
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      toast({
        title: 'Validation Error',
        description: 'Required fields missing or invalid.',
        variant: 'destructive',
      });
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email Protocol', value: 'zidimonta@hotmail.fr', href: 'mailto:zidimonta@hotmail.fr' },
    { icon: Phone, label: 'Voice Link', value: '(+216) 55168554', href: 'tel:+21655168854' },
    { icon: MapPin, label: 'Base Location', value: 'Nabeul, Tunisia', href: null },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,24,39,0.9)_2px,transparent_2px),linear-gradient(90deg,rgba(17,24,39,0.9)_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-3xl"></div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-2">
             <Terminal className="w-8 h-8 text-cyan-400 mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Initiate <span className="text-[#00D9FF] animate-pulse">Connection</span>
          </h2>
          <p className="text-lg text-slate-400 font-mono">
            // Ready to deploy your next project?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-purple-600 rounded-full"></div>
              <h3 className="text-2xl font-bold text-white mb-6 pl-2">Communication Channels</h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 group p-4 rounded-xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                    <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(0,217,255,0.2)] transition-all">
                      <item.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-slate-200 hover:text-[#00D9FF] transition-colors text-lg font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-200 text-lg font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Digital Presence</h3>
              <div className="flex gap-4">


              {[
                { 
                  icon: Linkedin, 
                  label: 'LinkedIn', 
                  href: 'https://www.linkedin.com/in/montassar-zidi-141270238/' 
                },
                { 
                  icon: Github, 
                  label: 'GitHub', 
                  href: 'https://github.com/zidi-montassar' 
                },
                { 
                  icon: X,               
                  label: 'X',            
                  href: 'https://x.com/cris_monta' 
                }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 hover:border-[#B026FF] flex items-center justify-center transition-all duration-300 group hover:shadow-[0_0_15px_rgba(176,38,255,0.3)]"
                >
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))
              }


                
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative group">
              {/* Neon Glow Behind Form */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00D9FF] to-[#B026FF] rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-500"></div>
              
              <form onSubmit={handleSubmit} className="relative space-y-6 bg-slate-900/90 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      Identity
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="NAME_STRING"
                      className={`bg-slate-950/50 border-slate-700 text-slate-200 focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] placeholder:text-slate-600 font-mono transition-all ${errors.name ? 'border-red-500' : ''}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      Return Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="EMAIL_ADDRESS"
                      className={`bg-slate-950/50 border-slate-700 text-slate-200 focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] placeholder:text-slate-600 font-mono transition-all ${errors.email ? 'border-red-500' : ''}`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    Topic Header
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="SUBJECT_LINE"
                    className={`bg-slate-950/50 border-slate-700 text-slate-200 focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] placeholder:text-slate-600 font-mono transition-all ${errors.subject ? 'border-red-500' : ''}`}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    Data Payload
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="ENTER_MESSAGE_BODY..."
                    className={`min-h-[150px] bg-slate-950/50 border-slate-700 text-slate-200 focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] placeholder:text-slate-600 font-mono transition-all ${errors.message ? 'border-red-500' : ''}`}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#00D9FF] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold tracking-wide group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    TRANSMIT DATA
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;