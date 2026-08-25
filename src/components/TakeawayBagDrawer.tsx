import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, Send, Clock, Sparkles, Check } from 'lucide-react';
import { CartItem } from '../types';
import { STORE_INFO } from '../data/coffeeData';

interface TakeawayBagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const TakeawayBagDrawer: React.FC<TakeawayBagDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [estimatedPickup, setEstimatedPickup] = useState('En 10 minutos');

  const grandTotal = items.reduce((acc, curr) => acc + curr.calculatedPrice, 0);

  // Generate pre-filled WhatsApp message
  const handleSendWhatsApp = () => {
    let msg = `*¡Hola +11 Café al Paso!* ☕\nQuisiera hacer este pedido al paso para retirar por *Larrea 777*:\n\n`;

    items.forEach((ci) => {
      const sizeText = ci.customization?.size ? ` (${ci.customization.size})` : '';
      msg += `• *${ci.quantity}x ${ci.item.name}${sizeText}*\n`;
      if (ci.customization) {
        if (ci.customization.size) msg += `  - Tamaño: ${ci.customization.size}\n`;
        if (ci.customization.milk) msg += `  - Leche: ${ci.customization.milk}\n`;
        if (ci.customization.temp) msg += `  - Temp: ${ci.customization.temp}\n`;
        if (ci.customization.extraShot) msg += `  - Shot Extra Ristretto\n`;
        if (ci.customization.notes) msg += `  - Nota: ${ci.customization.notes}\n`;
      }
    });

    msg += `\n`;
    if (customerName.trim()) {
      msg += `*A nombre de:* ${customerName.trim()}\n`;
    }
    msg += `*Horario estimado de retiro:* ${estimatedPickup}\n\n¡Gracias!`;

    const encoded = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="absolute inset-y-0 right-0 max-w-full flex pl-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-screen max-w-md bg-[#FFF8F0] shadow-2xl border-l border-[#6D4327]/15 flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-6 bg-white border-b border-[#6D4327]/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#F49B1A] text-white flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl text-[#2C221E]">
                  Pedido al Paso
                </h3>
                <p className="text-xs text-stone-500 font-medium">
                  Larrea 777 • Retiro express
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 bg-[#F2ECE4] hover:bg-[#EAE1D6] text-[#2C221E] rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-[#F2ECE4] text-[#6D4327] rounded-full flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h4 className="font-bold text-base text-[#2C221E]">Tu pedido está vacío</h4>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Explorá nuestra carta de cafés y pastelería para agregar tus favoritos.
                </p>
              </div>
            ) : (
              items.map((cartItem) => (
                <div
                  key={cartItem.id}
                  className="bg-white p-4 rounded-2xl border border-[#6D4327]/10 shadow-sm flex items-start gap-3 relative"
                >
                  <img
                    src={cartItem.item.image}
                    alt={cartItem.item.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-bold text-sm text-[#2C221E] truncate">
                        {cartItem.item.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(cartItem.id)}
                        className="text-stone-400 hover:text-red-500 p-1 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Customization Details */}
                    {cartItem.customization && (
                      <div className="text-[11px] text-stone-500 space-y-0.5 my-1 bg-[#FFF8F0] p-1.5 rounded-lg border border-[#6D4327]/10">
                        {cartItem.customization.size && (
                          <p>Tamaño: <strong>{cartItem.customization.size}</strong></p>
                        )}
                        {cartItem.customization.milk && (
                          <p>Leche: <strong>{cartItem.customization.milk}</strong></p>
                        )}
                        {cartItem.customization.temp && (
                          <p>Temp: <strong>{cartItem.customization.temp}</strong></p>
                        )}
                        {cartItem.customization.extraShot && (
                          <p className="text-[#F49B1A] font-bold">★ Shot Extra Ristretto</p>
                        )}
                        {cartItem.customization.notes && (
                          <p className="italic">"{cartItem.customization.notes}"</p>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100">
                      {/* Quantity Selector */}
                      <div className="flex items-center bg-[#F2ECE4] rounded-lg p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(cartItem.id, cartItem.quantity - 1)}
                          className="w-6 h-6 bg-white rounded flex items-center justify-center font-bold text-xs shadow-sm hover:bg-stone-100"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold">{cartItem.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(cartItem.id, cartItem.quantity + 1)}
                          className="w-6 h-6 bg-white rounded flex items-center justify-center font-bold text-xs shadow-sm hover:bg-stone-100"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-[#F49B1A] bg-[#FFF8F0] px-2 py-0.5 rounded-md">
                        {cartItem.item.prepTime}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}

            {items.length > 0 && (
              <div className="pt-4 space-y-3">
                <div className="bg-[#F2ECE4] p-3.5 rounded-2xl space-y-2">
                  <label className="block text-xs font-bold text-[#2C221E]">Tu Nombre (Opcional)</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Ej: Lucía"
                    className="w-full px-3 py-2 bg-white rounded-xl text-xs font-medium focus:outline-none border border-[#6D4327]/15"
                  />

                  <label className="block text-xs font-bold text-[#2C221E] pt-1">¿Cuándo retirás por Larrea 777?</label>
                  <select
                    value={estimatedPickup}
                    onChange={(e) => setEstimatedPickup(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-xl text-xs font-medium focus:outline-none border border-[#6D4327]/15"
                  >
                    <option value="En 5 minutos">En 5 minutos</option>
                    <option value="En 10 minutos">En 10 minutos</option>
                    <option value="En 15 minutos">En 15 minutos</option>
                    <option value="En 20 minutos">En 20 minutos</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#6D4327]/10 space-y-4">
              <div className="flex items-center justify-between text-xs font-extrabold text-[#6D4327] bg-[#FFF8F0] p-3 rounded-xl border border-[#6D4327]/10">
                <span>📍 Retiro Express en Larrea 777</span>
                <span className="text-[#F49B1A]">Sin Esperas</span>
              </div>

              <button
                onClick={handleSendWhatsApp}
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-extrabold text-sm shadow-lg shadow-emerald-600/20 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Pedir por WhatsApp (Retiro Express)</span>
              </button>

              <button
                onClick={onClearCart}
                className="w-full text-center text-xs font-semibold text-stone-400 hover:text-stone-600"
              >
                Vaciar pedido
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
