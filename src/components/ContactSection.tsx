import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Calculator
} from "lucide-react";

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
            Contáctanos
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Solicita tu 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}cotización gratuita
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Obtén una cotización personalizada en minutos. Nuestro equipo de expertos 
            te ayudará a encontrar la mejor solución para tus necesidades logísticas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Hablemos de tu proyecto
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Estamos aquí para ayudarte a hacer crecer tu negocio con 
                soluciones logísticas a medida. Contacta con nosotros para 
                una consultoría gratuita.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Teléfono</h4>
                  <p className="text-gray-600">+56 9 8669 5083</p>
                  <p className="text-sm text-gray-500">Lun - Vie, 9:00 - 17:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">m.angeles@runbox.cl</p>
                  <p className="text-sm text-gray-500">Respuesta en menos de 2 horas</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Oficinas</h4>
                  <p className="text-gray-600">Av. Las Condes 12523, Torre 3, Oficina 809</p>
                  <p className="text-sm text-gray-500">Visítanos con cita previa</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Chat en vivo</h4>
                  <p className="text-gray-600">Soporte 24/7 disponible</p>
                  <p className="text-sm text-gray-500">Respuesta inmediata</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <span>Horarios de atención</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lunes - Viernes</span>
                  <span className="font-medium">9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábados</span>
                  <span className="font-medium">9:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingos</span>
                  <span className="font-medium">Cerrado</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="text-gray-600">Celular disponible</span>
                  <span className="font-medium text-purple-600">Lun-Vie 9:00-18:00</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card className="border-gray-200 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <Calculator className="h-6 w-6 text-purple-600" />
                  <span>Solicitar cotización</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Nombre completo *
                    </label>
                    <Input placeholder="Tu nombre" className="bg-gray-50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <Input type="email" placeholder="tu@email.com" className="bg-gray-50" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Teléfono *
                    </label>
                    <Input placeholder="+52 (55) 1234-5678" className="bg-gray-50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Empresa
                    </label>
                    <Input placeholder="Nombre de tu empresa" className="bg-gray-50" />
                  </div>
                </div>

                {/* Shipping Details */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 border-b pb-2">
                    Detalles del envío
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Tipo de servicio *
                      </label>
                      <Select>
                        <SelectTrigger className="bg-gray-50">
                          <SelectValue placeholder="Selecciona un servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nacional">Envío Nacional</SelectItem>
                          <SelectItem value="internacional">Envío Internacional</SelectItem>
                          <SelectItem value="express">Envío Express</SelectItem>
                          <SelectItem value="maritimo">Carga Marítima</SelectItem>
                          <SelectItem value="almacenaje">Almacenaje</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Urgencia
                      </label>
                      <Select>
                        <SelectTrigger className="bg-gray-50">
                          <SelectValue placeholder="¿Qué tan urgente?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="same-day">Mismo día</SelectItem>
                          <SelectItem value="next-day">Siguiente día</SelectItem>
                          <SelectItem value="standard">Estándar (2-3 días)</SelectItem>
                          <SelectItem value="economic">Económico (5-7 días)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Ciudad origen *
                      </label>
                      <Input placeholder="¿Desde dónde envías?" className="bg-gray-50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Ciudad destino *
                      </label>
                      <Input placeholder="¿A dónde va?" className="bg-gray-50" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Peso (kg)
                      </label>
                      <Input placeholder="0.5" type="number" className="bg-gray-50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Dimensiones (cm)
                      </label>
                      <Input placeholder="20 x 15 x 10" className="bg-gray-50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Valor declarado ($)
                      </label>
                      <Input placeholder="1000" type="number" className="bg-gray-50" />
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Información adicional
                  </label>
                  <Textarea 
                    placeholder="Cuéntanos más sobre tu proyecto, volumen mensual, necesidades especiales, etc."
                    className="bg-gray-50 min-h-[100px]"
                  />
                </div>

                {/* Submit */}
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar solicitud de cotización
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  * Campos obligatorios. Recibirás una respuesta en menos de 2 horas durante horario laboral.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}