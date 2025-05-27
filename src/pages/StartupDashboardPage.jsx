import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, PieChart, Bell, Settings, Download, ExternalLink, ChevronRight, Plus, Edit, Users, Calendar, Target } from 'lucide-react';
import { mockStartupProjects } from '@/data/mockData';

const StartupDashboardPage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateContentText, setUpdateContentText] = useState('');
  
  if (!user) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Acesso Restrito</h2>
        <p className="text-muted-foreground mb-6">Você precisa estar logado para acessar esta página.</p>
        <Link to="/login">
          <Button>Fazer Login</Button>
        </Link>
      </div>
    );
  }
  
  if (user.role !== 'startup') {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Acesso Restrito</h2>
        <p className="text-muted-foreground mb-6">Esta página é exclusiva para startups.</p>
        <Link to="/">
          <Button>Voltar para Home</Button>
        </Link>
      </div>
    );
  }
  
  const handleAddUpdate = () => {
    if (!updateTitle || !updateContentText) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Atualização adicionada",
      description: "Sua atualização foi publicada com sucesso.",
    });
    
    setUpdateDialogOpen(false);
    setUpdateTitle('');
    setUpdateContentText('');
  };
  
  const project = mockStartupProjects[0];
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-1">Dashboard da Startup</h1>
            <p className="text-muted-foreground">
              Bem-vindo, {user.name}. Gerencie seu projeto e acompanhe o progresso da captação.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Download size={16} /> Exportar
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Settings size={16} /> Configurações
            </Button>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="w-full flex flex-wrap h-auto p-1 mb-4">
            <TabsTrigger value="overview" className="flex-grow md:flex-grow-0 py-2">
              Visão Geral
            </TabsTrigger>
            <TabsTrigger value="campaign" className="flex-grow md:flex-grow-0 py-2">
              Campanha
            </TabsTrigger>
            <TabsTrigger value="investors" className="flex-grow md:flex-grow-0 py-2">
              Investidores
            </TabsTrigger>
            <TabsTrigger value="updates" className="flex-grow md:flex-grow-0 py-2">
              Atualizações
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-8">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>{project.category}</CardDescription>
                  </div>
                  <Link to={`/projetos/${project.id}`}>
                    <Button variant="outline" size="sm" className="gap-1">
                      Ver página <ExternalLink size={16} />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-2">
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
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Captação</CardTitle>
                  <CardDescription>Valor captado até o momento</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">R$ {project.raised.toLocaleString('pt-BR')}</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {progress}% da meta de R$ {project.goal.toLocaleString('pt-BR')}
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Investidores</CardTitle>
                  <CardDescription>Número de investidores no projeto</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{project.investors}</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Ticket médio: R$ {project.investors > 0 ? Math.round(project.raised / project.investors).toLocaleString('pt-BR') : '0'}
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Tempo Restante</CardTitle>
                  <CardDescription>Dias até o fim da campanha</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{project.daysLeft} dias</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Campanha ativa até {new Date(Date.now() + project.daysLeft * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="campaign" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Detalhes da Campanha</CardTitle>
                <CardDescription>Gerencie as informações da sua campanha de captação.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="campaignName">Nome do Projeto</Label>
                  <Input id="campaignName" defaultValue={project.name} />
                </div>
                <div>
                  <Label htmlFor="campaignDescription">Descrição Curta</Label>
                  <Input id="campaignDescription" defaultValue={project.description} />
                </div>
                <div>
                  <Label htmlFor="campaignGoal">Meta de Captação (R$)</Label>
                  <Input id="campaignGoal" type="number" defaultValue={project.goal} />
                </div>
                <Button className="gap-1">
                  <Edit size={16} /> Salvar Alterações
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="investors" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Lista de Investidores</CardTitle>
                <CardDescription>Acompanhe quem investiu no seu projeto.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Investidor Anônimo 1', amount: 5000, date: '10/11/2023' },
                    { name: 'Investidor Anônimo 2', amount: 10000, date: '12/11/2023' },
                    { name: 'Investidor Anônimo 3', amount: 2500, date: '15/11/2023' },
                  ].map((investor, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-md">
                      <div>
                        <p className="font-medium">{investor.name}</p>
                        <p className="text-sm text-muted-foreground">Investiu em {investor.date}</p>
                      </div>
                      <p className="font-semibold">R$ {investor.amount.toLocaleString('pt-BR')}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="updates" className="space-y-8">
            <Card>
              <CardHeader className="flex flex-row justify-between items-center">
                <div>
                  <CardTitle>Atualizações do Projeto</CardTitle>
                  <CardDescription>Mantenha seus investidores informados sobre o progresso.</CardDescription>
                </div>
                <Button onClick={() => setUpdateDialogOpen(true)} className="gap-1">
                  <Plus size={16} /> Adicionar Atualização
                </Button>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Dialog open={updateDialogOpen} onOpenChange={setUpdateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Nova Atualização</DialogTitle>
            <DialogDescription>
              Compartilhe novidades e progressos do seu projeto com os investidores.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="updateTitle">Título da Atualização</Label>
              <Input
                id="updateTitle"
                value={updateTitle}
                onChange={(e) => setUpdateTitle(e.target.value)}
                placeholder="Ex: Nova parceria estratégica"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="updateContent">Conteúdo da Atualização</Label>
              <textarea
                id="updateContent"
                value={updateContentText}
                onChange={(e) => setUpdateContentText(e.target.value)}
                placeholder="Descreva a atualização em detalhes..."
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                rows={5}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setUpdateDialogOpen(false)}>Cancelar</Button>
            <Button onClick={handleAddUpdate}>Publicar Atualização</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default StartupDashboardPage;