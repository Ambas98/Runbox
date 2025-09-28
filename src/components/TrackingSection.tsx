import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Search, 
  Package, 
  MapPin,
  Clock,
  CheckCircle,
  Truck,
  AlertCircle
} from "lucide-react";
import { useState } from "react";

export function TrackingSection() {
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
        location: "Ruta Santiago - Valparaíso",
        icon: Truck
      },
      {
        status: "pending",
        title: "En reparto local",
        time: "Estimado 15:30",
        location: "Centro de Distribución Valparaíso",
        icon: MapPin
      },
      {
        status: "pending", 
        title: "Entregado",
        time: "Estimado 16:30",
        location: "Dirección de destino",
        icon: CheckCircle
      }
    ]
  };

  return (
    <section id="seguimiento" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full text-primary border border-primary/20">
            Seguimiento
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Seguir mi pedido
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ingresa tu código de seguimiento y conoce la ubicación exacta 
            de tu envío en tiempo real.
          </p>
        </div>

        {/* Tracking Input */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Ingresa tu código de seguimiento
            </h3>
          </div>
          
          <div className="space-y-6">
            <div className="flex space-x-3 max-w-lg mx-auto">
              <Input 
                placeholder="RB-2024-CHI-3847"
                value={trackingCode}
                onChange={(e) => setTrackingCode(e.target.value)}
                className="text-center text-lg h-14 bg-gray-50 border-gray-200"
              />
              <Button 
                onClick={handleSearch}
                disabled={isSearching || !trackingCode}
                className="bg-primary hover:bg-primary/90 h-14 px-8 text-lg"
              >
                {isSearching ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Buscando...</span>
                  </div>
                ) : (
                  <>
                    <Search className="h-5 w-5 mr-2" />
                    Buscar
                  </>
                )}
              </Button>
            </div>
            
            <div className="text-center">
              <Button 
                variant="link" 
                onClick={() => {
                  setTrackingCode("RB-2024-CHI-3847");
                  setShowResult(true);
                }}
                className="text-primary hover:text-primary/80"
              >
                Ver ejemplo de seguimiento
              </Button>
            </div>
          </div>
        </div>

        {/* Tracking Results */}
        {showResult && (
          <Card className="border-gray-200 shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Package className="h-6 w-6 text-purple-600" />
                  <span>Seguimiento: {demoTrackingData.code}</span>
                </CardTitle>
                <Badge className="bg-green-100 text-green-700">
                  {demoTrackingData.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Current Status */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">Estado actual</h4>
                    <p className="text-gray-600">{demoTrackingData.currentLocation}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-purple-600">
                      Entrega estimada
                    </div>
                    <div className="text-gray-900">{demoTrackingData.estimatedDelivery}</div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Progreso del envío</span>
                    <span>{demoTrackingData.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${demoTrackingData.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>Destino: {demoTrackingData.destination}</span>
                  </div>
                </div>
              </div>

              {/* Tracking Timeline */}
              <div className="space-y-6">
                <h4 className="font-semibold text-gray-900">Historial del envío</h4>
                <div className="space-y-4">
                  {demoTrackingData.steps.map((step, index) => {
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
                            <h5 className={`font-medium ${
                              step.status === 'completed' ? 'text-gray-900' :
                              step.status === 'active' ? 'text-purple-600' :
                              'text-gray-500'
                            }`}>
                              {step.title}
                            </h5>
                            <span className="text-sm text-gray-500">{step.time}</span>
                          </div>
                          <p className="text-sm text-gray-600">{step.location}</p>
                          {step.status === 'active' && (
                            <Badge className="bg-purple-100 text-purple-700 text-xs">
                              Proceso actual
                            </Badge>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                  <h5 className="font-medium text-blue-900">Información importante</h5>
                </div>
                <ul className="text-sm text-blue-800 space-y-1 pl-7">
                  <li>• Asegúrate de que alguien esté disponible en la dirección de entrega</li>
                  <li>• Si no estás disponible, el paquete será llevado a la sucursal más cercana</li>
                  <li>• Recibirás una notificación por SMS cuando esté listo para la entrega</li>
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Recibir notificaciones por SMS
                </Button>
                <Button variant="outline" className="border-gray-300">
                  Reagendar entrega
                </Button>
                <Button variant="outline" className="border-gray-300">
                  Contactar soporte
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Help Section */}
        <div className="mt-8 text-center space-y-4">
          <h4 className="font-semibold text-gray-900">¿No encuentras tu código de seguimiento?</h4>
          <p className="text-gray-600">
            El código de seguimiento se envía por email cuando se procesa tu envío. 
            Revisa tu bandeja de entrada y carpeta de spam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
              Contactar soporte
            </Button>
            <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
              Preguntas frecuentes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}