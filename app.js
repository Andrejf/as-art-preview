'use strict';
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function setMenu(open) {
  menu?.setAttribute('aria-expanded', String(open));
  menu?.setAttribute('aria-label', open ? 'Zapri meni' : 'Odpri meni');
  nav?.classList.toggle('open', open);
}
menu?.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
nav?.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('click', e => {
  if (!e.target.closest('header')) setMenu(false);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menu.focus();
  }
});
matchMedia('(max-width: 720px)').addEventListener('change', () => setMenu(false));
const dialog=document.querySelector('#contact-dialog');
document.querySelectorAll('[data-viber]').forEach(button=>button.addEventListener('click',()=>{document.querySelector('#copy-status').textContent='';dialog.showModal();}));
document.querySelector('.dialog-close')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
document.querySelector('#copy-phone')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('+38641793322');document.querySelector('#copy-status').textContent='Številka je kopirana. Prilepite jo v Viber ali med stike.';}catch{document.querySelector('#copy-status').textContent='Označite in kopirajte številko zgoraj ali izberite »Shrani stik«.';}});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});document.querySelectorAll('[data-type]').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.type!==button.dataset.filter;});}));
const products={scylon:{name:'TIME Scylon',type:'CESTNO KOLO / SESTAVA PO MERI',image:'hero-bike.webp',description:'Za razpoložljive velikosti okvirja, možnosti sestave in ceno nas kontaktirajte.'},scott:{name:'Scott Addict RC',type:'CESTNO KOLO',image:'scott.jpg',description:'Za različice modela, razpoložljive velikosti, ceno in dobavo nas kontaktirajte.'},alpe:{name:'TIME Alpe d’Huez',type:'OKVIR / SESTAVA PO MERI',image:'time-frame.webp',description:'Okvir za sestavo cestnega kolesa. Za velikosti, ceno okvirja ali ponudbo za sestavljeno kolo nas kontaktirajte.'}};
if(document.querySelector('#detail-title')){const key=new URLSearchParams(location.search).get('model')||'scylon';const p=products[key]||products.scylon;document.querySelector('#detail-title').textContent=p.name;document.querySelector('#product-breadcrumb').textContent=p.name;document.querySelector('#detail-type').textContent=p.type;document.querySelector('#detail-description').textContent=p.description;document.querySelector('#detail-image').src='assets/'+p.image;document.querySelector('#detail-image').alt=p.name;document.querySelector('#product-enquiry').href='kontakt.html?tema='+encodeURIComponent(p.name);document.title=p.name+' · AS Art';}
const form=document.querySelector('#enquiry-form');
if(form){const topic=new URLSearchParams(location.search).get('tema');if(topic){form.elements.topic.value='Kolo ali oprema';form.elements.message.value='Pozdravljeni, zanima me '+topic+'.\n';}form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const d=new FormData(form);const subject='AS Art – '+d.get('topic');const body=d.get('message')+'\n\n'+d.get('name')+'\n'+d.get('email');location.href='mailto:andrej.sajovec@as-art.si?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);document.querySelector('#form-status').textContent='Sporočilo je pripravljeno za vašo e-poštno aplikacijo. Če se ne odpre, nam pišite na andrej.sajovec@as-art.si. Obrazec sam ne pošilja sporočil.';});}

// The home selection scrolls natively on touch screens. Buttons provide the
// same browsing option for keyboard and pointer users; nothing auto-advances.
const rail = document.querySelector('#home-bikes');
if (rail) {
  const cards = [...rail.querySelectorAll('.product-card')];
  const previous = document.querySelector('[data-bike-prev]');
  const next = document.querySelector('[data-bike-next]');
  const position = document.querySelector('#bike-position');
  const currentIndex = () => {
    const first = cards[0].getBoundingClientRect().left;
    const stride = cards.length > 1 ? cards[1].getBoundingClientRect().left - first : rail.clientWidth;
    return Math.max(0, Math.min(cards.length - 1, Math.round(rail.scrollLeft / stride)));
  };
  const update = () => {
    const index = currentIndex();
    previous.disabled = index === 0;
    next.disabled = index === cards.length - 1;
    position.textContent = `${index + 1} / ${cards.length}`;
  };
  const move = direction => {
    const index = Math.max(0, Math.min(cards.length - 1, currentIndex() + direction));
    const target = rail.scrollLeft + cards[index].getBoundingClientRect().left - rail.getBoundingClientRect().left;
    rail.scrollTo({ left: target, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  rail.addEventListener('scroll', update, { passive: true });
  new ResizeObserver(update).observe(rail);
  document.querySelector('.bike-controls').hidden = false;
  update();
}
