
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Upload, User, Mail, Lock, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AuthFormProps {
  onAuthSuccess?: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onAuthSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    age: ''
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSignUp) {
      // Simulate sign up success
      toast({
        title: "Account created successfully!",
        description: `Welcome to ExChain, ${formData.username}!`,
      });
      // Switch to sign in after successful sign up
      setIsSignUp(false);
      setFormData({ email: '', password: '', username: '', age: '' });
      setProfileImage(null);
    } else {
      // Simulate sign in success
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in to ExChain.",
      });
      onAuthSuccess?.();
    }
  };

  const handleForgotPassword = () => {
    toast({
      title: "Password reset link sent",
      description: "Check your email for password reset instructions.",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-white">EX</span>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800">
              {isSignUp ? 'Join ExChain' : 'Welcome Back'}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {isSignUp 
                ? 'Create your account to get started' 
                : 'Sign in to your ExChain account'
              }
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <>
                  {/* Profile Picture Upload */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center border-4 border-green-200 overflow-hidden">
                        {profileImage ? (
                          <img 
                            src={profileImage} 
                            alt="Profile" 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="w-8 h-8 text-green-600" />
                        )}
                      </div>
                      <label htmlFor="profile-upload" className="absolute -bottom-2 -right-2 bg-green-500 hover:bg-green-600 text-white rounded-full p-2 cursor-pointer transition-colors shadow-lg">
                        <Upload className="w-4 h-4" />
                      </label>
                      <input
                        id="profile-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </div>
                  </div>

                  {/* Username */}
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-gray-700 font-medium">Username</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={(e) => handleInputChange('username', e.target.value)}
                        className="pl-10 border-gray-200 focus:border-green-500 focus:ring-green-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Age */}
                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-gray-700 font-medium">Age</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="age"
                        type="number"
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        className="pl-10 border-gray-200 focus:border-green-500 focus:ring-green-500"
                        required
                        min="13"
                        max="120"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="pl-10 border-gray-200 focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="pl-10 pr-10 border-gray-200 focus:border-green-500 focus:ring-green-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {isSignUp ? 'Create Account' : 'Sign In'}
              </Button>
            </form>

            {/* Forgot Password (only for sign in) */}
            {!isSignUp && (
              <div className="text-center">
                <button
                  onClick={handleForgotPassword}
                  className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
                >
                  Forgot your password?
                </button>
              </div>
            )}

            {/* Toggle between Sign In and Sign Up */}
            <div className="text-center pt-4 border-t border-gray-100">
              <p className="text-gray-600 text-sm">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              </p>
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setFormData({ email: '', password: '', username: '', age: '' });
                  setProfileImage(null);
                }}
                className="text-green-600 hover:text-green-700 font-semibold transition-colors mt-1"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthForm;
