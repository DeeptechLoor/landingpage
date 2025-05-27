import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Dados mockados (mesmos do BlogSection)
const mockPosts = [
  {
    id: '1',
    title: 'O Futuro da Computação Quântica',
    excerpt: 'Como a computação quântica está revolucionando a forma como processamos informações e resolvemos problemas complexos.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop',
    date: '2024-03-15',
    category: 'Tecnologia',
    content: `A computação quântica está emergindo como uma das tecnologias mais promissoras do século XXI. Com sua capacidade de processar informações em estados quânticos, ela promete revolucionar campos como criptografia, simulação molecular e otimização de problemas complexos.

    Recentes avanços em qubits supercondutores e armadilhas de íons têm permitido que computadores quânticos alcancem marcos importantes. Empresas como IBM, Google e startups especializadas estão competindo para alcançar a supremacia quântica - o ponto em que um computador quântico pode resolver problemas que são praticamente impossíveis para computadores clássicos.

    As implicações são vastas. Na medicina, a computação quântica pode acelerar o desenvolvimento de novos medicamentos através de simulações moleculares precisas. Na logística, pode otimizar rotas de entrega e gestão de cadeias de suprimentos. Na segurança, está forçando uma reavaliação completa dos métodos de criptografia atuais.

    No entanto, desafios significativos permanecem. A decoerência quântica - a perda de informação quântica devido à interação com o ambiente - continua sendo um obstáculo. Além disso, o desenvolvimento de algoritmos quânticos eficientes e a criação de uma infraestrutura de programação quântica são áreas que requerem atenção contínua.

    O futuro da computação quântica parece promissor, mas seu impacto real dependerá de nossa capacidade de superar esses desafios técnicos e de encontrar aplicações práticas que realmente aproveitem seu potencial único.`
  },
  {
    id: '2',
    title: 'Inovação em Biotecnologia',
    excerpt: 'Novas descobertas em biotecnologia que prometem transformar a medicina e a agricultura nos próximos anos.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop',
    date: '2024-03-10',
    category: 'Biotecnologia',
    content: `A biotecnologia está passando por uma verdadeira revolução, impulsionada por avanços em engenharia genética, bioinformática e técnicas como a edição de genes com CRISPR-Cas9. Essas inovações estão abrindo novas possibilidades para o tratamento de doenças, o desenvolvimento de culturas agrícolas mais resistentes e a criação de materiais biodegradáveis.
  
    Na medicina, a biotecnologia está possibilitando terapias personalizadas, como a imunoterapia contra o câncer, além do desenvolvimento de vacinas mais rápidas e eficazes, como foi visto com as vacinas de mRNA durante a pandemia de COVID-19. Pesquisas em células-tronco e medicina regenerativa também prometem revolucionar o tratamento de lesões e doenças degenerativas.
  
    No setor agrícola, a biotecnologia está ajudando a criar plantas geneticamente modificadas que são mais resistentes a pragas, doenças e mudanças climáticas, contribuindo para a segurança alimentar global. Além disso, avanços na biotecnologia industrial estão permitindo a produção de biocombustíveis e plásticos biodegradáveis, reduzindo a dependência de combustíveis fósseis.
  
    Apesar das oportunidades, desafios éticos e regulatórios permanecem. O uso de organismos geneticamente modificados (OGMs) e a edição genética em seres humanos levantam questões importantes sobre segurança, consentimento e impacto ambiental.
  
    O futuro da biotecnologia será definido pela forma como a sociedade equilibra o potencial transformador dessas tecnologias com a necessidade de regulamentação e responsabilidade ética.`
  },
  {
    id: '3',
    title: 'Sustentabilidade e Energia Renovável',
    excerpt: 'Como as startups estão liderando a transição para energias renováveis e um futuro mais sustentável.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop',
    date: '2024-03-05',
    category: 'Sustentabilidade',
    content: `A transição para fontes de energia renovável está no centro dos esforços globais para combater as mudanças climáticas e construir um futuro mais sustentável. Startups e empresas inovadoras estão desempenhando um papel fundamental nesse movimento, desenvolvendo tecnologias que tornam as energias limpas mais acessíveis e eficientes.
  
    A energia solar, eólica e hidrelétrica continuam a ser as principais fontes renováveis, mas novas alternativas estão ganhando destaque, como a energia das marés e a geotérmica. Além disso, o armazenamento eficiente de energia, por meio de baterias de íon-lítio e outras tecnologias emergentes, está superando o desafio da intermitência dessas fontes.
  
    As startups também estão liderando o desenvolvimento de micro-redes e sistemas de geração descentralizada, permitindo que comunidades isoladas tenham acesso à eletricidade limpa e confiável. Soluções como painéis solares residenciais, turbinas eólicas de pequeno porte e sistemas de monitoramento baseados em inteligência artificial estão tornando a energia renovável mais viável e econômica.
  
    No entanto, a transição energética exige investimentos significativos, políticas públicas favoráveis e a superação de barreiras técnicas e econômicas. A integração de fontes renováveis na matriz energética global é um processo complexo, que demanda colaboração entre governos, setor privado e sociedade civil.
  
    O avanço das energias renováveis representa uma oportunidade única de mitigar os efeitos das mudanças climáticas, ao mesmo tempo em que promove o desenvolvimento econômico sustentável e a geração de empregos verdes.`
  },
    
  // ... outros posts
];

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando uma chamada à API
    const fetchPost = async () => {
      try {
        // Em um cenário real, isso seria uma chamada à API
        const foundPost = mockPosts.find(p => p.id === id);
        setPost(foundPost);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-destructive mb-4">Post não encontrado</p>
        <Button onClick={() => navigate(-1)}>Voltar</Button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>

        <article className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{post.category}</span>
                <span>•</span>
                <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </motion.div>
  );
};

export default BlogPostPage; 