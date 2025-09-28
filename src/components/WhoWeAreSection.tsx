import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Target, 
  Heart, 
  Shield, 
  Users,
  Award,
  Truck
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function WhoWeAreSection() {
  const values = [
    {
      icon: Target,
      title: "Misión",
      description: "Conectar Chile de norte a sur con un servicio de logística confiable, rápido y accesible para todos."
    },
    {
      icon: Heart,
      title: "Compromiso",
      description: "Cuidamos cada envío como si fuera nuestro, garantizando la máxima seguridad y puntualidad."
    },
    {
      icon: Shield,
      title: "Confianza",
      description: "Más de 10 años construyendo relaciones sólidas con nuestros clientes en todo el territorio nacional."
    }
  ];

  const stats = [
    { number: "15K+", label: "Entregas mensuales" },
    { number: "20+", label: "Años de experiencia" },
    { number: "99%", label: "Éxito en entregas" },
    { number: "24/7", label: "Atención al cliente" }
  ];

  return (
    <section id="quienes-somos" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-block px-4 py-2 bg-white rounded-full text-primary border border-primary/20">
            Quiénes Somos
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            Líderes en logística en todo Chile
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos una empresa chilena que conoce el mercado de la última milla, tenemos más de 20 años de experiencia, más de 15.000 entregas mensuales y más de un 99% de éxito en la entrega. Nos adaptamos a las necesidades de tu empresa, pyme o emprendimiento, buscando siempre la eficiencia y entregando un servicio de primer nivel.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900">
                Nuestra historia comenzó en Chile
              </h3>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Desde 2014, Runbox ha sido pionera en transformar la logística chilena. 
                  Comenzamos como una pequeña empresa familiar en Santiago y hoy somos 
                  la red de distribución más confiable del país.
                </p>
                <p>
                  Entendemos los desafíos únicos de la geografía chilena: desde el desierto 
                  de Atacama hasta los fiordos patagónicos. Por eso hemos desarrollado 
                  soluciones específicas para cada región, garantizando que tu paquete 
                  llegue a destino sin importar la distancia.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-8">
              <h4 className="text-2xl font-bold text-gray-900">Nuestros valores</h4>
              <div className="space-y-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary p-3 rounded-lg flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 text-lg">{value.title}</h5>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560462162-88f0dcc57ce0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB0ZWFtJTIwb2ZmaWNlJTIwcHJvZmVzc2lvbmFsc3xlbnwxfHx8fDE3NTczOTU1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipo profesional de Runbox"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-24 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}