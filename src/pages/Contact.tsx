import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Headphones,
  Users,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    userType: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Mock form submission
    console.log('Contact form submitted:', formData);
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      userType: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Support',
      details: '+91 1800-MEDOSPHERE',
      description: '24/7 Emergency Support',
      color: 'text-medical-primary'
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: 'hello@medosphere.in',
      description: 'Response within 4 hours',
      color: 'text-medical-secondary'
    },
    {
      icon: MapPin,
      title: 'Head Office',
      details: 'Bangalore, Karnataka',
      description: 'India - 560001',
      color: 'text-medical-accent'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Sat: 9 AM - 6 PM',
      description: 'Emergency: 24/7',
      color: 'text-medical-success'
    }
  ];

  const supportTypes = [
    {
      icon: MessageCircle,
      title: 'General Inquiry',
      description: 'Questions about our platform and services'
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      description: 'Help with using the platform features'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Collaboration and partnership opportunities'
    }
  ];

  const userTypes = [
    'Patient',
    'Doctor/Healthcare Provider', 
    'Hospital Administrator',
    'Pharmacy Owner',
    'Government Official',
    'NGO/Social Worker',
    'Investor',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="medical-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Have questions about MedoSphere? We're here to help you transform healthcare in your community.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="medical-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-medical-primary">
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@domain.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="userType">I am a</Label>
                        <select
                          id="userType"
                          className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-medical-primary"
                          value={formData.userType}
                          onChange={(e) => handleInputChange('userType', e.target.value)}
                        >
                          <option value="">Select your role</option>
                          {userTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="Brief subject of your message"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="consent" className="rounded border-neutral-300" required />
                      <Label htmlFor="consent" className="text-sm text-neutral-600">
                        I agree to the processing of my personal data for the purpose of responding to my inquiry.
                      </Label>
                    </div>

                    <Button type="submit" variant="medical" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="medical-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-medical-primary">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br from-medical-primary to-medical-secondary`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-900">{info.title}</h3>
                          <p className="text-neutral-700">{info.details}</p>
                          <p className="text-sm text-neutral-500">{info.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Support Types */}
              <Card className="medical-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-medical-primary">
                    How Can We Help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {supportTypes.map((type, index) => {
                    const Icon = type.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-50 medical-transition">
                        <Icon className="h-5 w-5 text-medical-primary" />
                        <div>
                          <h4 className="font-medium text-neutral-900">{type.title}</h4>
                          <p className="text-sm text-neutral-600">{type.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="medical-shadow border-0 bg-gradient-to-br from-medical-accent/10 to-medical-warning/10">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-medical-accent rounded-lg">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">Emergency Support</h3>
                      <p className="text-sm text-neutral-600">Available 24/7</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-medical-accent mb-2">
                    +91 1800-EMERGENCY
                  </p>
                  <p className="text-sm text-neutral-600">
                    For urgent medical assistance and platform emergencies
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Quick answers to common questions about MedoSphere.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-6">
            {[
              {
                question: "How do I register on MedoSphere?",
                answer: "You can register using your phone number, email, or Aadhaar. The process takes less than 2 minutes."
              },
              {
                question: "Is my health data secure?",
                answer: "Yes, we use bank-level encryption and comply with all Indian data protection regulations."
              },
              {
                question: "Can I use MedoSphere offline?",
                answer: "Some features work offline, and data syncs when you're back online. Perfect for areas with poor connectivity."
              },
              {
                question: "What languages is MedoSphere available in?",
                answer: "Currently available in Hindi and English, with more regional languages coming soon."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 medical-shadow border-0">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-medical-primary/10 rounded-full flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-medical-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">{faq.question}</h3>
                    <p className="text-neutral-600">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;