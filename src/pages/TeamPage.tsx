import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Users, Search, Mail, Linkedin, Twitter, Github, Calendar, MapPin } from 'lucide-react';
import { teamMembers } from '@/data/teamData';
import Header from '@/components/Header';

const TeamPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', ...Array.from(new Set(teamMembers.map(member => member.department)))];

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDepartment = selectedDepartment === 'All' || member.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-matrix opacity-20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
            Get to know the talented individuals who make ZiloTech's vision a reality. Our diverse team brings together expertise, passion, and innovation.
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
                  placeholder="Search team members, roles, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {departments.map(department => (
                  <Button
                    key={department}
                    variant={selectedDepartment === department ? "default" : "outline"}
                    onClick={() => setSelectedDepartment(department)}
                    className="h-12"
                  >
                    {department}
                  </Button>
                ))}
              </div>
            </div>

            <div className="text-center text-gray-600 mb-8">
              Showing {filteredMembers.length} team member{filteredMembers.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member, index) => (
              <Card key={member.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="bg-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {member.department}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 rounded-full flex items-center justify-center text-white transition-colors">
                          <Linkedin size={14} />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 rounded-full flex items-center justify-center text-white transition-colors">
                          <Twitter size={14} />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 rounded-full flex items-center justify-center text-white transition-colors">
                          <Github size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-1 text-gray-800 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-2">{member.role}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar size={14} className="mr-1" />
                      {member.experience} experience
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {member.bio}
                  </p>
                  
                  {/* Skills */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 font-medium mb-2">Key Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                      {member.skills.length > 3 && (
                        <span className="bg-primary-100 text-primary px-2 py-1 rounded text-xs">
                          +{member.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-gradient-to-r from-primary/10 to-primary-600/10 rounded-lg p-3 mb-4">
                    <blockquote className="text-gray-700 italic text-sm">
                      "{member.quote}"
                    </blockquote>
                  </div>
                  
                  {/* Contact */}
                  <div className="flex items-center justify-between">
                    <a href={`mailto:${member.email}`} className="flex items-center text-primary hover:text-primary-600 transition-colors">
                      <Mail size={16} className="mr-1" />
                      <span className="text-sm">Contact</span>
                    </a>
                    <div className="text-xs text-gray-500">
                      Joined {new Date(member.joinDate).getFullYear()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-16">
              <Users size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-xl text-gray-500">No team members found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Team Stats Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">{teamMembers.length}</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary mb-2">{departments.length - 1}</div>
              <div className="text-gray-600">Departments</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Dedicated</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage; 