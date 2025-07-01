import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Sobre a <span className="gradient-text">DeepTech Invest</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8"
            >
              A DeepTech Invest é uma plataforma completa de investimento em tecnologias profundas. Atuamos em duas frentes integradas:
              <br />
              <br />
              Crowdfunding especializado em Deep Tech, Deeptechs.vc, conectando startups científicas a investidores qualificados por meio de captações reguladas, seguras e com curadoria técnica.
              <br />
              <br />
              Soluções para fundos e blended finance, apoiando gestores, e investidores institucionais na estruturação de veículos de investimento, seleção de deeptechs e estratégias híbridas de fomento à inovação.
              <br />
              <br />
              Combinamos capital, conhecimento técnico e impacto positivo em uma única plataforma. 
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
            <a href="https://wtlbloor.netlify.app/investor/login">
                <Button size="lg">
                  Explorar oportunidades <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-6">Nossa Missão</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Democratizar o acesso ao investimento em tecnologias profundas, permitindo que mais pessoas participem do desenvolvimento de soluções inovadoras que têm o potencial de transformar indústrias e resolver grandes desafios globais.
              </p>
              <ul className="space-y-3">
                {[
                  'Conectar startups inovadoras a capital inteligente',
                  'Facilitar o desenvolvimento de tecnologias profundas',
                  'Criar oportunidades de investimento de alto impacto',
                  'Fomentar o ecossistema de inovação no Brasil'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img  
                  className="w-full h-auto" 
                  alt="Equipe da DeepTech Invest em reunião estratégica"
                 src="https://images.unsplash.com/photo-1642142785011-4a00c34c4a36" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Nossos Valores</h2>
            <p className="text-lg text-muted-foreground">
              Princípios que guiam nossas decisões e ações todos os dias.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: 'Transparência',
                description: 'Compromisso com informações claras e acessíveis sobre projetos, riscos e oportunidades.'
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: 'Inovação',
                description: 'Foco em tecnologias verdadeiramente inovadoras com potencial de transformação significativa.'
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Comunidade',
                description: 'Construção de um ecossistema colaborativo entre investidores, startups e parceiros.'
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: 'Excelência',
                description: 'Busca constante pela qualidade em todos os aspectos da plataforma e projetos selecionados.'
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: 'Impacto',
                description: 'Priorização de tecnologias que geram impacto positivo significativo na sociedade e no planeta.'
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: 'Integridade',
                description: 'Atuação ética e responsável em todas as interações e decisões de negócio.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-card rounded-lg p-6 h-full border shadow-sm">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Nossa Equipe</h2>
            <p className="text-lg text-muted-foreground">
              Profissionais apaixonados por inovação e com experiência em tecnologia, investimentos e empreendedorismo.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {[
              {
                name: 'Monika Heringer',
                role: 'CEO & Fundadora',
                bio: 'Executiva de negócios e investidora de startups com sólida atuação em P&D e tecnologias emergentes como IA, digital twins, biotecnologia e sustentabilidade. Experiência internacional com centros de inovação na Europa e liderança em projetos complexos para o setor produtivo. Doutoranda em Relações Internacionais (UnB), com foco em geopolítica e cadeias globais de valor.',
                photo: '/images/ceo.jpg',
              },
              {
                name: 'Juliana Machado Ceccato',
                role: 'Diretora de Investimentos & Fundadora',
                bio: 'Ex-executiva de PE/VC com 15 anos de experiência em investimentos estruturados. Ex-gestora do HUB investMCTI e da escola investAcademy, voltada para estrutura de financiamento para CT&I. Economista, especialista em Finanças e liderança em inovação.',
                photo: '/images/dif.jpg',
              },
              {
                name: 'Hugo Giallanza',
                role: 'Advisor',
                bio: 'Presidente da Brasil Startups e CEO do Loor, equity crowdfunding, formado em Administração de Empresas, especialista em validação de novos modelos de negócios, trabalhou com tecnologia da informação na DELL e IBM com clientes do governo Federal, Estadual e Municipal e 2014 foi considerado como um dos 10 empreendedores que mais contribuíram com o ecossistema de startups nacional. Foi conselheiro do SENAC-DF nos anos de 2014 à 2016 e membro do Núcleo de Inovação da FIBRA-DF pelo SINFOR-DF. Já captou mais de 8 milhões em projetos que fomentam a cultura e educação empreendedora no país.',
                photo: '/images/advisor.jpg',
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-card rounded-lg overflow-hidden border shadow-sm">
                  <div className="w-full h-80 bg-muted flex items-center justify-center overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-accent mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-muted-foreground">
              Respostas para as dúvidas mais comuns sobre nossa plataforma e como investir em deep techs.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: 'O que são deep techs?',
                  answer: 'Deep techs são inovações baseadas em avanços científicos e engenharia de alta complexidade que resolvem desafios técnicos significativos. Incluem áreas como biotecnologia, computação quântica, inteligência artificial avançada, nanotecnologia, entre outras.'
                },
                {
                  question: 'Como funciona o investimento através da plataforma?',
                  answer: 'Os investidores podem explorar oportunidades, analisar documentos e informações detalhadas, e decidir quanto desejam investir. O investimento é feito diretamente pela plataforma, com toda a documentação legal necessária. Após o fechamento da rodada, os investidores recebem participação acionária na startup.'
                },
                {
                  question: 'Qual é o valor mínimo para investir?',
                  answer: 'O valor mínimo de investimento varia de acordo com cada oportunidade, mas geralmente começa em R$ 1.000. Isso permite que mais pessoas tenham acesso a oportunidades de investimento em tecnologias inovadoras.'
                },
                {
                  question: 'Como são selecionados os oportunidades da plataforma?',
                  answer: 'Realizamos um rigoroso processo de due diligence que avalia a tecnologia, equipe, mercado, propriedade intelectual e potencial de crescimento. Apenas cerca de 5% das oportunidades analisadas são aprovadas para captação na plataforma.'
                },
                {
                  question: 'Quais são os riscos de investir em deeptech?',
                  answer: 'Investimentos em tecnologias profundas envolvem riscos significativos, incluindo longo prazo de maturação, incertezas tecnológicas, desafios regulatórios e de mercado. Por outro lado, oferecem potencial de retornos expressivos e impacto transformador.'
                },
                {
                  question: 'Como acompanho meus investimentos?',
                  answer: 'Através da plataforma, você terá acesso a um dashboard com informações atualizadas sobre seus investimentos, relatórios periódicos das startups e comunicados importantes. As startups são obrigadas a fornecer atualizações regulares sobre seu progresso.'
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight mb-6"
            >
              Pronto para fazer parte do futuro da tecnologia?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Junte-se a nossa comunidade de investidores e startups inovadoras que estão moldando o futuro através de tecnologias profundas.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <a href="https://wtlbloor.netlify.app/investor/login">
                <Button size="lg" className="w-full sm:w-auto">
                  Criar uma conta <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="https://wtlbloor.netlify.app/investor/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explorar oportunidades
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
