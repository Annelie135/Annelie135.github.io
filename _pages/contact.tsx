import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare, Send, MapPin, Linkedin, Github, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_5la23ce';
const TEMPLATE_ID = 'template_oikq4z6';
const PUBLIC_KEY = 'jLGmshK5f49xJQyW_';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }, PUBLIC_KEY);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out — I'll get back to you soon."
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content" className="container-blog py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="blog-meta mb-2">CONTACT</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Whether you have a project in mind, a question, or just want to say hello — I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Send a Message
                </CardTitle>
                <CardDescription>
                  I typically respond within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required />
                    
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required />
                    
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required />
                    
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me more..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required />
                    
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSending}>
                    {isSending ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Send className="h-4 w-4 mr-2" />}
                    {isSending ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    
                    Contact Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Email</h3>
                      <p className="flex items-center gap-2 text-muted-foreground">
                        
                        smit.annelie1@gmail.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Location</h3>
                      <p className="text-muted-foreground">South Africa</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Find me online</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a href="https://www.linkedin.com/in/annelie-smit-86a615213" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com/Annelie135/portfolio-website-ba0e8188" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    I'm currently open to remote and hybrid roles.
                    <br />
                    <span className="text-foreground font-medium">Available</span> for full-time opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>);

};

export default Contact;
