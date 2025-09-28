import { Package, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 grid md:grid-cols-2 gap-4">
          {/* Company Info */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <Package className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">
                  RUNBOX
                </span>
                <span className="text-xs text-secondary uppercase tracking-wider">
                  EN TIEMPO Y FORMA
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-snug max-w-md">
              Conectamos Chile con soluciones logísticas confiables en las regiones RM, Valparaíso y Biobío.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h4 className="text-base font-semibold">Contacto</h4>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+56 9 8669 5083</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>m.angeles@runbox.cl</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Av. Las Condes 12523, Torre 3, Oficina 809, Las Condes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-2 border-t border-gray-800 text-center">
          <div className="text-gray-400 text-sm">
            © 2024 Runbox. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}