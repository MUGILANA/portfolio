import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'B.E. Computer Science & Engineering',
    school: 'Mohamed Sathak Engineering College',
    location: 'Kilakarai',
    period: '2021 - 2025',
    grade: 'CGPA 8.1',
    highlight: true,
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    school: 'National Academy Matric Higher Secondary School',
    location: '',
    period: '2020 - 2021',
    grade: '83.5%',
    highlight: false,
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    school: 'National Academy Matric Higher Secondary School',
    location: '',
    period: '2018 - 2019',
    grade: '74.5%',
    highlight: false,
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="section-subtitle">
            Academic foundation and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`glass-card-hover p-6 md:p-8 ${edu.highlight ? 'border-primary/30' : ''}`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    edu.highlight ? 'bg-primary text-primary-foreground' : 'bg-primary/10'
                  }`}>
                    <GraduationCap className={`w-7 h-7 ${edu.highlight ? '' : 'text-primary'}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat mb-1">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.school}</p>
                    {edu.location && (
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col md:items-end gap-2 ml-18 md:ml-0">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span className={`font-bold ${edu.highlight ? 'text-primary text-lg' : 'text-foreground'}`}>
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
