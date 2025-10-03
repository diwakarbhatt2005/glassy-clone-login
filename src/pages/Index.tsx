import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Lock } from "lucide-react";
import logo from "@/assets/logo.webp";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in attempted with:", email);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="glass-effect w-full max-w-md rounded-3xl p-8 shadow-2xl">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
        </div>

        {/* Welcome Text */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold tracking-wide text-foreground">Welcome Back!</h1>
          <p className="text-sm text-muted-foreground">Sign in to access your personal AI guides</p>
        </div>

        {/* Sign In Form */}
        <form onSubmit={handleSignIn} className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />
            <Input
              glass
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-12"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />
            <Input
              glass
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-12"
              required
            />
          </div>

          {/* Sign In Button */}
          <Button variant="glow" type="submit" className="h-12 w-full rounded-xl text-base">
            Sign In
          </Button>

          {/* Forgot Password Link */}
          <div className="text-center">
            <Button variant="link" type="button" className="text-primary hover:text-primary/80">
              Forgot Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
