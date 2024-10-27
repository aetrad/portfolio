import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function Contact() {
  return (
    <footer id="contact" className="py-12 border-t border-gray-800">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Contactez-moi</h2>
        <p className="text-gray-400">
          Intéressé par une collaboration ? N'hésitez pas à me contacter !
        </p>
      </div>
      <div className="flex justify-center space-x-6">
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Github className="w-6 h-6" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="mailto:votre@email.com" className="text-gray-400 hover:text-white transition-colors">
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}

export default Contact;