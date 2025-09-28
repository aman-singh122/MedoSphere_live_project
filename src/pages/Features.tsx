import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calendar, 
  FileText, 
  BarChart3, 
  BookOpen, 
  Pill,
  Users,
  Clock,
  Shield,
  Smartphone,
  Globe,
  Heart,
  Activity,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const coreFeatures = [
    {
      icon: Calendar,
      title: 'Smart OPD Booking',
      description: 'Book appointments with local healthcare providers, check real-time availability, and get instant confirmations.',
      benefits: [
        'Real-time doctor availability',
        'Instant appointment confirmation',
        'Reminder notifications',
        'Easy rescheduling options'
      ],
      color: 'from-medical-primary to-medical-secondary'
    },
    {
      icon: FileText,
      title: 'Digital Health Records',
      description: 'Secure, portable health records that follow you wherever you go. Access your complete medical history anytime.',
      benefits: [
        'Lifetime medical history',
        'Secure encrypted storage',
        'Easy sharing with doctors',
        'Multi-language support'
      ],
      color: 'from-medical-secondary to-medical-primary-light'
    },
    {
      icon: BarChart3,
      title: 'Health Analytics',
      description: 'Track your health metrics, medication adherence, and get personalized insights from your medical data.',
      benefits: [
        'Health trend monitoring',
        'Medication reminders',
        'Personalized insights',
        'Risk factor analysis'
      ],
      color: 'from-medical-accent to-medical-warning'
    },
    {
      icon: BookOpen,
      title: 'Health Library',
      description: 'Access trusted medical information, health education resources, and disease prevention guides in local languages.',
      benefits: [
        'Evidence-based content',
        'Local language support',
        'Video consultations',
        'Community health tips'
      ],
      color: 'from-medical-success to-medical-primary-light'
    },
    {
      icon: Pill,
      title: 'Medicine Tracker',
      description: 'Monitor medication availability in nearby pharmacies, track prescriptions, and get alerts for refills.',
      benefits: [
        'Real-time inventory tracking',
        'Prescription management',
        'Automatic refill reminders',
        'Price comparison'
      ],
      color: 'from-medical-warning to-medical-accent'
    }
  ];

  const additionalFeatures = [
    {
      icon: Users,
      title: 'Telemedicine',
      description: 'Connect with specialists through video consultations when physical visits aren\'t possible.'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Support',
      description: 'Round-the-clock emergency assistance and quick access to nearby emergency services.'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Bank-level security with end-to-end encryption to protect your sensitive health information.'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Optimized for mobile devices with offline capabilities for areas with poor connectivity.'
    },
    {
      icon: Globe,
      title: 'Multi-language',
      description: 'Available in Hindi, English, and major regional languages for better accessibility.'
    },
    {
      icon: Heart,
      title: 'Wellness Programs',
      description: 'Participate in community health programs and preventive care initiatives.'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="medical-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Healthcare Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover how MedoSphere is transforming rural healthcare with innovative features designed for India's unique challenges.
          </p>
          <Link to="/booking">
            <Button variant="hero" size="lg">
              Try Features Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Core Platform Features
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Five essential tools that make healthcare accessible, affordable, and efficient for rural communities.
            </p>
          </div>

          <div className="space-y-12">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="overflow-hidden medical-shadow border-0">
                  <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                  <div className="grid lg:grid-cols-2 gap-8 p-8">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mr-4`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-900">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                        {feature.description}
                      </p>
                      <Link to="/booking">
                        <Button variant="outline" className="group">
                          Try This Feature
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                    
                    <div className="bg-neutral-50 rounded-xl p-6">
                      <h4 className="font-semibold text-neutral-900 mb-4">Key Benefits:</h4>
                      <ul className="space-y-3">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-medical-success flex-shrink-0" />
                            <span className="text-neutral-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Additional Platform Capabilities
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Supporting features that enhance the overall healthcare experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 medical-shadow hover:scale-105 medical-transition border-0">
                  <div className="w-12 h-12 medical-gradient rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Diagram */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              How MedoSphere Works
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A simple, streamlined process from patient registration to treatment completion.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4 md:gap-8">
              {[
                { step: '1', title: 'Patient Registers', icon: Users, desc: 'Sign up with phone/Aadhaar' },
                { step: '2', title: 'Book OPD', icon: Calendar, desc: 'Schedule appointment' },
                { step: '3', title: 'Doctor Consult', icon: Activity, desc: 'Virtual or in-person' },
                { step: '4', title: 'Get Prescription', icon: FileText, desc: 'Digital e-prescription' },
                { step: '5', title: 'Medicine Access', icon: Pill, desc: 'Check availability' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 medical-gradient rounded-full flex items-center justify-center mx-auto mb-2">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-medical-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {item.step}
                      </div>
                      {index < 4 && (
                        <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-medical-primary/30 transform translate-x-2"></div>
                      )}
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-neutral-600">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 medical-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Better Healthcare?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already benefiting from MedoSphere's comprehensive healthcare platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth/signup">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Start Your Health Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-medical-primary">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;