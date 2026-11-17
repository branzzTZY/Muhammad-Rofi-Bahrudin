export function SingleLineSchematic({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`w-full h-full bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between ${
        compact ? 'p-4' : 'p-6'
      }`}
    >
      <div className="flex items-center justify-between text-[11px] font-mono-tech text-slate-500 border-b border-slate-200 pb-2 mb-3">
        <span>GAMBAR TEKNIK · SLD-X-04</span>
        <span>SKALA 1:50 · PUIL 2011</span>
      </div>

      <svg
        viewBox="0 0 520 260"
        className="w-full h-auto max-h-[240px]"
        role="img"
        aria-label="Diagram garis tunggal instalasi listrik 1 fasa dua grup beban"
      >
        {/* Grid lines subtle */}
        <defs>
          <pattern id="grid-tech" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="520" height="260" fill="url(#grid-tech)" />

        {/* Supply Input */}
        <line x1="30" y1="130" x2="85" y2="130" stroke="#0F172A" strokeWidth="2" />
        <text x="24" y="114" fontSize="10" fontFamily="JetBrains Mono, monospace" fill="#334155">
          220V AC
        </text>
        <text x="24" y="148" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#64748B">
          L / N / PE
        </text>

        {/* PHB Box */}
        <rect x="85" y="75" width="90" height="110" fill="#FFFFFF" stroke="#1D4ED8" strokeWidth="2" />
        <line x1="85" y1="185" x2="175" y2="75" stroke="#CBD5E1" strokeWidth="1" />
        <text x="102" y="66" fontSize="10" fontWeight="600" fontFamily="JetBrains Mono, monospace" fill="#1D4ED8">
          PHB 1 FASA
        </text>

        {/* Main Bus & Breakers inside PHB */}
        <line x1="100" y1="130" x2="130" y2="130" stroke="#0F172A" strokeWidth="1.8" />
        <line x1="130" y1="95" x2="130" y2="165" stroke="#0F172A" strokeWidth="2" />

        {/* Grup 1 Branch (Top) */}
        <line x1="130" y1="95" x2="290" y2="95" stroke="#0F172A" strokeWidth="1.8" />
        {/* MCB 6A symbol */}
        <circle cx="152" cy="95" r="4" fill="#FFFFFF" stroke="#1D4ED8" strokeWidth="1.6" />
        <text x="186" y="86" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#334155">
          G1 · MCB 6A
        </text>
        {/* Wire count ticks (3 wires) */}
        <line x1="225" y1="88" x2="231" y2="102" stroke="#1D4ED8" strokeWidth="1.3" />
        <line x1="231" y1="88" x2="237" y2="102" stroke="#1D4ED8" strokeWidth="1.3" />
        <line x1="237" y1="88" x2="243" y2="102" stroke="#1D4ED8" strokeWidth="1.3" />
        <text x="215" y="114" fontSize="8.5" fontFamily="JetBrains Mono, monospace" fill="#64748B">
          NYA 1.5mm²
        </text>

        {/* Junction box T-Dos */}
        <circle cx="290" cy="95" r="5" fill="#0F172A" />
        {/* Drop to Switch S1 */}
        <line x1="290" y1="95" x2="290" y2="135" stroke="#0F172A" strokeWidth="1.5" />
        <circle cx="290" cy="143" r="7" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.6" />
        <line x1="295" y1="138" x2="306" y2="127" stroke="#0F172A" strokeWidth="1.6" />
        <text x="308" y="147" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#334155">
          S1 (Seri)
        </text>

        {/* Lamp 1 & Lamp 2 */}
        <line x1="290" y1="95" x2="430" y2="95" stroke="#0F172A" strokeWidth="1.8" />
        <circle cx="365" cy="95" r="10" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.6" />
        <line x1="358" y1="88" x2="372" y2="102" stroke="#0F172A" strokeWidth="1.4" />
        <line x1="372" y1="88" x2="358" y2="102" stroke="#0F172A" strokeWidth="1.4" />
        <text x="357" y="76" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#334155">
          L1
        </text>

        <circle cx="440" cy="95" r="10" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.6" />
        <line x1="433" y1="88" x2="447" y2="102" stroke="#0F172A" strokeWidth="1.4" />
        <line x1="447" y1="88" x2="433" y2="102" stroke="#0F172A" strokeWidth="1.4" />
        <text x="432" y="76" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#334155">
          L2
        </text>

        {/* Grup 2 Branch (Bottom - Kotak Kontak) */}
        <line x1="130" y1="165" x2="365" y2="165" stroke="#0F172A" strokeWidth="1.8" />
        <circle cx="152" cy="165" r="4" fill="#FFFFFF" stroke="#1D4ED8" strokeWidth="1.6" />
        <text x="186" y="156" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#334155">
          G2 · MCB 10A
        </text>
        {/* 3 wires incl PE */}
        <line x1="265" y1="158" x2="271" y2="172" stroke="#1D4ED8" strokeWidth="1.3" />
        <line x1="271" y1="158" x2="277" y2="172" stroke="#1D4ED8" strokeWidth="1.3" />
        <line x1="277" y1="158" x2="283" y2="172" stroke="#1D4ED8" strokeWidth="1.3" />
        <text x="252" y="185" fontSize="8.5" fontFamily="JetBrains Mono, monospace" fill="#64748B">
          NYA 2.5mm² (PE)
        </text>

        {/* Kotak Kontak Berarde Symbol */}
        <path
          d="M 365 155 A 10 10 0 0 1 365 175"
          fill="#FFFFFF"
          stroke="#0F172A"
          strokeWidth="1.8"
        />
        <line x1="365" y1="152" x2="365" y2="178" stroke="#0F172A" strokeWidth="1.8" />
        <line x1="375" y1="165" x2="386" y2="165" stroke="#0F172A" strokeWidth="1.8" />
        <text x="394" y="169" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#334155">
          KK 1F + Arde
        </text>
      </svg>

      <div className="flex items-center justify-between text-[11px] font-mono-tech text-slate-500 border-t border-slate-200 pt-2 mt-3">
        <span>DIGAMBAR: M. ROFI BAHRUDIN</span>
        <span>KELAS: X TITL 2</span>
      </div>
    </div>
  );
}
