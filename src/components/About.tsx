import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Laptop, Braces } from 'lucide-react';

const skills = [
  { name: 'Développement Web', icon: Code2, tech: ['React', 'Node.js', 'PHP'] },
  { name: 'Intégration Systèmes', icon: Database, tech: ['MongoDB', 'API REST'] },
  { name: 'Applications B2B', icon: Laptop, tech: ['Laravel', 'TailwindCSS'] },
  { name: 'Prompt Engineering', icon: Braces, tech: ['IA', 'Optimisation'] },
];

function About() {
  return (
    <section id="about" className="py-20">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        <div>
          <h2 className="text-4xl font-bold mb-6">À Propos</h2>
          <p className="text-gray-400 leading-relaxed">
            Développeur passionné par la création de solutions technologiques innovantes, 
            je me spécialise dans le développement web, l'intégration de systèmes et 
            les applications B2B. Mon objectif est d'apporter des solutions efficaces 
            et accessibles aux entreprises locales, notamment dans les secteurs 
            sous-digitalisés.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Compétences</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.map(({ name, icon: Icon, tech }) => (
              <div key={name} className="bg-gray-900 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon className="w-5 h-5 text-red-500" />
                  <span className="font-semibold">{name}</span>
                </div>
                <div className="text-sm text-gray-400">
                  {tech.join(' • ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;