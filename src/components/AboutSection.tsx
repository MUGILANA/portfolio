import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Globe, Sparkles } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Clean Code', value: 'Best Practices' },
  { icon: Database, label: 'Backend', value: 'Scalable Systems' },
  { icon: Globe, label: 'Frontend', value: 'Interactive UI' },
  { icon: Sparkles, label: 'Quality', value: 'High Standards' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate developer crafting digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 md:p-10">
              <h3 className="text-2xl font-bold font-montserrat mb-6 text-gradient">
                Junior Web Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Experienced junior web developer skilled in front-end and back-end development, 
                with a strong foundation in building dynamic and responsive websites. Proficient 
                in delivering high-quality, maintainable code that meets both client and user needs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am passionate about problem-solving and creating elegant solutions to complex 
                challenges. My expertise spans across Java, SQL, React, and modern web technologies, 
                enabling me to build scalable backend systems and engaging user interfaces.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a keen eye for detail and commitment to best practices, I strive to deliver 
                exceptional digital experiences that make a lasting impact.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card-hover p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{item.label}</h4>
                <p className="text-sm text-muted-foreground">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
