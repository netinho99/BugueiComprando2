const produtos = [
  {
    name: "Mochila Notebook Impermeável TechBlend",
    description: "Reforçada com Entrada USB para Laptop até 15.6 Polegadas. Ideal para uso executivo, faculdade ou viagens curtas.",
    benefits: [
      "Proteção impermeável e estrutura blindada",
      "Entrada USB externa integrada",
      "Design executivo discreto",
      "Capacidade de 20 Litros"
    ],
    price: "R$ 49,90",
    installments: "Ou 2x de R$ 24,95",
    category: "Viagem",
    rating: "4.2",
    link: "https://amzn.to/4sZ6CjU",
    images: [
      "https://m.media-amazon.com/images/I/512p+4u7KTL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51Kv6T8h3LL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/418TGcGAhUL._AC_SX679_.jpg"
    ],
    reason: "A melhor relação custo-benefício para quem precisa proteger o notebook sem gastar muito. O acabamento surpreende pelo valor."
  },
  {
    name: "Base Cooler Duplo para Notebook",
    description: "Suporte ergonômico com 8 níveis de ajuste, silencioso e com saída USB adicional.",
    benefits: [
      "Melhora a postura (8 níveis de altura)",
      "Refrigeração silenciosa e eficiente",
      "Não perde porta USB (porta pass-through)",
      "Suporta até 17 polegadas"
    ],
    price: "R$ 56,90",
    installments: "Ou 2x de R$ 28,45",
    category: "Tecnologia",
    rating: "4.7",
    link: "https://amzn.to/4bofQQd",
    images: [
      "https://m.media-amazon.com/images/I/61sWhcvub6L._AC_SL1024_.jpg",
      "https://m.media-amazon.com/images/I/61RRLSliy7L._AC_SL1200_.jpg",
      "https://m.media-amazon.com/images/I/61Ouz3fj-4L._AC_SL1200_.jpg"
    ],
    reason: "Essencial para quem trabalha muitas horas no notebook. Evita superaquecimento e dores no pescoço de forma barata e eficaz."
  },
  {
    name: "Kit Logitech MK220 (Teclado e Mouse)",
    description: "Combo sem fio compacto com pilhas inclusas, conexão confiável e layout padrão ABNT2.",
    benefits: [
      "Conexão sem fio sem atrasos",
      "Design compacto que poupa espaço",
      "Pilhas com meses de duração",
      "Padrão brasileiro (ABNT2)"
    ],
    price: "R$ 119,90",
    installments: "Ou 3x de R$ 39,98",
    category: "Tecnologia",
    rating: "4.7",
    link: "https://amzn.to/4pvKDhw",
    images: [
      "https://m.media-amazon.com/images/I/51eu4O70lpL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71gEx-xmVcL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61oRiWfu4CL._AC_SL1500_.jpg"
    ],
    reason: "A Logitech domina este segmento. É o tipo de kit que você compra, conecta e esquece que existe. Simples e durável."
  },
  {
    name: "Kit 4 Toalhas Gigantes Premium",
    description: "Toalhas de banho grandes (70x150cm), macias e com alto poder de absorção para o uso diário.",
    benefits: [
      "Tamanho gigante (70x150)",
      "100% algodão de alta absorção",
      "Toque macio premium",
      "Fácil lavagem"
    ],
    price: "R$ 98,99",
    installments: "Ou 2x de R$ 49,50",
    category: "Dia a Dia",
    rating: "4.7",
    link: "https://amzn.to/49Ak4TD",
    images: [
      "https://m.media-amazon.com/images/I/81Arq7i+7ML._AC_SL1200_.jpg",
      "https://m.media-amazon.com/images/I/717CHo2O4KL._AC_SL1280_.jpg",
      "https://m.media-amazon.com/images/I/71nQjfDbybL._AC_SL1280_.jpg"
    ],
    reason: "Renovar as toalhas de casa pagando menos de R$ 25 por uma toalha gigante e de boa qualidade é um achado raro."
  }
];

const container = document.getElementById("products");

function render(lista) {
  container.innerHTML = lista.map((p, index) => {
    // Sanitizando os arrays para injeção no HTML
    const imagesJSON = JSON.stringify(p.images).replace(/"/g, '&quot;');
    const temMaisImagens = p.images.length > 1;

    return `
      <article class="card">
        <div class="card-image-wrapper">
          <span class="badge">${p.category}</span>
          <img 
            id="img-${index}"
            src="${p.images[0]}" 
            alt="${p.name}" 
            data-images="${imagesJSON}"
            data-current="0"
            onclick="abrirModal(this.src)"
          >
          ${temMaisImagens ? `
            <button class="image-nav prev" aria-label="Imagem anterior" onclick="trocarImagem(${index}, -1)">‹</button>
            <button class="image-nav next" aria-label="Próxima imagem" onclick="trocarImagem(${index}, 1)">›</button>
          ` : ''}
        </div>
        
        <div class="card-content">
          <h3 class="card-title">${p.name}</h3>
          <div class="card-rating">
            <span class="star">★</span> ${p.rating} / 5.0 na Amazon
          </div>
          
          <p class="card-desc">${p.description}</p>
          
          <ul class="benefits-list">
            ${p.benefits.map(b => `<li>${b}</li>`).join('')}
          </ul>
          
          <div class="card-footer">
            <div class="price-block">
              <div class="price">${p.price}</div>
              <div class="installments">${p.installments}</div>
            </div>
            
            <div class="actions">
              <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="btn-buy">Ver na Amazon</a>
              <button class="btn-share" onclick="compartilhar('${p.name}', '${p.link}')" aria-label="Compartilhar">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
              </button>
            </div>

            <div class="editor-note">
              <strong>💡 A Opinião da Equipe:</strong>
              ${p.reason}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Inicialização
render(produtos);

// Navegação de Imagens
function trocarImagem(cardIndex, direcao) {
  const imgElement = document.getElementById(`img-${cardIndex}`);
  const imagens = JSON.parse(imgElement.getAttribute('data-images').replace(/&quot;/g, '"'));
  let currentIndex = parseInt(imgElement.getAttribute('data-current'));
  
  currentIndex += direcao;
  
  if (currentIndex < 0) currentIndex = imagens.length - 1;
  if (currentIndex >= imagens.length) currentIndex = 0;
  
  imgElement.src = imagens[currentIndex];
  imgElement.setAttribute('data-current', currentIndex);
}

// Filtros
function filtrar(categoria, btnElement) {
  // Atualizar botões
  document.querySelectorAll('.nav-filters button').forEach(b => b.classList.remove('active'));
  if(btnElement) btnElement.classList.add('active');

  // Filtrar e renderizar
  const termoBusca = document.getElementById('search').value.toLowerCase();
  
  let filtrados = produtos;
  
  if (categoria !== 'todos') {
    filtrados = filtrados.filter(p => p.category === categoria);
  }
  
  if (termoBusca) {
    filtrados = filtrados.filter(p => p.name.toLowerCase().includes(termoBusca) || p.description.toLowerCase().includes(termoBusca));
  }
  
  render(filtrados);
}

// Busca Textual
function buscarProduto(termo) {
  const btnAtivo = document.querySelector('.nav-filters button.active');
  const categoriaAtual = btnAtivo ? btnAtivo.innerText : 'Todas as Ofertas';
  
  let catMap = {
    'Todas as Ofertas': 'todos',
    'Dia a Dia': 'Dia a Dia',
    'Tecnologia': 'Tecnologia',
    'Viagem': 'Viagem'
  };

  filtrar(catMap[categoriaAtual], btnAtivo);
}

// Compartilhar (Web Share API nativa)
function compartilhar(nome, link) {
  if (navigator.share) {
    navigator.share({
      title: 'Achado no BugueiComprando',
      text: `Dá uma olhada nesse achado: ${nome}`,
      url: link
    }).catch(console.error);
  } else {
    navigator.clipboard.writeText(link);
    alert('Link copiado para a área de transferência!');
  }
}

// Modal de Imagem
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');

function abrirModal(src) {
  modalImg.src = src;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Evita rolagem do fundo
}

function fecharModal(event) {
  if (event.target === modal) {
    fecharModalForcado();
  }
}

function fecharModalForcado() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    fecharModalForcado();
  }
});
