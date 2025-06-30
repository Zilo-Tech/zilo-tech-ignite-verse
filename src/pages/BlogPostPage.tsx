
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { blogPosts } from '@/data/blogData';
import Header from '@/components/Header';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Heart, 
  ThumbsUp, 
  Lightbulb, 
  MessageCircle,
  Share2,
  Tag
} from 'lucide-react';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);
  
  const [reactions, setReactions] = useState(post?.reactions || { likes: 0, loves: 0, insights: 0 });
  const [comments, setComments] = useState(post?.comments || []);
  const [newComment, setNewComment] = useState({ author: '', content: '' });

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleReaction = (type: 'likes' | 'loves' | 'insights') => {
    setReactions(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.author && newComment.content) {
      const comment = {
        id: `c${Date.now()}`,
        author: newComment.author,
        content: newComment.content,
        publishDate: new Date().toISOString().split('T')[0]
      };
      setComments(prev => [...prev, comment]);
      setNewComment({ author: '', content: '' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <div className="mb-8">
            <Link to="/blog">
              <Button variant="outline" className="group">
                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center mb-4">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                {post.category}
              </span>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                {post.tags.map(tag => (
                  <div key={tag} className="flex items-center">
                    <Tag size={14} className="mr-1" />
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between flex-wrap gap-4 text-gray-600">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <User size={18} className="mr-2" />
                  <div>
                    <span className="font-medium">{post.author}</span>
                    <span className="text-sm text-gray-500 block">{post.authorRole}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {new Date(post.publishDate).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  {post.readTime}
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="group">
                <Share2 size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                Share
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 rounded-xl overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Reactions */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">What did you think of this article?</h3>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  onClick={() => handleReaction('likes')}
                  className="flex items-center space-x-2 hover:bg-blue-50 hover:border-blue-300"
                >
                  <ThumbsUp size={20} className="text-blue-600" />
                  <span>Like ({reactions.likes})</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleReaction('loves')}
                  className="flex items-center space-x-2 hover:bg-red-50 hover:border-red-300"
                >
                  <Heart size={20} className="text-red-600" />
                  <span>Love ({reactions.loves})</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleReaction('insights')}
                  className="flex items-center space-x-2 hover:bg-yellow-50 hover:border-yellow-300"
                >
                  <Lightbulb size={20} className="text-yellow-600" />
                  <span>Insightful ({reactions.insights})</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Comments Section */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <MessageCircle size={24} className="mr-2" />
                Comments ({comments.length})
              </h3>

              {/* Add Comment Form */}
              <form onSubmit={handleCommentSubmit} className="mb-8 space-y-4">
                <Input
                  placeholder="Your name"
                  value={newComment.author}
                  onChange={(e) => setNewComment(prev => ({ ...prev, author: e.target.value }))}
                  required
                />
                <Textarea
                  placeholder="Share your thoughts..."
                  value={newComment.content}
                  onChange={(e) => setNewComment(prev => ({ ...prev, content: e.target.value }))}
                  rows={4}
                  required
                />
                <Button type="submit" className="bg-primary hover:bg-primary-600">
                  Post Comment
                </Button>
              </form>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map(comment => (
                  <div key={comment.id} className="border-l-4 border-primary pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <User size={16} className="mr-2 text-gray-400" />
                        <span className="font-medium text-gray-800">{comment.author}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(comment.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                  </div>
                ))}
                
                {comments.length === 0 && (
                  <p className="text-gray-500 text-center py-8">
                    Be the first to comment on this article!
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
