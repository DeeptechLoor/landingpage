
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, PieChart, Bell, Settings, Download, ExternalLink, ChevronRight } from 'lucide-react';
import { mockInvestments, mockProjects } from '@/data/mockData';

const InvestorDashboardPage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  
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
  
  if (user.role !== 'investor') {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Acesso Restrito</h2>
        <p className="text-muted-foreground mb-6">Esta página é exclusiva para investidores.</p>
        <Link to="/">
          <Button>Voltar para Home</Button>
        </Link>
      </div>
    );
  }
  
  // Calculate total invested
  const totalInvested = mockInvestments.reduce((sum, investment) => sum + investment.amount, 0);
  
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
            <h1 className="text-3xl font-bold tracking-tight mb-1">Dashboard do Investidor</h1>
            <p className="text-muted-foreground">
              Bem-vindo, {user.name}. Gerencie seus investimentos em tecnologias profundas.
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
            <TabsTrigger value="investments" className="flex-grow md:flex-grow-0 py-2">
              Meus Investimentos
            </TabsTrigger>
            <TabsTrigger value="opportunities" className="flex-grow md:flex-grow-0 py-2">
              Oportunidades
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex-grow md:flex-grow-0 py-2">
              Documentos
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-8">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Total Investido</CardTitle>
                  <CardDescription>Valor total em investimentos ativos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">R$ {totalInvested.toLocaleString('pt-BR')}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Projetos</CardTitle>
                  <CardDescription>Número de projetos em seu portfólio</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{mockInvestments.length}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Retorno Estimado</CardTitle>
                  <CardDescription>Projeção de retorno em 5 anos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-success">+215%</div>
                </CardContent>
              </Card>
            </div>
            
            {/* Portfolio Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Distribuição do Portfólio</CardTitle>
                <CardDescription>Alocação por categoria de tecnologia</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Biotecnologia</span>
                      <span className="text-muted-foreground">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Energia Sustentável</span>
                      <span className="text-muted-foreground">30%</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Cibersegurança</span>
                      <span className="text-muted-foreground">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
                <CardDescription>Últimas atualizações dos seus investimentos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      project: 'NanoMed Solutions',
                      update: 'Conclusão de testes in vitro com resultados positivos',
                      date: '15/10/2023'
                    },
                    {
                      project: 'EcoStorage',
                      update: 'Nova parceria estratégica anunciada',
                      date: '22/09/2023'
                    },
                    {
                      project: 'CyberShield',
                      update: 'Lançamento de nova versão do produto',
                      date: '05/11/2023'
                    }
                  ].map((activity, index) => (
                    <div key={index} className="flex justify-between items-start pb-4 border-b last:border-0 last:pb-0">
                      <div>
                        <h4 className="font-medium">{activity.project}</h4>
                        <p className="text-sm text-muted-foreground">{activity.update}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{activity.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full gap-1">
                  Ver todas as atividades <ChevronRight size={16} />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="investments" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Meus Investimentos</CardTitle>
                <CardDescription>Acompanhe o desempenho dos seus investimentos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mockInvestments.map((investment, index) => {
                    const project = mockProjects.find(p => p.id === investment.projectId);
                    const progress = project ? Math.min(Math.round((project.raised / project.goal) * 100), 100) : 0;
                    
                    return (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">{investment.projectName}</h3>
                            <p className="text-sm text-muted-foreground">Investimento realizado em {investment.date}</p>
                          </div>
                          <div className="mt-2 md:mt-0 flex items-center gap-2">
                            <span className="text-sm font-medium">Status:</span>
                            <span className="text-sm bg-success/20 text-success px-2 py-0.5 rounded-full">
                              {investment.status}
                            </span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Valor investido</p>
                            <p className="font-semibold">R$ {investment.amount.toLocaleString('pt-BR')}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Ações adquiridas</p>
                            <p className="font-semibold">{investment.shares}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Valorização estimada</p>
                            <p className="font-semibold text-success">+35%</p>
                          </div>
                        </div>
                        
                        {project && (
                          <div className="mb-4">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progresso da captação</span>
                              <span>{progress}%</span>
                            </div>
                            <Progress value={progress} className="h-2" />
                          </div>
                        )}
                        
                        <div className="flex justify-end">
                          <Link to={`/projetos/${investment.projectId}`}>
                            <Button variant="outline" size="sm" className="gap-1">
                              Ver detalhes <ExternalLink size={16} />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="opportunities" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Oportunidades Recomendadas</CardTitle>
                <CardDescription>Projetos que podem complementar seu portfólio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mockProjects.slice(3, 6).map((project, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{project.name}</h3>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {project.tags.map((tag, i) => (
                              <span 
                                key={i} 
                                className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <span className="text-sm bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>R$ {project.raised.toLocaleString('pt-BR')}</span>
                          <span className="text-muted-foreground">Meta: R$ {project.goal.toLocaleString('pt-BR')}</span>
                        </div>
                        <Progress value={Math.round((project.raised / project.goal) * 100)} className="h-2" />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{project.daysLeft} dias restantes</span>
                        <Link to={`/projetos/${project.id}`}>
                          <Button size="sm" className="gap-1">
                            Ver projeto <ArrowRight size={16} />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/projetos" className="w-full">
                  <Button variant="outline" className="w-full">
                    Ver todos os projetos
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="documents" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Documentos</CardTitle>
                <CardDescription>Contratos e documentos relacionados aos seus investimentos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockInvestments.map((investment, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">{investment.projectName}</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center py-2 border-b">
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-full bg-primary/10">
                              <Download size={16} className="text-primary" />
                            </div>
                            <span>Contrato de Investimento</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            Download
                          </Button>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-full bg-primary/10">
                              <Download size={16} className="text-primary" />
                            </div>
                            <span>Termos de Acordo</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            Download
                          </Button>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-full bg-primary/10">
                              <Download size={16} className="text-primary" />
                            </div>
                            <span>Relatório Trimestral</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default InvestorDashboardPage;
