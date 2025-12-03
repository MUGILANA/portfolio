import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ExternalLink, Github, Server, Layout, Database, Code } from 'lucide-react';

const projects = [
  {
    title: 'Job Search Portal',
    subtitle: 'Full Stack Web Application',
    description: 'A comprehensive web-based platform that bridges the gap between job seekers and employers. Features include profile creation, resume upload, job search by keyword/location, and application tracking.',
    features: [
      'User profile management',
      'Resume upload & management',
      'Advanced job search filters',
      'Application tracking system',
      'Employer job posting',
    ],
    tech: ['Java', 'Servlets', 'JSP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    icon: Server,
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'Exam Seating Arrangement System',
    subtitle: 'Automated Allocation System',
    description: 'Web-based exam seating system using JSP, Servlet, and MySQL to automate student seating allocation. Improved accuracy and reduced manual workload by generating automatic seat plans.',
    features: [
      'Student login system',
      'Hall allocation module',
      'Student registration',
      'Automatic seat mapping',
      'MVC Architecture',
    ],
    tech: ['Java Servlets', 'JSP', 'MySQL', 'JDBC', 'Tomcat', 'HTML5', 'CSS3'],
    icon: Layout,
    gradient: 'from-yellow-500/20 to-amber-500/20',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world applications showcasing my development expertise
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card-hover overflow-hidden"
            >
              <div className={`p-8 md:p-10 bg-gradient-to-br ${project.gradient}`}>
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Icon & Title */}
                  <div className="lg:w-1/3">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <project.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-montserrat mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary font-medium mb-4">{project.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features & Tech */}
                  <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Code className="w-5 h-5 text-primary" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Database className="w-5 h-5 text-primary" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-secondary text-foreground border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default ProjectsSection;
