import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  Phone, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Shield, 
  FileText,
  ArrowRight
} from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState('phone');
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    password: '',
    otp: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    console.log('Login attempted with:', formData);
    // Redirect to dashboard based on user role
  };

  const handleOTPLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock OTP verification
    console.log('OTP verification for:', loginMethod === 'phone' ? formData.phone : formData.email);
  };

  const handleAadhaarLogin = () => {
    // Mock Aadhaar integration
    console.log('Aadhaar authentication initiated');
  };

  const handleDigiLockerLogin = () => {
    // Mock DigiLocker integration
    console.log('DigiLocker authentication initiated');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-primary/5 to-medical-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="medical-shadow">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 medical-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">M</span>
            </div>
            <CardTitle className="text-2xl font-bold text-medical-primary">
              Welcome Back
            </CardTitle>
            <CardDescription>
              Sign in to your MedoSphere account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="credentials" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="credentials">Password</TabsTrigger>
                <TabsTrigger value="otp">OTP</TabsTrigger>
              </TabsList>

              {/* Password Login */}
              <TabsContent value="credentials">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        className="pl-10 pr-10"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-neutral-400 hover:text-neutral-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded border-neutral-300" />
                      <span>Remember me</span>
                    </label>
                    <Link to="/auth/forgot-password" className="text-sm text-medical-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>

                  <Button type="submit" variant="medical" className="w-full" size="lg">
                    Sign In
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </TabsContent>

              {/* OTP Login */}
              <TabsContent value="otp">
                <div className="space-y-4">
                  <Tabs value={loginMethod} onValueChange={setLoginMethod}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="phone">Phone</TabsTrigger>
                      <TabsTrigger value="email">Email</TabsTrigger>
                    </TabsList>

                    <TabsContent value="phone" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            className="pl-10"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                          />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="email" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email-otp">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                          <Input
                            id="email-otp"
                            type="email"
                            placeholder="your.email@domain.com"
                            className="pl-10"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                          />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => console.log('Send OTP')}
                  >
                    Send OTP
                  </Button>

                  <div className="space-y-2">
                    <Label htmlFor="otp">Enter OTP</Label>
                    <Input
                      id="otp"
                      type="text"
                      placeholder="6-digit OTP"
                      className="text-center text-lg tracking-wider"
                      maxLength={6}
                      value={formData.otp}
                      onChange={(e) => handleInputChange('otp', e.target.value)}
                    />
                  </div>

                  <Button 
                    variant="medical" 
                    className="w-full"
                    size="lg"
                    onClick={handleOTPLogin}
                  >
                    Verify & Sign In
                  </Button>
                </div>
              </TabsContent>
            </Tabs>

            {/* Government Integration Section */}
            <div className="mt-6">
              <Separator className="my-4" />
              <p className="text-center text-sm text-neutral-600 mb-4">
                Or sign in with government services
              </p>
              
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleAadhaarLogin}
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Sign in with Aadhaar
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleDigiLockerLogin}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Sign in with DigiLocker
                </Button>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-neutral-600">
                Don't have an account?{' '}
                <Link to="/auth/signup" className="text-medical-primary hover:underline font-medium">
                  Sign up for free
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-4 text-center">
          <p className="text-xs text-neutral-500">
            Your data is protected with end-to-end encryption
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;