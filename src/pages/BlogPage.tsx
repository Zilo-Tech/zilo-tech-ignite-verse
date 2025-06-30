import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, Calendar, Clock, User, Search, Tag } from 'lucide-react';
import { blogPosts } from '@/data/blogData';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            News & Insights
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
            Discover the latest trends, insights, and stories from ZiloTech's journey in transforming the digital landscape.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className="h-12"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="text-center text-gray-600 mb-8">
              Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <User size={16} className="mr-2 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Tag size={14} className="text-gray-400" />
                      <span className="text-sm text-gray-500">{post.tags[0]}</span>
                    </div>
                  </div>
                  
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                      Read More
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
