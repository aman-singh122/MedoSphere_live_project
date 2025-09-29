import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  FileText, 
  BarChart3, 
  BookOpen, 
  Pill,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Activity
} from 'lucide-react';
import heroImage from '../assets/hero-doctor.png';

const LandingPage = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Book OPD',
      description: 'Schedule appointments with doctors and healthcare providers in your area.',
      color: 'text-medical-primary'
    },
    {
      icon: FileText,
      title: 'Record Access',
      description: 'Secure digital health records accessible anytime, anywhere.',
      color: 'text-medical-secondary'
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Track your health metrics and get insights from your medical data.',
      color: 'text-medical-accent'
    },
    {
      icon: BookOpen,
      title: 'Health Library',
      description: 'Access trusted medical information and health education resources.',
      color: 'text-medical-success'
    },
    {
      icon: Pill,
      title: 'Medicine Tracker',
      description: 'Monitor medication availability and manage prescriptions.',
      color: 'text-medical-warning'
    }
  ];

  const benefits = [
    'Virtual & In-Person Appointments',
    'Covered by Most Major Insurance',
    'Compassionate, Collaborative Care',
    'Unlimited Visits',
    'Expert Health Providers',
    '50,000+ Patients Served'
  ];

  const stats = [
    { value: '10,000+', label: 'Patients Served' },
    { value: '500+', label: 'Healthcare Providers' },
    { value: '50+', label: 'Rural Areas Covered' },
    { value: '24/7', label: 'Emergency Support' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Professional healthcare provider" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 medical-gradient opacity-90"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="animate-slide-up">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-medical-accent/20 text-medical-accent rounded-full text-sm font-medium mb-4">
                  Transforming Rural Healthcare
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Digitizing Rural Healthcare for{' '}
                  <span className="text-medical-accent">India's Future</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  Book OPD, access records, track medicines — all in one platform. 
                  Connecting patients, doctors, and healthcare providers across rural India.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/booking">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    Get Care Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-medical-primary">
                    Learn Features
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-md">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-float">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 medical-shadow">
                <img 
                  src={heroImage} 
                  alt="Healthcare professional providing care"
                  className="w-full h-auto rounded-xl medical-shadow"
                />
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-medical-accent text-white p-3 rounded-full animate-pulse-soft">
                  <Activity className="h-6 w-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-medical-success text-white p-3 rounded-full animate-pulse-soft" style={{animationDelay: '1s'}}>
                  <CheckCircle className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our platform provides end-to-end healthcare services designed specifically for rural India's unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl medical-shadow hover:scale-105 medical-transition group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-medical-primary to-medical-secondary flex items-center justify-center mb-6 group-hover:scale-110 medical-transition`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/features">
              <Button variant="medical" size="lg">
                Explore All Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Why Choose MedoSphere?
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                We're committed to making quality healthcare accessible to every corner of rural India through innovative technology and compassionate care.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-medical-success flex-shrink-0" />
                    <span className="text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/auth/signup">
                  <Button variant="hero" size="lg">
                    Join MedoSphere Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-medical-primary to-medical-secondary p-8 rounded-2xl text-white">
                <div className="flex items-center mb-6">
                  <Star className="h-6 w-6 text-medical-accent mr-2" />
                  <span className="text-lg font-semibold">Trusted by Thousands</span>
                </div>
                
                <blockquote className="text-lg leading-relaxed mb-6">
                  "MedoSphere has revolutionized healthcare access in our village. Now we can consult with specialists without traveling hours to the city."
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-medical-accent rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Priya Sharma</div>
                    <div className="text-white/80">Patient from Rajasthan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 medical-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare in Your Community?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of patients, doctors, and healthcare providers who are already using MedoSphere to improve health outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Book Your First Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-medical-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;