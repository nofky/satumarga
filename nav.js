// nav.js
document.addEventListener("DOMContentLoaded", () => {
    // Ambil ID dari localStorage
    const userId = localStorage.getItem('user_id') || "b0210a04-cd01-4fc4-acf8-e59aba0d1451";
    
    // 1. Header dengan tombol Profil
    const headerHTML = `
        <header class="bg-white border-b border-slate-100 p-4 sticky top-0 z-50 flex justify-between items-center shadow-sm">
            <div>
                <h1 class="text-lg font-bold text-slate-800">SatuMarga</h1>
                <p class="text-xs text-indigo-600 font-medium">Pohon Keluarga</p>
            </div>
            <nav class="flex space-x-4">
                <a href="profil.html?id=${userId}" class="text-xs font-bold text-slate-600 hover:text-indigo-600">Profil</a>
            </nav>
        </header>
    `;

    // 2. Footer (Navigasi Bawah)
    const footerHTML = `
        <nav class="fixed bottom-0 w-full bg-white border-t border-slate-200 p-4 flex justify-around shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-50">
            <a href="pohon.html" class="flex flex-col items-center text-slate-400 hover:text-indigo-600">
                <span class="text-xl">🌳</span>
                <span class="text-[10px] font-bold">Pohon</span>
            </a>
            <a href="sosial.html" class="flex flex-col items-center text-slate-400 hover:text-indigo-600">
                <span class="text-xl">📱</span>
                <span class="text-[10px] font-bold">Medsos</span>
            </a>
            <a href="acara.html" class="flex flex-col items-center text-slate-400 hover:text-indigo-600">
                <span class="text-xl">📅</span>
                <span class="text-[10px] font-bold">Acara</span>
            </a>
        </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
