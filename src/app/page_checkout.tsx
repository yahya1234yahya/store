'use client';

import { Globe, Shield, MessageCircle, ArrowRight, CreditCard, Lock, Clock, Award, Users, Star } from 'lucide-react';

export default function Home() {
  const sendWhatsAppMessage = (customMessage?: string) => {
    const defaultMessage = "Je veux commander mon site web avec le dépôt de 20$ - YahyaWeb";
    const message = customMessage || defaultMessage;
    window.open(`https://wa.me/212658860346?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#EFCFA0'}}>
      {/* Header */}
      <header className="border-b-2" style={{borderColor: '#914110', backgroundColor: '#E1A140'}}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg" style={{backgroundColor: '#532200'}}>
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold" style={{color: '#532200'}}>YahyaWeb</h1>
            </div>
            <div className="flex items-center space-x-2" style={{color: '#532200'}}>
              <Lock className="w-5 h-5" />
              <span className="font-medium">Paiement Sécurisé</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column - Order Summary */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl border-2 p-6 mb-6" style={{borderColor: '#914110'}}>
              <h2 className="text-2xl font-bold mb-6" style={{color: '#532200'}}>
                Votre Commande
              </h2>
              
              {/* Product Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b" style={{borderColor: '#EFCFA0'}}>
                  <div>
                    <div className="font-semibold" style={{color: '#532200'}}>Site Web Professionnel</div>
                    <div className="text-sm" style={{color: '#914110'}}>Design moderne + Développement complet</div>
                  </div>
                  <div className="font-bold text-lg" style={{color: '#532200'}}>250€</div>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b" style={{borderColor: '#EFCFA0'}}>
                  <div>
                    <div className="font-semibold" style={{color: '#532200'}}>Hébergement Premium</div>
                    <div className="text-sm" style={{color: '#914110'}}>1 an inclus (valeur 120€)</div>
                  </div>
                  <div className="font-bold text-green-600">GRATUIT</div>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b" style={{borderColor: '#EFCFA0'}}>
                  <div>
                    <div className="font-semibold" style={{color: '#532200'}}>Support & Maintenance</div>
                    <div className="text-sm" style={{color: '#914110'}}>3 mois inclus (valeur 150€)</div>
                  </div>
                  <div className="font-bold text-green-600">GRATUIT</div>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b" style={{borderColor: '#EFCFA0'}}>
                  <div>
                    <div className="font-semibold" style={{color: '#532200'}}>Livraison Express</div>
                    <div className="text-sm" style={{color: '#914110'}}>5 jours maximum</div>
                  </div>
                  <div className="font-bold text-green-600">GRATUIT</div>
                </div>
              </div>
              
              {/* Pricing Summary */}
              <div className="border-t-2 pt-4" style={{borderColor: '#914110'}}>
                <div className="flex items-center justify-between mb-2">
                  <span style={{color: '#914110'}}>Sous-total:</span>
                  <span className="line-through text-gray-500">500€</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span style={{color: '#914110'}}>Remise spéciale:</span>
                  <span className="text-green-600 font-semibold">-250€</span>
                </div>
                <div className="flex items-center justify-between text-2xl font-black pt-2 border-t" style={{borderColor: '#EFCFA0', color: '#532200'}}>
                  <span>TOTAL:</span>
                  <span>250€</span>
                </div>
              </div>
            </div>

            {/* Guarantee Badge */}
            <div className="bg-white rounded-xl border-2 p-4" style={{borderColor: '#914110'}}>
              <div className="flex items-center space-x-3">
                <Shield className="w-8 h-8 text-green-600" />
                <div>
                  <div className="font-bold" style={{color: '#532200'}}>Garantie Sans Risque</div>
                  <div className="text-sm" style={{color: '#914110'}}>Remboursement intégral si non satisfait</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Checkout Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl border-2 p-8" style={{borderColor: '#914110'}}>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4" style={{color: '#532200'}}>
                  Finaliser la Commande
                </h2>
                <p className="text-lg" style={{color: '#914110'}}>
                  Déposez seulement 20$ pour commencer votre projet
                </p>
              </div>

              {/* Payment Summary */}
              <div className="rounded-xl p-6 mb-8" style={{backgroundColor: '#EFCFA0'}}>
                <div className="text-center">
                  <div className="text-4xl font-black mb-2" style={{color: '#532200'}}>20$</div>
                  <div style={{color: '#914110'}}>Dépôt initial requis</div>
                  <div className="text-sm mt-2" style={{color: '#532200'}}>
                    Le reste (230$) sera payé uniquement après livraison et validation
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-8">
                <h3 className="font-bold mb-4" style={{color: '#532200'}}>Mode de Paiement</h3>
                <div className="space-y-3">
                  <div className="border-2 rounded-lg p-4 cursor-pointer transition-colors" style={{borderColor: '#E1A140', backgroundColor: '#E1A140'}}>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-6 h-6" style={{color: '#532200'}} />
                      <div className="flex-1">
                        <div className="font-semibold" style={{color: '#532200'}}>WhatsApp</div>
                        <div className="text-sm" style={{color: '#914110'}}>Paiement sécurisé via WhatsApp</div>
                      </div>
                      <div className="w-4 h-4 rounded-full border-2" style={{borderColor: '#532200', backgroundColor: '#532200'}}></div>
                    </div>
                  </div>
                  
                  <div className="border-2 rounded-lg p-4 opacity-50" style={{borderColor: '#EFCFA0'}}>
                    <div className="flex items-center space-x-3">
                      <CreditCard className="w-6 h-6" style={{color: '#914110'}} />
                      <div className="flex-1">
                        <div className="font-semibold" style={{color: '#914110'}}>Carte Bancaire</div>
                        <div className="text-sm" style={{color: '#914110'}}>Bientôt disponible</div>
                      </div>
                      <div className="w-4 h-4 rounded-full border-2" style={{borderColor: '#914110'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Button */}
              <button 
                onClick={() => sendWhatsAppMessage("🛒 JE CONFIRME MA COMMANDE - Site web 250€ avec dépôt de 20$")}
                className="w-full py-5 rounded-2xl font-black text-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl mb-6 flex items-center justify-center space-x-3"
                style={{backgroundColor: '#532200', color: 'white'}}
              >
                <MessageCircle className="w-6 h-6" />
                <span>CONFIRMER LA COMMANDE</span>
                <ArrowRight className="w-6 h-6" />
              </button>

              {/* Additional Options */}
              <div className="space-y-3 mb-6">
                <button 
                  onClick={() => sendWhatsAppMessage("J'aimerais voir des exemples avant de commander")}
                  className="w-full border-2 py-3 rounded-lg font-semibold transition-colors hover:opacity-80"
                  style={{borderColor: '#914110', color: '#914110'}}
                >
                  Voir des exemples
                </button>
                
                <button 
                  onClick={() => sendWhatsAppMessage("J'ai des questions sur le processus de commande")}
                  className="w-full border-2 py-3 rounded-lg font-semibold transition-colors hover:opacity-80"
                  style={{borderColor: '#914110', color: '#914110'}}
                >
                  Poser une question
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div style={{color: '#914110'}}>
                  <Clock className="w-5 h-5 mx-auto mb-1" />
                  <div>Livraison 5j</div>
                </div>
                <div style={{color: '#914110'}}>
                  <Users className="w-5 h-5 mx-auto mb-1" />
                  <div>200+ clients</div>
                </div>
                <div style={{color: '#914110'}}>
                  <Award className="w-5 h-5 mx-auto mb-1" />
                  <div>Qualité pro</div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-6 bg-white rounded-xl border-2 p-6" style={{borderColor: '#914110'}}>
              <div className="flex justify-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-center mb-3" style={{color: '#532200'}}>
                &quot;Excellent service! Site livré en 4 jours, exactement comme promis. Équipe très professionnelle.&quot;
              </p>
              <div className="text-center text-sm" style={{color: '#914110'}}>
                - Ahmed M., Client YahyaWeb
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 text-center p-4 bg-white rounded-lg border" style={{borderColor: '#914110'}}>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Lock className="w-5 h-5" style={{color: '#532200'}} />
            <span className="font-semibold" style={{color: '#532200'}}>Paiement 100% Sécurisé</span>
          </div>
          <p className="text-sm" style={{color: '#914110'}}>
            Vos données sont protégées. Nous ne stockons aucune information de paiement.
          </p>
        </div>
      </div>
    </div>
  );
}
