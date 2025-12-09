export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 py-12 text-slate-300">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Shambala Enterprises</h3>
          <p className="text-sm leading-relaxed max-w-xs">
            Building legacy through trust and quality service since 2025.
          </p>
        </div>

        {/* Column 2: Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Shop No. 123, Main Market, Pune</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ contact@business.com</li>
          </ul>
        </div>

        {/* Column 3: Hours */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Opening Hours</h4>
          <ul className="space-y-2 text-sm">
            <li>Mon - Sat: 10:00 AM - 8:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; 2025 Shambala Enterprises. All rights reserved.
      </div>
    </footer>
  );
}