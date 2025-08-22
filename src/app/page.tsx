'use client';

import { Shield, MessageCircle, ArrowRight, CreditCard, Clock, Award, Users, Star, Package, Gift, Settings, Zap, Eye, HelpCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const getInteractiveShadow = (element: HTMLElement | null) => {
    if (!element) return '';
    
    // Fixed shadows for mobile
    if (isMobile) {
      return {
        boxShadow: `
          12px 12px 24px rgba(101, 67, 33, 0.25),
          -12px -12px 24px rgba(255, 255, 255, 0.7),
          inset 0 0 0 1px rgba(75, 63, 63, 0.3)
        `,
      };
    }
    
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (mousePosition.x - centerX) / 60;
    const deltaY = (mousePosition.y - centerY) / 60;
    
    return {
      boxShadow: `
        ${12 + deltaX}px ${12 + deltaY}px 24px rgba(101, 67, 33, 0.25),
        ${-12 - deltaX}px ${-12 - deltaY}px 24px rgba(0, 0, 0, 0.7),
        inset 0 0 0 1px rgba(75, 63, 63, 0.3)
      `,
    };
  };

  const getIconShadow = (element: HTMLElement | null) => {
    if (!element) return '';
    
    // Fixed shadows for mobile
    if (isMobile) {
      return {
        boxShadow: `
          4px 4px 8px rgba(101, 67, 33, 0.2),
          -4px -4px 8px rgba(255, 255, 255, 0.7)
        `,
      };
    }
    
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (mousePosition.x - centerX) / 80;
    const deltaY = (mousePosition.y - centerY) / 80;
    
    return {
      boxShadow: `
        ${4 + deltaX}px ${4 + deltaY}px 8px rgba(101, 67, 33, 0.2),
        ${-4 - deltaX}px ${-4 - deltaY}px 8px rgba(255, 255, 255, 0.7)
      `,
    };
  };

  const getButtonShadow = (element: HTMLElement | null, isPrimary: boolean = false) => {
    if (!element) return '';
    
    // Fixed shadows for mobile
    if (isMobile) {
      if (isPrimary) {
        return {
          boxShadow: `
            8px 8px 16px rgba(101, 67, 33, 0.3),
            -8px -8px 16px rgba(255, 255, 255, 0.6),
            inset 0 0 0 1px rgba(255, 255, 255, 0.1)
          `,
        };
      } else {
        return {
          boxShadow: `
            6px 6px 12px rgba(101, 67, 33, 0.2),
            -6px -6px 12px rgba(255, 255, 255, 0.7)
          `,
        };
      }
    }
    
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (mousePosition.x - centerX) / 70;
    const deltaY = (mousePosition.y - centerY) / 70;
    
    if (isPrimary) {
      return {
        boxShadow: `
          ${8 + deltaX}px ${8 + deltaY}px 16px rgba(101, 67, 33, 0.3),
          ${-8 - deltaX}px ${-8 - deltaY}px 16px rgba(255, 255, 255, 0.6),
          inset 0 0 0 1px rgba(255, 255, 255, 0.1)
        `,
      };
    } else {
      return {
        boxShadow: `
          ${6 + deltaX}px ${6 + deltaY}px 12px rgba(101, 67, 33, 0.2),
          ${-6 - deltaX}px ${-6 - deltaY}px 12px rgba(255, 255, 255, 0.7)
        `,
      };
    }
  };

  const sendWhatsAppMessage = (customMessage?: string) => {
    const defaultMessage = "Je veux commander mon site web avec le dépôt de 20$ - YahyaWeb";
    const message = customMessage || defaultMessage;
    window.open(`https://wa.me/212658860346?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen relative" style={{backgroundColor: '#EFCFA0'}}>
      {/* Background blur elements for glass effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-30 blur-3xl" style={{backgroundColor: '#E1A140'}}></div>
        <div className="absolute top-60 right-20 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{backgroundColor: '#914110'}}></div>
        <div className="absolute bottom-40 left-1/3 w-72 h-72 rounded-full opacity-25 blur-3xl" style={{backgroundColor: '#532200'}}></div>
      </div>

      {/* Header */}
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative">
        {/* Main Title Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-[#532200] to-[#914110] bg-clip-text text-transparent px-4">
            Site Web Professionnel
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 px-4" style={{color: '#914110'}}>
            Démarrez avec seulement 20€
          </p>
          <p className="text-base md:text-lg px-4" style={{color: '#532200'}}>
            Le reste après livraison et validation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Left Column - Votre Commande */}
          <div className="order-2 md:order-1 lg:order-1">
            <div 
              className="neumorphic-card interactive-card p-6 md:p-8 h-full"
              ref={(el) => {
                if (el) {
                  const style = getInteractiveShadow(el);
                  Object.assign(el.style, style);
                }
              }}
            >
              <div className="flex items-center justify-center mb-6">
                <div 
                  className="neumorphic-icon interactive-icon p-3 rounded-full mr-3"
                  ref={(el) => {
                    if (el) {
                      const style = getIconShadow(el);
                      Object.assign(el.style, style);
                    }
                  }}
                >
                  <Package className="w-8 h-8" style={{color: '#532200'}} />
                </div>
                <h2 className="text-2xl font-bold" style={{color: '#532200'}}>
                  Votre Commande
                </h2>
              </div>
              
              {/* Product Details */}
              <div className="space-y-4 mb-6">
                <div className="bg-white/20 p-4 rounded-xl border border-white/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold" style={{color: '#532200'}}>Site Web Professionnel</div>
                      <div className="text-sm" style={{color: '#914110'}}>Design moderne + Développement</div>
                    </div>
                    <div className="font-black text-lg" style={{color: '#532200'}}>250€</div>
                  </div>
                </div>
                
                <div className="bg-white/20 p-4 rounded-xl border border-white/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Gift className="w-5 h-5 mr-2" style={{color: '#914110'}} />
                      <div>
                        <div className="font-bold" style={{color: '#532200'}}>Hébergement Premium</div>
                        <div className="text-sm" style={{color: '#914110'}}>1 an inclus (valeur 120€)</div>
                      </div>
                    </div>
                    <div className="font-bold text-green-600">GRATUIT</div>
                  </div>
                </div>
                
                <div className="bg-white/20 p-4 rounded-xl border border-white/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Settings className="w-5 h-5 mr-2" style={{color: '#914110'}} />
                      <div>
                        <div className="font-bold" style={{color: '#532200'}}>Support & Maintenance</div>
                        <div className="text-sm" style={{color: '#914110'}}>3 mois inclus (valeur 150€)</div>
                      </div>
                    </div>
                    <div className="font-bold text-green-600">GRATUIT</div>
                  </div>
                </div>
                
                <div className="bg-white/20 p-4 rounded-xl border border-white/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Zap className="w-5 h-5 mr-2" style={{color: '#914110'}} />
                      <div>
                        <div className="font-bold" style={{color: '#532200'}}>Livraison Express</div>
                        <div className="text-sm" style={{color: '#914110'}}>5 jours maximum</div>
                      </div>
                    </div>
                    <div className="font-bold text-green-600">GRATUIT</div>
                  </div>
                </div>
              </div>
              
              {/* Pricing Summary */}
              <div className="bg-white/20 p-4 rounded-xl border border-white/30">
                <div className="flex items-center justify-between mb-2">
                  <span style={{color: '#914110'}}>Sous-total:</span>
                  <span className="line-through text-gray-500">520€</span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span style={{color: '#914110'}}>Remise spéciale:</span>
                  <span className="text-green-600 font-bold">-270€</span>
                </div>
                <div className="flex items-center justify-between text-xl font-black pt-2 border-t-2" style={{borderColor: '#914110', color: '#532200'}}>
                  <span>TOTAL:</span>
                  <span>250€</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Paiement Simple */}
          <div className="order-1 md:order-3 lg:order-2 md:col-span-2 lg:col-span-1">
            <div 
              className="neumorphic-card interactive-card p-6 md:p-8 text-center"
              ref={(el) => {
                if (el) {
                  const style = getInteractiveShadow(el);
                  Object.assign(el.style, style);
                }
              }}
            >
              <div className="flex items-center justify-center mb-6">
                <div 
                  className="neumorphic-icon interactive-icon p-3 rounded-full mr-3"
                  ref={(el) => {
                    if (el) {
                      const style = getIconShadow(el);
                      Object.assign(el.style, style);
                    }
                  }}
                >
                  <CreditCard className="w-8 h-8" style={{color: '#532200'}} />
                </div>
                <h2 className="text-2xl font-bold" style={{color: '#532200'}}>
                  Paiement Simple
                </h2>
              </div>
              
              <div className="bg-white/20 p-6 rounded-2xl mb-8 border border-white/30">
                <div className="text-5xl font-black mb-3" style={{color: '#532200'}}>20€</div>
                <div className="text-lg font-semibold mb-2" style={{color: '#914110'}}>Dépôt initial requis</div>
                <div className="text-sm" style={{color: '#532200'}}>
                  Le reste (230€) sera payé uniquement après livraison et validation
                </div>
              </div>

              {/* Enhanced Confirmer Button */}
              <button 
                onClick={() => sendWhatsAppMessage("Je confirme ma commande - Site web 250€ avec dépôt de 20€")}
                className="w-full py-4 md:py-5 px-6 md:px-8 rounded-2xl font-black text-lg md:text-xl mb-6 transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #532200 0%, #6b2d00 50%, #8b3a00 100%)',
                  color: 'white',
                  boxShadow: '0 8px 32px rgba(83, 34, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  border: '2px solid rgba(255, 255, 255, 0.1)'
                }}
                ref={(el) => {
                  if (el) {
                    const style = getButtonShadow(el, true);
                    Object.assign(el.style, style);
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="relative flex items-center justify-center space-x-2 md:space-x-3">
                  <MessageCircle className="w-5 h-5 md:w-7 md:h-7" />
                  <span className="text-sm md:text-xl">CONFIRMER LA COMMANDE</span>
                  <ArrowRight className="w-5 h-5 md:w-7 md:h-7" />
                </div>
              </button>

              <div className="space-y-3">
                <button 
                  onClick={() => sendWhatsAppMessage("J'aimerais voir des exemples avant de commander")}
                  className="neumorphic-button-secondary interactive-button w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-102 active:scale-98 flex items-center justify-center space-x-2"
                  style={{color: '#914110'}}
                  ref={(el) => {
                    if (el) {
                      const style = getButtonShadow(el, false);
                      Object.assign(el.style, style);
                    }
                  }}
                >
                  <Eye className="w-5 h-5" />
                  <span>Voir des exemples</span>
                </button>
                
                <button 
                  onClick={() => sendWhatsAppMessage("J'ai des questions sur le processus de commande")}
                  className="neumorphic-button-secondary interactive-button w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-102 active:scale-98 flex items-center justify-center space-x-2"
                  style={{color: '#914110'}}
                  ref={(el) => {
                    if (el) {
                      const style = getButtonShadow(el, false);
                      Object.assign(el.style, style);
                    }
                  }}
                >
                  <HelpCircle className="w-5 h-5" />
                  <span>Poser une question</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Pourquoi Choisir */}
          <div className="order-3 md:order-2 lg:order-3 md:col-span-2 lg:col-span-1">
            <div 
              className="neumorphic-card interactive-card p-6 md:p-8 h-full"
              ref={(el) => {
                if (el) {
                  const style = getInteractiveShadow(el);
                  Object.assign(el.style, style);
                }
              }}
            >
              <div className="flex items-center justify-center mb-6">
                <div 
                  className="neumorphic-icon interactive-icon p-3 rounded-full mr-3"
                  ref={(el) => {
                    if (el) {
                      const style = getIconShadow(el);
                      Object.assign(el.style, style);
                    }
                  }}
                >
                  <Star className="w-8 h-8" style={{color: '#532200'}} />
                </div>
                <h2 className="text-2xl font-bold" style={{color: '#532200'}}>
                  Pourquoi Choisir YahyaWeb
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/20 p-6 rounded-xl text-center border border-white/30">
                  <div 
                    className="neumorphic-icon interactive-icon p-4 rounded-full mb-4 mx-auto w-fit"
                    ref={(el) => {
                      if (el) {
                        const style = getIconShadow(el);
                        Object.assign(el.style, style);
                      }
                    }}
                  >
                    <Clock className="w-8 h-8" style={{color: '#914110'}} />
                  </div>
                  <div className="font-bold text-lg mb-2" style={{color: '#532200'}}>Livraison Express</div>
                  <div style={{color: '#914110'}}>Maximum 5 jours ouvrés</div>
                </div>
                
                <div className="bg-white/20 p-6 rounded-xl text-center border border-white/30">
                  <div 
                    className="neumorphic-icon interactive-icon p-4 rounded-full mb-4 mx-auto w-fit"
                    ref={(el) => {
                      if (el) {
                        const style = getIconShadow(el);
                        Object.assign(el.style, style);
                      }
                    }}
                  >
                    <Users className="w-8 h-8" style={{color: '#914110'}} />
                  </div>
                  <div className="font-bold text-lg mb-2" style={{color: '#532200'}}>200+ Clients Satisfaits</div>
                  <div style={{color: '#914110'}}>Réputation excellente</div>
                </div>
                
                <div className="bg-white/20 p-6 rounded-xl text-center border border-white/30">
                  <div 
                    className="neumorphic-icon interactive-icon p-4 rounded-full mb-4 mx-auto w-fit"
                    ref={(el) => {
                      if (el) {
                        const style = getIconShadow(el);
                        Object.assign(el.style, style);
                      }
                    }}
                  >
                    <Award className="w-8 h-8" style={{color: '#914110'}} />
                  </div>
                  <div className="font-bold text-lg mb-2" style={{color: '#532200'}}>Qualité Professionnelle</div>
                  <div style={{color: '#914110'}}>Design moderne garanti</div>
                </div>

                {/* Guarantee Badge */}
                <div className="bg-white/20 p-4 rounded-xl border border-white/30">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="neumorphic-icon interactive-icon p-2 rounded-full"
                      ref={(el) => {
                        if (el) {
                          const style = getIconShadow(el);
                          Object.assign(el.style, style);
                        }
                      }}
                    >
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold" style={{color: '#532200'}}>Garantie Sans Risque</div>
                      <div className="text-sm" style={{color: '#914110'}}>Remboursement intégral si non satisfait</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
      </div>

      {/* Neumorphism CSS */}
      <style jsx>{`
        .neumorphic-card {
          background: #EFCFA0;
          border-radius: 20px;
          box-shadow: 
            12px 12px 24px rgba(101, 67, 33, 0.25),
            -12px -12px 24px rgba(255, 255, 255, 0.7),
            inset 0 0 0 1px rgba(255, 255, 255, 0.3);
        }
        
        .interactive-card {
          transition: box-shadow 0.1s ease-out;
        }
        
        .interactive-button {
          transition: box-shadow 0.1s ease-out;
        }
        
        .interactive-icon {
          transition: box-shadow 0.1s ease-out;
        }
        
        .neumorphic-icon {
          background: #EFCFA0;
          box-shadow: 
            4px 4px 8px rgba(101, 67, 33, 0.2),
            -4px -4px 8px rgba(255, 255, 255, 0.7);
        }
        
        .neumorphic-button-primary {
          background: linear-gradient(145deg, #532200, #6b2d00);
          box-shadow: 
            8px 8px 16px rgba(101, 67, 33, 0.3),
            -8px -8px 16px rgba(255, 255, 255, 0.6),
            inset 0 0 0 1px rgba(255, 255, 255, 0.1);
        }
        
        .neumorphic-button-primary:hover {
          transform: scale(1.05);
          box-shadow: 
            12px 12px 24px rgba(101, 67, 33, 0.4),
            -12px -12px 24px rgba(255, 255, 255, 0.8),
            inset 0 0 0 1px rgba(255, 255, 255, 0.2);
        }
        
        .neumorphic-button-primary:active {
          transform: scale(0.95);
          box-shadow: 
            inset 4px 4px 8px rgba(83, 34, 0, 0.3),
            inset -4px -4px 8px rgba(107, 45, 0, 0.1);
        }
        
        .neumorphic-button-secondary {
          background: #EFCFA0;
          box-shadow: 
            6px 6px 12px rgba(101, 67, 33, 0.2),
            -6px -6px 12px rgba(255, 255, 255, 0.7);
        }
        
        .neumorphic-button-secondary:hover {
          transform: scale(1.02);
          box-shadow: 
            8px 8px 16px rgba(101, 67, 33, 0.25),
            -8px -8px 16px rgba(255, 255, 255, 0.8);
        }
        
        .neumorphic-button-secondary:active {
          transform: scale(0.98);
          box-shadow: 
            inset 3px 3px 6px rgba(101, 67, 33, 0.15),
            inset -3px -3px 6px rgba(255, 255, 255, 0.5);
        }
        
        /* Button scale effects on hover/active */
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        
        .active\\:scale-98:active {
          transform: scale(0.98);
        }
        
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
        
        .active\\:scale-95:active {
          transform: scale(0.95);
        }
        
        /* Enhanced mouse interaction effects */
        .interactive-card:hover {
          cursor: pointer;
        }
        
        .interactive-button:hover {
          cursor: pointer;
        }
        
        /* Smooth transitions for shadows and button scaling */
        .neumorphic-button-primary,
        .neumorphic-button-secondary {
          transition: transform 0.3s ease, box-shadow 0.1s ease-out;
        }
      `}</style>
    </div>
  );
}
//             