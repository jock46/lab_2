import { useEffect, useState } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState({ os: '', browser: '' });

  useEffect(() => {
    const platform = navigator.platform || 'Unknown OS';
    const userAgent = navigator.userAgent || 'Unknown Browser';

    localStorage.setItem('sys_platform', platform);
    localStorage.setItem('sys_user_agent', userAgent);

    setSysInfo({
      os: localStorage.getItem('sys_platform'),
      browser: localStorage.getItem('sys_user_agent'),
    });
  }, []);

  return (
    <footer className="mt-12 pt-6 pb-4 border-t border-slate-700/60 text-center text-xs text-slate-400 space-y-2">
      <p>© 2026 Свирида Іван | Лабораторна робота №4</p>
      <div className="bg-slate-800/80 p-3 rounded-xl max-w-2xl mx-auto border border-slate-700 text-left font-mono text-[11px] space-y-1">
        <p>
          <span className="text-blue-400 font-semibold">OS/Platform (localStorage):</span> {sysInfo.os}
        </p>
        <p className="truncate">
          <span className="text-blue-400 font-semibold">User Agent (localStorage):</span> {sysInfo.browser}
        </p>
      </div>
    </footer>
  );
}

export default Footer;