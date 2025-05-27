import React from 'react';
import BlogCard from './BlogCard';

// Dados mockados para exemplo
const mockPosts = [
  {
    id: '1',
    title: 'O Futuro da Computação Quântica',
    excerpt: 'Como a computação quântica está revolucionando a forma como processamos informações e resolvemos problemas complexos.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop',
    date: '2024-03-15',
    category: 'Tecnologia',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
  },
  {
    id: '2',
    title: 'Inovação em Biotecnologia',
    excerpt: 'Novas descobertas em biotecnologia que prometem transformar a medicina e a agricultura nos próximos anos.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop',
    date: '2024-03-10',
    category: 'Biotecnologia',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
  },
  {
    id: '3',
    title: 'Sustentabilidade e Energia Renovável',
    excerpt: 'Como as startups estão liderando a transição para energias renováveis e um futuro mais sustentável.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop',
    date: '2024-03-05',
    category: 'Sustentabilidade',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
  }
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Últimas Notícias</h2>
            <p className="text-muted-foreground">
              Fique por dentro das últimas novidades e tendências em tecnologia profunda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 