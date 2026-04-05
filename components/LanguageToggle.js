"use client";

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LanguageToggle({ currentLang }) {
  const router = useRouter();
  const pathname = usePathname();
  const [lang, setLang] = useState(currentLang);

  useEffect(() => {
    setLang(currentLang);
  }, [currentLang]);

  const changeLang = (newLang) => {
    const segments = pathname.split('/').slice(2);
    router.push(`/${newLang}/${segments.join('/')}`);
  };

  return (
    <div className="flex gap-2">
      <button 
        onClick={() => changeLang('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${lang === 'en' ? 'bg-teal text-background' : 'text-foreground'}`}
      >
        EN
      </button>
      <button 
        onClick={() => changeLang('ar')}
        className={`px




