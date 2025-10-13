// Menu móvel simples sem alternância de tema
const btn = document.querySelector('.menu-btn');
const list = document.getElementById('menuList');

if (btn) {
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    list.style.display = open ? 'none' : 'flex';
    list.style.flexDirection = 'column';
    list.style.gap = '12px';
    list.style.padding = '12px 0';
  });
}

// Simulação de carrinho: incrementa contador ao clicar "Adicionar"
const cartLink = document.querySelector('a[href="#carrinho"]');
let count = 0;
document.querySelectorAll('.add').forEach(b=>{
  b.addEventListener('click', ()=>{
    count++;
    cartLink.textContent = `Carrinho (${count})`;
  });
});

// Newsletter: feedback básico
document.querySelector('.newsletter')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  alert('Obrigado por assinar!');
});
