import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { 
  Search, 
  Package, 
  MapPin,
  Clock,
  CheckCircle,
  Truck,
  AlertCircle,
  QrCode,
  Smartphone,
  Bell
} from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "../components/AnimatedSection";

export function SeguimientoPage() {
  const [trackingCode, setTrackingCode] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setShowResult(true);
    }, 1500);
  };

  const demoTrackingData = {
    code: "RB-2024-CHI-3847",
    status: "En tránsito",
    currentLocation: "Centro de Distribución Santiago", 
    destination: "Valparaíso, Región de Valparaíso",
    estimatedDelivery: "Hoy, 16:30 PM",
    progress: 75,
    steps: [
      {
        status: "completed",
        title: "Paquete recibido",
        time: "Ayer, 14:20",
        location: "Sucursal Las Condes, Santiago",
        icon: Package
      },
      {
        status: "completed",
        title: "En clasificación",
        time: "Ayer, 18:45",
        location: "Centro de Distribución Santiago",
        icon: Package
      },
      {
        status: "active",
        title: "En tránsito",
        time: "Hoy, 09:15",
        location: "En ruta hacia Valparaíso",
        icon: Truck
      },
      {
        status: "pending",
        title: "Entregado",
        time: "Estimado: Hoy, 16:30",
        location: "Valparaíso, Región de Valparaíso",
        icon: CheckCircle
      }
    ]
  };

  const features = [
    {
      icon: Smartphone,
      title: "Seguimiento móvil",
      description: "Rastrea tus paquetes desde cualquier dispositivo, en cualquier momento."
    },
    {
      icon: Bell,
      title: "Notificaciones automáticas",
      description: "Recibe actualizaciones por SMS y email en cada etapa del envío."
    },
    {
      icon: MapPin,
      title: "Ubicación en tiempo real",
      description: "Conoce la ubicación exacta de tu paquete durante todo el trayecto."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat opacity-10 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1590497008246-8f3634db768b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFja2luZyUyMHRlY2hub2xvZ3klMjBzdXBwbHklMjBjaGFpbnxlbnwxfHx8fDE3NTc1MjE2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/50" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center space-y-8">
            <div className="inline-block px-4 py-2 bg-white rounded-full text-primary border border-primary/20">
              Seguimiento
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Seguir mi pedido
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ingresa tu código de seguimiento y conoce la ubicación exacta 
              de tu envío en tiempo real.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Tracking Input */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2}>
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Ingresa tu código de seguimiento
                </h2>
                <p className="text-gray-600">
                  Formato: RB-2024-CHI-XXXX (ejemplo: RB-2024-CHI-3847)
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <Input
                    placeholder="RB-2024-CHI-XXXX"
                    value={trackingCode}
                    onChange={(e) => setTrackingCode(e.target.value)}
                    className="flex-1 text-lg py-4 px-6 bg-gray-50"
                  />
                  <Button
                    size="lg"
                    onClick={handleSearch}
                    disabled={isSearching || !trackingCode}
                    className="bg-primary hover:bg-primary/90 text-white px-10 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 md:w-auto w-full"
                  >
                    {isSearching ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Buscando...
                      </>
                    ) : (
                      <>
                        <Search className="mr-2 h-5 w-5" />
                        Buscar
                      </>
                    )}
                  </Button>
                </div>

                <div className="text-center">
                  <Button variant="outline" className="bg-primary hover:bg-primary/90 text-white px-10 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <QrCode className="mr-2 h-4 w-4" />
                    Escanear código QR
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Demo Tracking Result */}
      {showResult && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <Card className="border-gray-200 shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl text-gray-900">
                        Código: {demoTrackingData.code}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                          {demoTrackingData.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <div>Destino: {demoTrackingData.destination}</div>
                      <div className="font-semibold text-primary">
                        ETA: {demoTrackingData.estimatedDelivery}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  {/* Progress Bar */}
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progreso del envío</span>
                      <span className="font-semibold text-primary">{demoTrackingData.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-primary rounded-full h-3 transition-all duration-1000"
                        style={{ width: `${demoTrackingData.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Current Location */}
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-6 w-6 text-blue-600" />
                        <div>
                          <h4 className="font-semibold text-blue-900">Ubicación actual</h4>
                          <p className="text-blue-700">{demoTrackingData.currentLocation}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Timeline */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">Historial de seguimiento</h3>
                    <div className="space-y-6">
                      {demoTrackingData.steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                          <div key={index} className="flex items-start space-x-4">
                            <div className={`
                              p-2 rounded-full flex-shrink-0
                              ${step.status === 'completed' ? 'bg-green-100' : 
                                step.status === 'active' ? 'bg-blue-100' : 'bg-gray-100'}
                            `}>
                              <Icon className={`
                                h-5 w-5
                                ${step.status === 'completed' ? 'text-green-600' : 
                                  step.status === 'active' ? 'text-blue-600' : 'text-gray-400'}
                              `} />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className={`
                                  font-semibold
                                  ${step.status === 'completed' ? 'text-green-900' : 
                                    step.status === 'active' ? 'text-blue-900' : 'text-gray-500'}
                                `}>
                                  {step.title}
                                </h4>
                                <span className="text-sm text-gray-500">{step.time}</span>
                              </div>
                              <p className={`
                                text-sm mt-1
                                ${step.status === 'completed' ? 'text-green-700' : 
                                  step.status === 'active' ? 'text-blue-700' : 'text-gray-400'}
                              `}>
                                {step.location}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                    <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex-1">
                      <Bell className="mr-2 h-4 w-4" />
                      Activar notificaciones
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <MapPin className="mr-2 h-4 w-4" />
                      Ver en mapa
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-6 mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Seguimiento inteligente
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tecnología avanzada para manterte informado en cada momento
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedSection key={index} delay={0.1 + index * 0.1}>
                  <Card className="border-gray-200 hover:shadow-lg transition-shadow text-center">
                    <CardContent className="p-8 space-y-6">
                      <div className="bg-primary p-4 rounded-lg w-16 h-16 mx-auto flex items-center justify-center">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card className="border-gray-200">
              <CardContent className="p-8 text-center space-y-6">
                <AlertCircle className="h-12 w-12 text-orange-500 mx-auto" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  ¿No encuentras tu paquete?
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Si tienes problemas para encontrar tu envío o el código no funciona, 
                  nuestro equipo de atención al cliente está aquí para ayudarte.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-primary hover:bg-primary/90">
                    Contactar Soporte
                  </Button>
                  <Button variant="outline">
                    Ver Preguntas Frecuentes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}