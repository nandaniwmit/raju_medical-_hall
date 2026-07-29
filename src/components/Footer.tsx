import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cross, MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid') || '');
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, 
        visitor_id: visitorId, 
        session_id: sessionId,
        page_name: getPageName(), 
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, 
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { 
        method: 'POST', 
        mode: 'cors', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
      }).catch(err => {});
    };

    const sendExitPayload = () => {
      const payload = { 
        cid: cid, 
        session_id: sessionId, 
        page_name: getPageName(), 
        action: 'page_change' 
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { 
          method: 'POST', 
          mode: 'cors', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(payload), 
          keepalive: true 
        }).catch(err => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout>;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { 
        sendExitPayload(); 
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Business Profile */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30">
                <Cross className="w-5 h-5 fill-white stroke-none" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white tracking-tight">RAJU MEDICAL HALL</h3>
                <p className="text-xs text-emerald-400 font-medium">Licensed Chemist & Druggist</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Your trusted community medical store in Chand Chaura, Gaya, Bihar. Dedicated to providing 100% genuine prescription medicines, healthcare devices, surgical items, and baby care essentials.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs text-emerald-300 bg-emerald-950/50 p-2.5 rounded-xl border border-emerald-900/60">
              <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>Drug License Verified • Batch Checked Quality</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition flex items-center">
                  <span className="mr-1.5 text-emerald-500">›</span> Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition flex items-center">
                  <span className="mr-1.5 text-emerald-500">›</span> About Our Pharmacy
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition flex items-center">
                  <span className="mr-1.5 text-emerald-500">›</span> Medical Services & Categories
                </Link>
              </li>
              <li>
                <Link to="/services#stock-checker" className="hover:text-emerald-400 transition flex items-center text-emerald-400 font-semibold">
                  <span className="mr-1.5 text-emerald-500">›</span> Medicine Stock Checker
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition flex items-center">
                  <span className="mr-1.5 text-emerald-500">›</span> Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition flex items-center">
                  <span className="mr-1.5 text-emerald-500">›</span> Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Business Hours */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Contact & Hours
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Q2J4+67F, Chand Chaura, Gaya, Bihar 823001 (Near Vishnupad Area)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:09431409411" className="hover:text-white transition font-medium">
                  09431409411 (Call / WhatsApp)
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp Order: 09431409411</span>
              </div>
              <div className="flex items-start space-x-2.5 pt-1 text-slate-400">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200">Store Hours:</p>
                  <p>Mon - Sat: 8:00 AM - 10:00 PM</p>
                  <p>Sunday: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Google Map Preview */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Store Location Map
            </h4>
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 h-32 relative group">
              <iframe
                title="Raju Medical Hall Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.123!2d85.0065!3d24.7818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32a68e826b5e1%3A0x2a048a60cfb3f9!2sChand%20Chaura%2C%20Gaya%2C%20Bihar%20823001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 group-hover:opacity-100 transition"
              ></iframe>
              <a
                href="https://maps.google.com/?q=Raju+Medical+Hall+Chand+Chaura+Gaya+Bihar+823001"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-x-2 bottom-2 bg-emerald-600/90 hover:bg-emerald-600 text-white text-[11px] font-semibold py-1 px-2.5 rounded-lg text-center backdrop-blur-sm transition flex items-center justify-center space-x-1"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Legal Links & Disclaimers */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="hover:text-slate-200 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Medical Disclaimer</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Return & Refund Policy</span>
          </div>
          <p className="text-slate-500">
            Disclaimer: Prescription drugs require a valid prescription from a registered medical practitioner.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>&copy; {new Date().getFullYear()} Raju Medical Hall. All rights reserved.</p>
          <p className="flex items-center">
            Developed by{' '}
            <a
              href="https://main.webmakerit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-emerald-400 font-semibold hover:underline flex items-center"
            >
              WMIT <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
