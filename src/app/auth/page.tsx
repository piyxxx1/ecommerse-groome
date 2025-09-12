"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, User, Lock, Mail, Phone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const AuthPage = () => {
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [loginMethod, setLoginMethod] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [loginData, setLoginData] = useState({
    distributorId: "",
    password: "",
    verificationCode: "",
  });

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    distributorId: "",
    password: "",
    confirmPassword: "",
    accountType: "professional",
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginInputChange = (field: string, value: string) => {
    setLoginData(prev => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const handleSignupInputChange = (field: string, value: string) => {
    setSignupData(prev => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const validateLoginForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!loginData.distributorId.trim()) {
      newErrors.distributorId = "Distributor ID is required";
    }

    if (loginMethod === "password") {
      if (!loginData.password.trim()) {
        newErrors.password = "Password is required";
      } else if (loginData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      }
    } else {
      if (!loginData.verificationCode.trim()) {
        newErrors.verificationCode = "Verification code is required";
      } else if (loginData.verificationCode.length < 4) {
        newErrors.verificationCode = "Verification code must be at least 4 digits";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateSignupForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!signupData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!signupData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!signupData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(signupData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!signupData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (signupData.accountType === "professional" && !signupData.distributorId.trim()) {
      newErrors.distributorId = "Distributor ID is required";
    }

    if (!signupData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (signupData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!signupData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (signupData.password !== signupData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateLoginForm()) {
      return;
    }

    setIsLoading(true);
    try {
      console.log("Login data:", loginData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.location.href = "/";
    } catch (error) {
      console.error("Login error:", error);
      setErrors({ general: "Login failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateSignupForm()) {
      return;
    }

    setIsLoading(true);
    try {
      console.log("Signup data:", signupData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.location.href = "/";
    } catch (error) {
      console.error("Signup error:", error);
      setErrors({ general: "Signup failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const switchMode = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-start p-6">
        <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-md">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {authMode === "login" ? "Sign in" : "Create Account"}
            </h1>
            <p className="text-gray-600 mb-4">
              {authMode === "login" ? "Welcome back to Groome" : "Join Groome as a professional"}
            </p>
            <Link href="/" className="inline-block">
              <Image
                src="/navlogo.png"
                alt="Groome"
                width={120}
                height={28}
                priority
                className="mx-auto"
              />
            </Link>
          </div>

          {/* Auth Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {/* Mode Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
              <button
                type="button"
                onClick={() => switchMode("login")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  authMode === "login"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => switchMode("signup")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  authMode === "signup"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* General Error Message */}
            {errors.general && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-6">
                {errors.general}
              </div>
            )}

            {authMode === "login" ? (
              /* Login Form */
              <form onSubmit={handleLoginSubmit} className="space-y-6">
                {/* Login Method Toggle */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-700">Login Method</Label>
                  <RadioGroup
                    value={loginMethod}
                    onValueChange={setLoginMethod}
                    className="flex space-x-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="password" id="password" />
                      <Label htmlFor="password" className="text-sm font-medium cursor-pointer">
                        Password
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="verification" id="verification" />
                      <Label htmlFor="verification" className="text-sm font-medium cursor-pointer">
                        Verification code
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Distributor ID Field */}
                <div className="space-y-2">
                  <Label htmlFor="distributorId" className="text-sm font-medium text-gray-700">
                    Distributor ID
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      id="distributorId"
                      type="text"
                      placeholder="Enter Distributor ID"
                      value={loginData.distributorId}
                      onChange={(e) => handleLoginInputChange("distributorId", e.target.value)}
                      className={`pl-10 h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.distributorId ? "border-red-300 focus:ring-red-500" : ""
                      }`}
                      required
                    />
                  </div>
                  {errors.distributorId && (
                    <p className="text-red-500 text-xs mt-1">{errors.distributorId}</p>
                  )}
                </div>

                {/* Password/Verification Code Field */}
                {loginMethod === "password" ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                        Password
                      </Label>
                      <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        value={loginData.password}
                        onChange={(e) => handleLoginInputChange("password", e.target.value)}
                        className={`pl-10 pr-10 h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.password ? "border-red-300 focus:ring-red-500" : ""
                        }`}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                    )}
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="verificationCode" className="text-sm font-medium text-gray-700">
                      Verification Code
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        id="verificationCode"
                        type="text"
                        placeholder="Enter Verification Code"
                        value={loginData.verificationCode}
                        onChange={(e) => handleLoginInputChange("verificationCode", e.target.value)}
                        className={`pl-10 h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.verificationCode ? "border-red-300 focus:ring-red-500" : ""
                        }`}
                        required
                      />
                    </div>
                    {errors.verificationCode && (
                      <p className="text-red-500 text-xs mt-1">{errors.verificationCode}</p>
                    )}
                  </div>
                )}

                {/* Login Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Signing in..." : "Login"}
                </Button>

                {/* Guest Login Button */}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-xl transition-colors"
                >
                  Guest Login
                </Button>
              </form>
            ) : (
              /* Signup Form */
              <form onSubmit={handleSignupSubmit} className="space-y-5">
                {/* Account Type Selection */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-700">Account Type</Label>
                  <RadioGroup
                    value={signupData.accountType}
                    onValueChange={(value) => handleSignupInputChange("accountType", value)}
                    className="flex space-x-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="professional" id="professional" />
                      <Label htmlFor="professional" className="text-sm font-medium cursor-pointer">
                        Professional
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="customer" id="customer" />
                      <Label htmlFor="customer" className="text-sm font-medium cursor-pointer">
                        Customer
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      value={signupData.firstName}
                      onChange={(e) => handleSignupInputChange("firstName", e.target.value)}
                      className={`h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.firstName ? "border-red-300 focus:ring-red-500" : ""
                      }`}
                      required
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      value={signupData.lastName}
                      onChange={(e) => handleSignupInputChange("lastName", e.target.value)}
                      className={`h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.lastName ? "border-red-300 focus:ring-red-500" : ""
                      }`}
                      required
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter Email Address"
                      value={signupData.email}
                      onChange={(e) => handleSignupInputChange("email", e.target.value)}
                      className={`pl-10 h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.email ? "border-red-300 focus:ring-red-500" : ""
                      }`}
                      required
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter Phone Number"
                      value={signupData.phone}
                      onChange={(e) => handleSignupInputChange("phone", e.target.value)}
                      className={`pl-10 h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.phone ? "border-red-300 focus:ring-red-500" : ""
                      }`}
                      required
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Distributor ID Field (for professionals) */}
                {signupData.accountType === "professional" && (
                  <div className="space-y-2">
                    <Label htmlFor="distributorId" className="text-sm font-medium text-gray-700">
                      Distributor ID
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        id="distributorId"
                        type="text"
                        placeholder="Enter Distributor ID"
                        value={signupData.distributorId}
                        onChange={(e) => handleSignupInputChange("distributorId", e.target.value)}
                        className={`pl-10 h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.distributorId ? "border-red-300 focus:ring-red-500" : ""
                        }`}
                        required
                      />
                    </div>
                    {errors.distributorId && (
                      <p className="text-red-500 text-xs mt-1">{errors.distributorId}</p>
                    )}
                  </div>
                )}

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      value={signupData.password}
                      onChange={(e) => handleSignupInputChange("password", e.target.value)}
                      className={`pl-10 pr-10 h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.password ? "border-red-300 focus:ring-red-500" : ""
                      }`}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      value={signupData.confirmPassword}
                      onChange={(e) => handleSignupInputChange("confirmPassword", e.target.value)}
                      className={`pl-10 pr-10 h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.confirmPassword ? "border-red-300 focus:ring-red-500" : ""
                      }`}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                  )}
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                    I agree to the{" "}
                    <Link href="/terms" className="text-blue-600 hover:text-blue-700 underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                {/* Signup Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              </form>
            )}

            {/* Switch Mode Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {authMode === "login" ? (
                  <>
                    Doesn't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => switchMode("signup")}
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      Create an Account
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => switchMode("login")}
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      Sign in
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
