'use strict';

/* =====================================================
   SEUS DADOS — troque aqui
   whatsapp: só números, com 55 + DDD (ex.: 5538991234567)
   logo: caminho de uma imagem (ex.: 'logo.png') ou deixe ''
   ===================================================== */
const CONFIG = {
  nome: 'MobJan',
  slogan: 'O aplicativo da nossa região · Janaúba, Jaíba e Porteirinha',
  logo: 'https://ugc.production.linktr.ee/e9edd1d4-a7ee-4734-af31-ae2c62ae56f7_Green-Neon-White.png',
  playStore: 'https://play.google.com/store/apps/details?id=br.com.devbase.mobjan&hl=pt_BR',
  appStore: 'https://apps.apple.com/app/mobjan/id6599854445',
  mensagem: 'Olá, gostaria de solicitar uma viagem',
  cidades: [
    { nome: 'Janaúba', whatsapp: '553899663821' },
    { nome: 'Jaíba', whatsapp: '553884030303' },
    { nome: 'Porteirinha', whatsapp: '553884030303' },
  ],
  instagram: 'mobjan_',
};

const ICONES = {
  carro: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M18.9 6a1.5 1.5 0 0 0-1.4-1H6.5a1.5 1.5 0 0 0-1.4 1L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8l-2.1-6ZM6.5 16A1.5 1.5 0 1 1 8 14.5 1.5 1.5 0 0 1 6.5 16Zm11 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5ZM5 11l1.5-4.5h11L19 11H5Z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/></svg>',
  apple: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>',
  whats: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 1.9 17.7L.5 23.5l5.9-1.5A11.8 11.8 0 0 0 20.5 3.5Zm-8.4 18a9.7 9.7 0 0 1-5-1.4l-.4-.2-3.5.9.9-3.4-.2-.4a9.8 9.8 0 1 1 8.2 4.5Zm5.4-7.3c-.3-.2-1.8-.9-2-1s-.5-.2-.7.1-.8 1-1 1.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1 2.5 5.9 5.9 0 0 0 1.2 3.1 13.4 13.4 0 0 0 5.2 4.6c1.9.8 2.7.9 3.6.7a3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.1-.3-.2-.7-.4Z"/></svg>',
  insta: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
};

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
let ordem = 0;

function botao({ href, classe, icone, titulo, sub }) {
  const atraso = (ordem++ * 60) + 'ms';
  return `<a class="btn ${classe}" href="${esc(href)}" target="_blank" rel="noopener" style="animation-delay:${atraso}">
    <span class="ico">${ICONES[icone]}</span>
    <span class="txt">${sub ? `<small>${esc(sub)}</small>` : ''}${esc(titulo)}</span>
    <span class="seta" aria-hidden="true">›</span>
  </a>`;
}

document.getElementById('logo').innerHTML = CONFIG.logo
  ? `<img src="${esc(CONFIG.logo)}" alt="Logo ${esc(CONFIG.nome)}">`
  : ICONES.carro;
document.getElementById('nome').textContent = CONFIG.nome;
document.getElementById('slogan').textContent = CONFIG.slogan;
document.title = `${CONFIG.nome} · Baixe o app`;

document.getElementById('lojas').innerHTML =
  botao({ href: CONFIG.playStore, classe: 'loja', icone: 'play', sub: 'Baixar no', titulo: 'Google Play' }) +
  botao({ href: CONFIG.appStore, classe: 'loja', icone: 'apple', sub: 'Baixar na', titulo: 'App Store' });

document.getElementById('cidades').innerHTML = CONFIG.cidades.map(c => botao({
  href: `https://wa.me/${c.whatsapp}?text=${encodeURIComponent(CONFIG.mensagem.replace('{cidade}', c.nome))}`,
  classe: 'cidade', icone: 'whats', sub: 'Solicitar veículo em', titulo: c.nome,
})).join('');

document.getElementById('redes').innerHTML = botao({
  href: `https://instagram.com/${CONFIG.instagram}`,
  classe: 'insta', icone: 'insta', sub: 'Instagram', titulo: '@' + CONFIG.instagram,
});

document.getElementById('rodape').textContent = `© ${new Date().getFullYear()} ${CONFIG.nome}`;
