import { motion } from 'framer-motion';
import FloatingParticles from '@/components/FloatingParticles';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingParticles />

      {/* Navigation (kept identical style) */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full z-50 glass border-b border-white/10 backdrop-blur-xl"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-primary">
            PadhaiDunia
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="/AboutUs" className="text-foreground hover:text-primary transition-colors">About Us</a>
            <a href="/#courses" className="text-foreground hover:text-primary transition-colors">Courses</a>
            <a href="/#team" className="text-foreground hover:text-primary transition-colors">Team</a>
            <a href="/contact" className="text-primary font-medium transition-colors">Contact Us</a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">Login</Button>
            <Button className="bg-primary hover:bg-primary-glow text-primary-foreground">Sign Up</Button>
          </div>
        </div>
      </motion.nav>

      {/* Header */}
      <section className="min-h-[40vh] flex items-center justify-center pt-24">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Have questions or need help? Send us a message and our team will get back to you shortly.
          </motion.p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-10">
          {/* Info cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">support@padhaidunia.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">+91 99999 99999</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">Silicon Valley, CA, USA</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 glass rounded-2xl p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-foreground">Name</Label>
                <Input id="name" placeholder="Your name" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" className="mt-2" />
              </div>
            </div>
            <div className="mt-6">
              <Label htmlFor="subject" className="text-foreground">Subject</Label>
              <Input id="subject" placeholder="How can we help?" className="mt-2" />
            </div>
            <div className="mt-6">
              <Label htmlFor="message" className="text-foreground">Message</Label>
              <Textarea id="message" placeholder="Write your message..." className="mt-2 min-h-[160px]" />
            </div>
            <div className="mt-8">
              <Button type="submit" className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg font-semibold hover-glow group">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer (reuse style) */}
      <footer className="glass border-t border-white/10 py-12 mt-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 PadhaiDunia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
