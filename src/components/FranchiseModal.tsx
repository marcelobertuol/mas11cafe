import React, { useState } from 'react';
import { X, Building2, Sparkles, Coffee, Send, Mail, MessageCircle, CheckCircle2, MapPin, Briefcase, Phone, User, Store, Zap, RefreshCw } from 'lucide-react';
import { STORE_INFO } from '../data/coffeeData';

interface FranchiseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FranchiseModal: React.FC<FranchiseModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    province: 'CABA',
    locality: '',
    hasStore: 'No, en búsqueda activa de local',
    investmentRange: 'USD 15.000 a USD 25.000',
    experience: 'Sin experiencia previa',
    message: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const buildSummaryText = () => {
    return `SOLICITUD DE FRANQUICIA - +11 CAFÉ AL PASO
---------------------------------------
👤 Datos del Postulante:
• Nombre: ${formData.fullName}
• Email: ${formData.email}
• Teléfono: ${formData.phone}

📍 Ubicación Pretendida:
• Provincia: ${formData.province}
• Localidad/Barrio: ${formData.locality || 'No especificada'}
• Estado de Local: ${formData.hasStore}

💼 Perfil e Inversión:
• Capital Estimado: ${formData.investmentRange}
• Experiencia Previa: ${formData.experience}

💬 Comentarios / Consultas:
${formData.message || 'Sin comentarios adicionales'}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Solicitud de Franquicia +11 Café - ${formData.fullName || 'Consulta'}`);
    const body = encodeURIComponent(buildSummaryText());
    return `mailto:${STORE_INFO.email}?subject=${subject}&body=${body}`;
  };

  const getWhatsappUrl = () => {
    const text = encodeURIComponent(buildSummaryText());
    const rawNum = STORE_INFO.whatsappNumber.replace(/[^0-9]/g, '');
    return `https://wa.me/${rawNum}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Trigger mailto directly
    window.location.href = getMailtoUrl();
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      province: 'CABA',
      locality: '',
      hasStore: 'No, en búsqueda activa de local',
      investmentRange: 'USD 15.000 a USD 25.000',
      experience: 'Sin experiencia previa',
      message: ''
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-[#FFF8F0] rounded-3xl max-w-2xl w-full p-5 sm:p-8 border border-[#6D4327]/20 shadow-2xl relative overflow-hidden my-auto max-h-[92vh] overflow-y-auto">
        
        {/* Background accent blur */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#F49B1A]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#6D4327]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-white/90 text-[#2C221E] hover:bg-white border border-[#6D4327]/15 flex items-center justify-center transition-all shadow-sm z-20 cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EA7C12] text-white font-black text-xs uppercase tracking-wider mb-2 shadow-xs">
            <Building2 className="w-3.5 h-3.5" />
            <span>FRANQUICIAS +11 CAFÉ AL PASO</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-[#2C221E] tracking-tight uppercase leading-tight mt-1">
            Postulación de Franquicia
          </h2>

          <p className="text-stone-600 text-xs sm:text-sm mt-1.5 max-w-lg mx-auto font-medium leading-relaxed">
            Completá tus datos para recibir la presentación comercial e iniciar el proceso de evaluación. Los datos serán enviados directamente a <strong>{STORE_INFO.email}</strong>.
          </p>

          {/* Value props */}
          <div className="grid grid-cols-3 gap-2 mt-4 text-left">
            <div className="bg-white/90 p-2.5 rounded-2xl border border-[#6D4327]/10 shadow-2xs">
              <div className="flex items-center gap-1.5 text-[#EA7C12] font-black text-[11px] sm:text-xs uppercase">
                <Store className="w-3.5 h-3.5 shrink-0" />
                <span>Llave en Mano</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-stone-500 mt-0.5 leading-tight hidden sm:block">Locales desde 15 m² con baja complejidad.</p>
            </div>

            <div className="bg-white/90 p-2.5 rounded-2xl border border-[#6D4327]/10 shadow-2xs">
              <div className="flex items-center gap-1.5 text-[#EA7C12] font-black text-[11px] sm:text-xs uppercase">
                <Zap className="w-3.5 h-3.5 shrink-0" />
                <span>Alta Rotación</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-stone-500 mt-0.5 leading-tight hidden sm:block">Servicio &lt; 3 min y flujo urbano continuo.</p>
            </div>

            <div className="bg-white/90 p-2.5 rounded-2xl border border-[#6D4327]/10 shadow-2xs">
              <div className="flex items-center gap-1.5 text-[#EA7C12] font-black text-[11px] sm:text-xs uppercase">
                <Coffee className="w-3.5 h-3.5 shrink-0" />
                <span>Café Autor</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-stone-500 mt-0.5 leading-tight hidden sm:block">Granos 100% Caturra trazables de origen.</p>
            </div>
          </div>
        </div>

        {submitted ? (
          /* Success Screen */
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#6D4327]/15 shadow-sm text-center animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-black text-[#2C221E] uppercase">
              ¡Solicitud Generada!
            </h3>

            <p className="text-stone-600 text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed">
              Hemos preparado el correo con toda tu información. Si tu aplicación de correo no se abrió automáticamente, hacé clic en los botones de abajo para enviarla por Mail o WhatsApp:
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={getMailtoUrl()}
                className="flex-1 py-3.5 px-4 bg-[#2C221E] hover:bg-[#42322C] text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#EA7C12]" />
                <span>Enviar Mail ({STORE_INFO.email})</span>
              </a>

              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enviar por WhatsApp Directo</span>
              </a>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="mt-5 text-xs font-bold text-stone-500 hover:text-[#2C221E] underline inline-flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Volver a completar el formulario</span>
            </button>
          </div>
        ) : (
          /* Application Form */
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            
            {/* 1. Datos Personales */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#6D4327]/10 shadow-2xs space-y-3">
              <h3 className="text-xs font-black text-[#2C221E] uppercase tracking-wider flex items-center gap-2 border-b border-stone-100 pb-2">
                <User className="w-4 h-4 text-[#EA7C12]" />
                <span>1. Datos Personales y Contacto</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-extrabold text-stone-700 uppercase mb-1">
                    Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Ej: Sofía Rodríguez"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 text-xs focus:bg-white focus:border-[#EA7C12] focus:ring-2 focus:ring-[#EA7C12]/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold text-stone-700 uppercase mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ejemplo@correo.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 text-xs focus:bg-white focus:border-[#EA7C12] focus:ring-2 focus:ring-[#EA7C12]/20 outline-none transition-all"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-extrabold text-stone-700 uppercase mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ej: +54 9 11 1234-5678"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 text-xs focus:bg-white focus:border-[#EA7C12] focus:ring-2 focus:ring-[#EA7C12]/20 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Ubicación Proyectada */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#6D4327]/10 shadow-2xs space-y-3">
              <h3 className="text-xs font-black text-[#2C221E] uppercase tracking-wider flex items-center gap-2 border-b border-stone-100 pb-2">
                <MapPin className="w-4 h-4 text-[#EA7C12]" />
                <span>2. Ubicación Proyectada para la Franquicia</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-extrabold text-stone-700 uppercase mb-1">
                    Provincia *
                  </label>
                  <select
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 text-xs focus:bg-white focus:border-[#EA7C12] focus:ring-2 focus:ring-[#EA7C12]/20 outline-none transition-all"
                  >
                    <option value="CABA">CABA (Buenos Aires)</option>
                    <option value="Buenos Aires GBA">Buenos Aires (GBA / Zona Norte/Sur/Oeste)</option>
                    <option value="Buenos Aires Interior">Buenos Aires (Interior / Costa)</option>
                    <option value="Córdoba">Córdoba</option>
                    <option value="Santa Fe">Santa Fe (Rosario / Capital)</option>
                    <option value="Mendoza">Mendoza</option>
                    <option value="Tucumán">Tucumán</option>
                    <option value="Neuquén">Neuquén</option>
                    <option value="Salta">Salta</option>
                    <option value="Otra provincia">Otra provincia de Argentina</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold text-stone-700 uppercase mb-1">
                    Localidad / Barrio de Interés
                  </label>
                  <input
                    type="text"
                    name="locality"
                    value={formData.locality}
                    onChange={handleChange}
                    placeholder="Ej: Palermo, Recoleta, Centro, etc."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 text-xs focus:bg-white focus:border-[#EA7C12] focus:ring-2 focus:ring-[#EA7C12]/20 outline-none transition-all"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-extrabold text-stone-700 uppercase mb-1">
                    ¿Disponés de Local Comercial Actualmente?
                  </label>
                  <select
                    name="hasStore"
                    value={formData.hasStore}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 text-xs focus:bg-white focus:border-[#EA7C12] focus:ring-2 focus:ring-[#EA7C12]/20 outline-none transition-all"
                  >
                    <option value="No, en búsqueda activa de local">No, estoy en búsqueda activa de local</option>
                    <option value="Sí, local propio (&lt; 25 m²)">Sí, local propio (menos de 25 m²)</option>
                    <option value="Sí, local propio (&gt; 25 m²)">Sí, local propio (más de 25 m²)</option>
                    <option value="Sí, local alquilado / contrato vigente">Sí, local alquilado / contrato vigente</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 3. Perfil de Inversión */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#6D4327]/10 shadow-2xs space-y-3">
              <h3 className="text-xs font-black text-[#2C221E] uppercase tracking-wider flex items-center gap-2 border-b border-stone-100 pb-2">
                <Briefcase className="w-4 h-4 text-[#EA7C12]" />
                <span>3. Perfil del Postulante e Inversión</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-extrabold text-stone-700 uppercase mb-1">
                    Capital Estimado de Inversión
                  </label>
                  <select
                    name="investmentRange"
                    value={formData.investmentRange}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 text-xs focus:bg-white focus:border-[#EA7C12] focus:ring-2 focus:ring-[#EA7C12]/20 outline-none transition-all"
                  >
                    <option value="USD 15.000 a USD 25.000">USD 15.000 a USD 25.000</option>
                    <option value="USD 25.000 a USD 35.000">USD 25.000 a USD 35.000</option>
                    <option value="Más de USD 35.000">Más de USD 35.000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold text-stone-700 uppercase mb-1">
                    Experiencia previa
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 text-xs focus:bg-white focus:border-[#EA7C12] focus:ring-2 focus:ring-[#EA7C12]/20 outline-none transition-all"
                  >
                    <option value="Sin experiencia previa">Sin experiencia previa en gastronomía</option>
                    <option value="Con experiencia comercial">Con experiencia en comercios / retail</option>
                    <option value="Con experiencia gastronómica">Con experiencia en cafetería / gastronomía</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-extrabold text-stone-700 uppercase mb-1">
                    Mensaje / Comentarios adicionales
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Contanos sobre tu proyecto o zona preferida..."
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 text-xs focus:bg-white focus:border-[#EA7C12] focus:ring-2 focus:ring-[#EA7C12]/20 outline-none transition-all resize-none"
                  />
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full sm:flex-1 py-3.5 px-6 bg-[#EA7C12] hover:bg-[#D66D0B] text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                <span>Enviar Solicitud a Mail ({STORE_INFO.email})</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto py-3.5 px-5 bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 font-bold text-xs rounded-2xl transition-colors cursor-pointer"
              >
                Cancelar
              </button>
            </div>

            <p className="text-[11px] text-stone-500 text-center mt-2">
              Al hacer clic en enviar, se compondrá automáticamente la postulación a <strong>{STORE_INFO.email}</strong> y podrás también derivarla por WhatsApp.
            </p>

          </form>
        )}

      </div>
    </div>
  );
};

