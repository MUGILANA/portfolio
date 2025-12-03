import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Send, Github, Linkedin, Mail, Phone } from 'lucide-react';
import mugilanPhoto from '@/assets/mugilan-photo.jpg';

const skills = [
  'Java',
  'Spring Boot',
  'SQL',
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'JDBC',
  'GitHub',
];

const techIcons = [
  { icon: '☕', label: 'Java', delay: 0 },
  { icon: '⚛️', label: 'React', delay: 0.5 },
  { icon: '🗄️', label: 'SQL', delay: 1 },
  { icon: '🌐', label: 'Web', delay: 1.5 },
];

const HeroSection = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const skill = skills[currentSkill];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < skill.length) {
            setDisplayText(skill.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(skill.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentSkill((prev) => (prev + 1) % skills.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentSkill]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      {/* Floating Tech Icons */}
      {techIcons.map((tech, index) => (
        <motion.div
          key={tech.label}
          className="absolute text-4xl opacity-20"
          style={{
            top: `${20 + index * 15}%`,
            left: index % 2 === 0 ? '10%' : '85%',
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5,
            delay: tech.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {tech.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-4 tracking-widest uppercase"
            >
              Welcome to my Portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat mb-6 leading-tight"
            >
              <span className="text-foreground">A. Mugilan</span>
              <br />
              <span className="text-gradient">Full Stack Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
            >
              Building scalable backend systems & high-performance web applications
            </motion.p>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-10 h-8"
            >
              <span className="text-primary font-mono text-xl">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <a href="/Mugilan_Resume.pdf" download className="btn-primary flex items-center justify-center gap-2">
                <Download size={18} />
                Download Resume
              </a>
              <a href="#contact" className="btn-outline flex items-center justify-center gap-2">
                <Send size={18} />
                Hire Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:mugilanmugi3414@gmail.com', label: 'Email' },
                { icon: Phone, href: 'tel:7826987567', label: 'Phone' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              {/* Outer Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, hsl(45, 80%, 55%), transparent)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />

              {/* Photo Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-full animate-spin-slow"
                  style={{
                    background: 'conic-gradient(from 0deg, hsl(45, 80%, 55%), transparent, hsl(45, 80%, 55%))',
                    padding: '4px',
                  }}
                />

                {/* Inner Container */}
                <div className="absolute inset-2 rounded-full overflow-hidden glass-card animate-glow-pulse">
                  <img
                    src={mugilanPhoto}
                    alt="A. Mugilan - Full Stack Developer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/50 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
