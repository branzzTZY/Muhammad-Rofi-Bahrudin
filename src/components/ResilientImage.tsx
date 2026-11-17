import { useState } from 'react';
import { Zap } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Dokumentasi Bengkel TITL',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-slate-100 text-slate-600 p-6 text-center border border-slate-200 ${className}`}
      >
        <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-3 text-[#1D4ED8]">
          <Zap className="w-5 h-5" aria-hidden="true" />
        </div>
        <p className="text-sm font-medium text-slate-800">{fallbackTitle}</p>
        <p className="text-xs text-slate-500 mt-1">SMKN 1 Sidayu · X TITL 2</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
