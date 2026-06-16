import LoginForm from "@/components/form/auth/login/login-form";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function register() {
  return (
    <div className="relative min-h-screen flex flex items-center justify-center overflow-hidden py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-primary/20 to-chart-1/20 blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 left-1/4 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-chart-1/15 to-primary/15 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <Link
        href="/"
        className="absolute top-8 left-8 z-20 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        <span>Zurück zur Startseite</span>
      </Link>

      <Card className="relative z-10 w-full max-w-md mx-4 border-border/40 bg-card/60 backdrop-blur-2xl shadow-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Willkommen zurück 🎉
          </CardTitle>
          <CardDescription className="text-center text-base">
            Logge dich ein
          </CardDescription>
        </CardHeader>
        {/* Login Form */}
        <LoginForm />
      </Card>
    </div>
  );
}
