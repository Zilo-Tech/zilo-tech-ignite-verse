
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ArrowRight, Calendar, Clock, User, Heart, ThumbsUp, Lightbulb } from 'lucide-react';
import { blogPosts } from '@/data/blogData';
import { Link } from 'react-router-dom';

const Blog = () => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 data-stream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-900 to-primary bg-clip-text text-transparent">
            Latest News & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, insights, and stories from the world of technology and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
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
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <ThumbsUp size={14} className="mr-1" />
                      {post.reactions.likes}
                    </div>
                    <div className="flex items-center">
                      <Heart size={14} className="mr-1" />
                      {post.reactions.loves}
                    </div>
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

        <div className="text-center animate-fade-in">
          <Link to="/blog">
            <Button size="lg" className="bg-primary hover:bg-primary-600 text-white px-8 py-4">
              View All Articles
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
