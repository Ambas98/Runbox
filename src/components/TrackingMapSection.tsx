import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { 
  MapPin, 
  Truck, 
  Package, 
  Clock, 
  CheckCircle,
  Search,
  Navigation
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TrackingMapSection() {
  const trackingSteps = [
    {
      status: "completed",
      title: "Paquete recibido",
      time: "10:15 AM",
      location: "Centro de Distribución CDMX",
      icon: Package
    },
    {
      status: "completed", 
      title: "En tránsito",
      time: "2:30 PM",
      location: "Carretera México-Guadalajara",
      icon: Truck
    },
    {
      status: "active",
      title: "Llegada a destino",
      time: "Estimado 6:45 PM",
      location: "Centro de Distribución GDL",
      icon: MapPin
    },
    {
      status: "pending",
      title: "Entrega programada",
      time: "Mañana 9:00 AM",
      location: "Dirección del destinatario",
      icon: CheckCircle
    }
  ];

  const coverageAreas = [
    { city: "Ciudad de México", packages: "15,340", status: "active" },
    { city: "Guadalajara", packages: "8,920", status: "active" },
    { city: "Monterrey", packages: "7,650", status: "active" },
    { city: "Puebla", packages: "4,280", status: "active" },
    { city: "Tijuana", packages: "3,890", status: "active" },
  ];

  return (
    <section id="seguimiento" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
            Seguimiento Inteligente
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Visibilidad completa de
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}tus envíos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitorea cada paquete en tiempo real con nuestra plataforma de seguimiento 
            avanzada y recibe notificaciones automáticas en cada etapa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Tracking Demo */}
          <div className="space-y-6">
            <Card className="border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Navigation className="h-5 w-5 text-purple-600" />
                  <span>Rastrear paquete</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Ingresa tu número de seguimiento" 
                    defaultValue="RB-2024-001-MX-GDL"
                    className="bg-gray-50"
                  />
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-4 mt-6">
                  {trackingSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                          step.status === 'completed' ? 'bg-green-100 text-green-600' :
                          step.status === 'active' ? 'bg-purple-100 text-purple-600' :
                          'bg-gray-100 text-gray-400'
                        }`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-gray-900">{step.title}</h4>
                            <span className="text-sm text-gray-500">{step.time}</span>
                          </div>
                          <p className="text-sm text-gray-600">{step.location}</p>
                          {step.status === 'active' && (
                            <Badge className="bg-purple-100 text-purple-700 text-xs">
                              En progreso
                            </Badge>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Coverage Areas */}
            <Card className="border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Cobertura Nacional</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {coverageAreas.map((area, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-medium text-gray-900">{area.city}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">{area.packages}</div>
                        <div className="text-xs text-gray-500">paquetes/mes</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Map Visual */}
          <div className="relative">
            <Card className="border-gray-200 shadow-2xl overflow-hidden">
              <div className="aspect-square relative bg-gradient-to-br from-blue-50 to-purple-50">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1742415105376-43d3a5fd03fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3b3JsZCUyMG1hcCUyMGdsb2JhbCUyMGxvZ2lzdGljc3xlbnwxfHx8fDE3NTczOTQ4Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mapa global de logística"
                  className="w-full h-full object-cover opacity-80"
                />
                
                {/* Overlay with route indicators */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                
                {/* Route pins */}
                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-purple-600 rounded-full shadow-lg animate-pulse"></div>
                <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-blue-600 rounded-full shadow-lg animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-green-600 rounded-full shadow-lg animate-pulse"></div>
                
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0.6"/>
                    </linearGradient>
                  </defs>
                  <path 
                    d="M 33% 25% Q 50% 10% 67% 50%" 
                    stroke="url(#routeGradient)" 
                    strokeWidth="3" 
                    fill="none"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                  <path 
                    d="M 67% 50% Q 60% 65% 50% 67%" 
                    stroke="url(#routeGradient)" 
                    strokeWidth="3" 
                    fill="none"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                </svg>
                
                {/* Stats overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Estadísticas en vivo</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-bold text-purple-600">2,847</div>
                        <div className="text-gray-600">Paquetes en tránsito</div>
                      </div>
                      <div>
                        <div className="font-bold text-blue-600">98.5%</div>
                        <div className="text-gray-600">Puntualidad</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}