import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'OubHair',
    description: 'Application de gestion pour coiffeurs développée avec Laravel et TailwindCSS',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&auto=format&fit=crop&q=60',
    tech: ['Laravel', 'TailwindCSS', 'MySQL'],
    github: '#',
    live: '#'
  },
  {
    title: 'GreenFlex',
    description: 'Plateforme de location d\'espaces écologiques pour l\'immobilier commercial',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&auto=format&fit=crop&q=60',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#'
  },
  {
    title: 'ERP Familial',
    description: 'Application de gestion quotidienne pour les familles',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60',
    tech: ['React', 'Firebase', 'Material-UI'],
    github: '#',
    live: '#'
  }
];

function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Projets Réalisés</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 rounded-lg overflow-hidden"
          >
            <div 
              className="aspect-video bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-sm bg-gray-800 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <a href={project.github} className="text-red-500 hover:text-red-400">
                  <Github className="w-5 h-5" />
                </a>
                <a href={project.live} className="text-red-500 hover:text-red-400">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;