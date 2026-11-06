// Configuração de conexão com o banco de dados (chave pública — pode ficar no site)
window.DM_CONFIG = {
  SUPABASE_URL: "https://bovgohsmmvehqmkevsih.supabase.co",
  SUPABASE_KEY: "sb_publishable_B6x8OPQJ1NzdRSIN-fv49w_89Nn4ZNw"
};

// Ícones das categorias (traço simples, sem parecer foto de produto)
window.DM_ICONES = {
  cloche: '<path d="M3 18h18"/><path d="M5 18a7 7 0 0 1 14 0"/><path d="M12 9V7"/><path d="M10 6.5h4"/><path d="M2.5 21h19"/>',
  panela: '<path d="M4 10h16v4.5A5.5 5.5 0 0 1 14.5 20h-5A5.5 5.5 0 0 1 4 14.5z"/><path d="M2 10h2M20 10h2"/><path d="M9 7c0-1.2 1.2-1.2 1.2-2.4M13.5 7c0-1.2 1.2-1.2 1.2-2.4"/>',
  salada: '<path d="M3 12h18a9 9 0 0 1-18 0z"/><path d="M12 12c0-3.2 2.2-5.6 5.6-6.4 0 3.2-2.2 5.6-5.6 6.4"/><path d="M12 12c-.6-2.4-2.6-3.8-5.2-3.8.2 2.2 2.2 3.6 5.2 3.8"/>',
  salgado: '<path d="M12 3c3.4 4.2 6.5 8.2 6.5 12a6.5 6.5 0 0 1-13 0c0-3.8 3.1-7.8 6.5-12z"/><path d="M9.5 15.5c.6 1.2 1.6 1.8 2.5 1.8"/>',
  doce: '<path d="M4 11h16v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="M4 15h16"/><path d="M12 11V7"/><path d="M12 7c-1.5 0-1.5-2.5 0-3 1.5.5 1.5 3 0 3"/>',
  kit: '<path d="M4 9h16l-1.5 11h-13z"/><path d="M8 9l2-5M16 9l-2-5"/><path d="M9 13v4M15 13v4"/>',
  talheres: '<path d="M7 3v8a2 2 0 0 0 2 2h0V3"/><path d="M8 13v8"/><path d="M17 3c-2 1-3 3.5-3 6v3h3v9"/>'
};
window.DM_svg = function (nome, tam) {
  var p = window.DM_ICONES[nome] || window.DM_ICONES.talheres;
  return '<svg viewBox="0 0 24 24" width="' + (tam || 24) + '" height="' + (tam || 24) + '" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
};
