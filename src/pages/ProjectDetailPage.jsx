
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Calendar, Target, Clock, Share2, BookmarkPlus, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { mockProjects } from '@/data/mockData';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { toast } = useToast();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('about');
  const [investDialogOpen, setInvestDialogOpen] = useState(false);
  const [investmentAmount, setInvestmentAmount] = useState('');
  
  useEffect(() => {
    // Simulate API call to fetch project details
    const fetchProject = () => {
      setLoading(true);
      setTimeout(() => {
        const foundProject = mockProjects.find(p => p.id === id);
        setProject(foundProject || null);
        setLoading(false);
      }, 500);
    };
    
    fetchProject();
  }, [id]);
  
  const handleInvest = () => {
    if (!user) {
      toast({
        title: "Login necessário",
        description: "Você precisa estar logado para investir em projetos.",
        variant: "destructive",
      });
      return;
    }
    
    setInvestDialogOpen(true);
  };
  
  const handleConfirmInvestment = () => {
    const amount = parseFloat(investmentAmount);
    
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Valor inválido",
        description: "Por favor, insira um valor válido para investimento.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate investment process
    setTimeout(() => {
      toast({
        title: "Investimento realizado com sucesso!",
        description: `Você investiu R$ ${amount.toLocaleString('pt-BR')} em ${project.name}.`,
      });
      setInvestDialogOpen(false);
      setInvestmentAmount('');
    }, 1000);
  };
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando detalhes do projeto...</p>
        </div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Projeto não encontrado</h2>
        <p className="text-muted-foreground mb-6">O projeto que você está procurando não existe ou foi removido.</p>
        <Link to="/projetos">
          <Button>Ver todos os projetos</Button>
        </Link>
      </div>
    );
  }
  
  const progress = Math.min(Math.round((project.raised / project.goal) * 100), 100);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/projetos" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para projetos
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative rounded-lg overflow-hidden mb-6">
              <img  
                className="w-full h-auto aspect-video object-cover" 
                alt={`${project.name} - Imagem principal do projeto`}
                src="/images/hero.webp" />
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-sm font-semibold px-3 py-1 rounded-full">
                {project.category}
              </div>
            </div>
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-lg text-muted-foreground">{project.description}</p>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList className="w-full">
                <TabsTrigger value="about" className="flex-1">Sobre</TabsTrigger>
                <TabsTrigger value="team" className="flex-1">Equipe</TabsTrigger>
                <TabsTrigger value="updates" className="flex-1">Atualizações</TabsTrigger>
                <TabsTrigger value="documents" className="flex-1">Documentos</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="mt-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Sobre o Projeto</h3>
                  <p className="text-muted-foreground">{project.about}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Problema</h3>
                  <p className="text-muted-foreground">{project.problem}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Solução</h3>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Tração</h3>
                  <p className="text-muted-foreground">{project.traction}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Modelo de Negócio</h3>
                  <p className="text-muted-foreground">{project.businessModel}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Concorrência</h3>
                  <p className="text-muted-foreground">{project.competition}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Uso dos Recursos</h3>
                  <p className="text-muted-foreground">{project.fundingUse}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="team" className="mt-6">
                <h3 className="text-xl font-semibold mb-6">Equipe</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.team.map((member, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center text-primary font-semibold text-xl">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="updates" className="mt-6">
                <h3 className="text-xl font-semibold mb-6">Atualizações do Projeto</h3>
                <div className="space-y-6">
                  {project.updates.map((update, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">{update.title}</h4>
                        <span className="text-sm text-muted-foreground">{update.date}</span>
                      </div>
                      <p className="text-muted-foreground">{update.content}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="documents" className="mt-6">
                <h3 className="text-xl font-semibold mb-6">Documentos</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">Pitch Deck</h4>
                      <p className="text-sm text-muted-foreground">Apresentação detalhada do projeto</p>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ExternalLink size={16} /> Ver
                    </Button>
                  </div>
                  <div className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">Plano de Negócios</h4>
                      <p className="text-sm text-muted-foreground">Estratégia e projeções financeiras</p>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ExternalLink size={16} /> Ver
                    </Button>
                  </div>
                  <div className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">Termos de Investimento</h4>
                      <p className="text-sm text-muted-foreground">Condições e termos legais</p>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ExternalLink size={16} /> Ver
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-6 sticky top-24">
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">R$ {project.raised.toLocaleString('pt-BR')}</span>
                  <span className="text-muted-foreground">Meta: R$ {project.goal.toLocaleString('pt-BR')}</span>
                </div>
                <Progress value={progress} className="h-2 mb-2" />
                <div className="flex justify-between text-sm">
                  <span>{progress}% financiado</span>
                  <span>{project.daysLeft} dias restantes</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-muted-foreground" />
                  <span>{project.investors} investidores</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-muted-foreground" />
                  <span>Investimento mínimo: R$ 1.000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target size={18} className="text-muted-foreground" />
                  <span>Equity oferecido: 8%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-muted-foreground" />
                  <span>Prazo estimado: 5-7 anos</span>
                </div>
              </div>
              
              <Button className="w-full mb-3" size="lg" onClick={handleInvest}>
                Investir neste projeto
              </Button>
              
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 gap-1">
                  <BookmarkPlus size={16} /> Salvar
                </Button>
                <Button variant="outline" className="flex-1 gap-1">
                  <Share2 size={16} /> Compartilhar
                </Button>
              </div>
              
              <Separator className="my-6" />
              
              <div>
                <h4 className="font-semibold mb-2">Tem dúvidas?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Entre em contato com a equipe do projeto ou agende uma call para saber mais.
                </p>
                <Button variant="outline" className="w-full">Contatar equipe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Dialog open={investDialogOpen} onOpenChange={setInvestDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Investir em {project.name}</DialogTitle>
            <DialogDescription>
              Defina o valor que você deseja investir neste projeto. O investimento mínimo é de R$ 1.000.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Valor do investimento (R$)</Label>
              <Input
                id="amount"
                type="number"
                min="1000"
                step="100"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(e.target.value)}
                placeholder="1000"
              />
            </div>
            
            <div className="text-sm text-muted-foreground">
              <p>Ao investir, você concorda com os termos e condições da plataforma e do projeto.</p>
              <p className="mt-2">Você receberá {investmentAmount ? Math.floor(parseFloat(investmentAmount) / 20) : 0} ações da empresa.</p>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setInvestDialogOpen(false)}>Cancelar</Button>
            <Button onClick={handleConfirmInvestment}>Confirmar Investimento</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default ProjectDetailPage;
