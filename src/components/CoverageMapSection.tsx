import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { AnimatedSection } from "./AnimatedSection";
import { 
  MapPin, 
  CheckCircle, 
  Clock,
  Truck,
  DollarSign,
  Info
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CoverageMapSection() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  const regions = [
    { name: "Región Metropolitana", status: "available", price: "Tarifa única" },
    { name: "Región de Valparaíso", status: "available", price: "Tarifa única" },
    { name: "Región del Biobío", status: "available", price: "Tarifa única" }
  ];

  const pricingTiers = [
    {
      zone: "Región Metropolitana",
      regions: ["Santiago", "Maipú", "Las Condes", "Providencia"],
      price: "Tarifa única",
      delivery: "24-48 hrs",
      color: "green",
      id: "rm"
    },
    {
      zone: "Región de Valparaíso",
      regions: ["Valparaíso", "Viña del Mar", "Quilpué", "San Antonio"],
      price: "Tarifa única", 
      delivery: "24-48 hrs",
      color: "blue",
      id: "valparaiso"
    },
    {
      zone: "Región del Biobío",
      regions: ["Concepción", "Talcahuano", "Chillán", "Los Ángeles"],
      price: "Tarifa única",
      delivery: "48-72 hrs",
      color: "purple",
      id: "biobio"
    }
  ];

  const mapPoints = [
    { id: "rm", name: "Región Metropolitana", x: "42%", y: "55%", color: "green" },
    { id: "valparaiso", name: "Región de Valparaíso", x: "35%", y: "50%", color: "blue" },
    { id: "biobio", name: "Región del Biobío", x: "35%", y: "75%", color: "purple" }
  ];

  return (
    <section id="cobertura" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center space-y-8 mb-20">
          <div className="inline-block px-6 py-3 bg-muted rounded-full text-primary shadow-sm">
            <span className="font-semibold tracking-wide">Tarifa Única</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            Tarifa única en{" "}
            <span className="text-primary">Chile</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Con una tarifa única, no hay sorpresas, lo que facilita la planificación financiera y permite a nuestros clientes concentrarse en sus operaciones, en lugar de preocuparse por variaciones de costos según la ubicación.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Interactive Map Visualization */}
          <AnimatedSection className="lg:col-span-2">
            <Card className="border-gray-200 overflow-hidden shadow-lg">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>Mapa Interactivo de Cobertura</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="relative aspect-[3/4] bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1578362390130-4b9196c3a148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZSUyMGxhbmRzY2FwZSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NTczOTU1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Paisaje de Chile - Cobertura Nacional"
                    className="w-full h-full object-cover opacity-70"
                  />
                  
                  {/* Interactive Coverage Points */}
                  <div className="absolute inset-0">
                    {mapPoints.map((point) => (
                      <motion.div
                        key={point.id}
                        className="absolute cursor-pointer"
                        style={{ left: point.x, top: point.y }}
                        onHoverStart={() => setHoveredPoint(point.id)}
                        onHoverEnd={() => setHoveredPoint(null)}
                        onClick={() => setSelectedRegion(point.id === selectedRegion ? null : point.id)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <motion.div
                          className={`w-5 h-5 rounded-full shadow-lg border-2 border-white ${
                            point.color === 'green' ? 'bg-green-500' :
                            point.color === 'blue' ? 'bg-blue-500' : 'bg-purple-500'
                          }`}
                          animate={{
                            scale: hoveredPoint === point.id ? 1.3 : 1,
                          }}
                        />
                        
                        {/* Point pulse effect */}
                        <motion.div
                          className={`absolute inset-0 rounded-full ${
                            point.color === 'green' ? 'bg-green-500' :
                            point.color === 'blue' ? 'bg-blue-500' : 'bg-purple-500'
                          }`}
                          animate={{
                            scale: [1, 2.5, 1],
                            opacity: [0.8, 0, 0.8],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />

                        {/* Tooltip */}
                        <AnimatePresence>
                          {hoveredPoint === point.id && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.8 }}
                              animate={{ opacity: 1, y: -10, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.8 }}
                              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full bg-white rounded-lg px-3 py-2 shadow-xl border border-gray-200 text-sm font-medium text-gray-900 whitespace-nowrap"
                            >
                              {point.name}
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>

                  {/* Enhanced Stats Overlay */}
                  <motion.div 
                    className="absolute bottom-4 left-4 right-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Card className="bg-white/95 backdrop-blur-sm border-gray-200">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Info className="h-4 w-4 mr-2 text-primary" />
                          Cobertura en tiempo real
                        </h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          {[
                            { icon: CheckCircle, text: "3/3 Regiones activas", color: "text-green-600" },
                            { icon: Truck, text: "180+ vehículos en ruta", color: "text-blue-600" },
                            { icon: Clock, text: "Promedio 2.5 días", color: "text-primary" },
                            { icon: DollarSign, text: "Tarifa única", color: "text-green-600" }
                          ].map((stat, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.7 + index * 0.1 }}
                              className="flex items-center space-x-2"
                            >
                              <stat.icon className={`h-4 w-4 ${stat.color}`} />
                              <span>{stat.text}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Pricing Info */}
          <div className="space-y-8">
            {/* Pricing Tiers */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">Tarifas por Zona</h3>
              </div>
              <div className="p-6 space-y-4">
                {pricingTiers.map((tier, index) => (
                  <div key={index} className="border border-gray-100 rounded-lg p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <h5 className="font-semibold text-gray-900">{tier.zone}</h5>
                      <span className="font-semibold text-primary">{tier.price}</span>
                    </div>
                    <p className="text-sm text-gray-600">{tier.regions.join(", ")}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {tier.delivery}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Regional Coverage List */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg">Regiones Disponibles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-80 overflow-y-auto">
                  {regions.map((region, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">{region.name}</span>
                      </div>
                      <span className="text-sm font-medium text-primary">{region.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-6 text-white text-center space-y-4">
              <h4 className="font-bold">¿Necesitas más cobertura?</h4>
              <p className="text-sm opacity-90">
                Estamos expandiendo a más regiones. Consulta por futuras zonas de cobertura.
              </p>
              <Button className="bg-white text-primary hover:bg-gray-100">
                Consultar Expansión
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}