import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-4"
            >
              <img 
                src={theme === 'dark' ? "/images/logodeeptech.webp" : "/images/logodeeptechblack.webp"} 
                alt="DeepTech Invest Logo" 
                className="h-20 w-auto"
              />
            </motion.div>
            <p className="text-muted-foreground mb-4">
              Conectando investidores a startups inovadoras em tecnologias profundas, impulsionando o futuro da inovação.
            </p>{/*
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/loor.vc" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/loor.vc/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/loor-venture-capital/about/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://wa.me/551152360459" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
            */}
          </div>

          <div>
            <p className="font-semibold mb-4">Links Rápidos</p>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <a href="https://wtlbloor.netlify.app/investor/login" className="text-muted-foreground hover:text-primary transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <a href="https://wtlbloor.netlify.app/investor/login" className="text-muted-foreground hover:text-primary transition-colors">
                  Entrar
                </a>
              </li>
              <li>
                <a href="https://wtlbloor.netlify.app/investor/login" className="text-muted-foreground hover:text-primary transition-colors">
                  Cadastrar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-4">Para Startups</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Critérios de Seleção
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Submeter Projeto
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ para Startups
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-4">Contato</p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-muted-foreground" />
                <span className="text-muted-foreground">diretoria@deeptechinvest.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-muted-foreground" />
                <span className="text-muted-foreground">+55 (61) 999963233</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-muted-foreground mt-1" />
                <span className="text-muted-foreground">Endereço: SQN 212, bloco J, Brasília – DF-Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} DeepTech Invest. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
