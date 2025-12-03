import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const skills = [
  { name: 'Java', level: 90, category: 'Languages' },
  { name: 'SQL', level: 85, category: 'Languages' },
  { name: 'JavaScript', level: 80, category: 'Languages' },
  { name: 'HTML5', level: 95, category: 'Web' },
  { name: 'CSS3', level: 90, category: 'Web' },
  { name: 'React', level: 80, category: 'Web' },
  { name: 'Spring Boot', level: 75, category: 'Frameworks' },
  { name: 'JDBC', level: 85, category: 'Frameworks' },
  { name: 'Servlet', level: 80, category: 'Frameworks' },
  { name: 'MySQL', level: 85, category: 'Database' },
  { name: 'Git/GitHub', level: 80, category: 'Tools' },
  { name: 'OOPS', level: 90, category: 'Concepts' },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="perspective-1000 h-40"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d transition-all duration-500"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 glass-card p-6 flex flex-col items-center justify-center backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
            <span className="text-2xl font-bold text-primary">{skill.name.charAt(0)}</span>
          </div>
          <h4 className="font-semibold text-foreground">{skill.name}</h4>
          <p className="text-xs text-muted-foreground mt-1">{skill.category}</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 glass-card p-6 flex flex-col items-center justify-center rotate-y-180"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="w-full">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
              <span className="text-sm text-primary">{skill.level}%</span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, hsl(45, 80%, 55%), hsl(35, 90%, 45%))' }}
                initial={{ width: 0 }}
                animate={{ width: isFlipped ? `${skill.level}%` : 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            Hover over the cards to reveal proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
