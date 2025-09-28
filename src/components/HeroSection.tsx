import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Content */}
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted text-foreground">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Seguimiento en tiempo real
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="text-primary">ÚNETE A RUNBOX</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 leading-tight">
                OLVÍDATE DE LA LOGÍSTICA EN EL ENVÍO DE TUS PEDIDOS
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Nos adaptamos a las necesidades de tu empresa, pyme o emprendimiento.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
              >
                Empezar ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary/5 px-8 py-4 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver demo
              </Button>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}