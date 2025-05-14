document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidade de tabs na página de investimentos
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    if (tabButtons.length > 0 && tabPanes.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove a classe active de todos os botões e painéis
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));
                
                // Adiciona a classe active ao botão clicado
                this.classList.add('active');
                
                // Mostra o painel correspondente
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    // Funcionalidade de filtro de imóveis
    const filtroBtn = document.getElementById('filtrar');
    const imovelCards = document.querySelectorAll('.imovel-card');
    
    if (filtroBtn && imovelCards.length > 0) {
        filtroBtn.addEventListener('click', function() {
            const bairroSelecionado = document.getElementById('bairro').value;
            const tipoSelecionado = document.getElementById('tipo').value;
            const quartosSelecionados = document.getElementById('quartos').value;
            const banheirosSelecionados = document.getElementById('banheiros').value;
            
            imovelCards.forEach(card => {
                let mostrar = true;
                
                // Filtro por bairro
                if (bairroSelecionado && card.getAttribute('data-bairro') !== bairroSelecionado) {
                    mostrar = false;
                }
                
                // Filtro por tipo
                if (tipoSelecionado && card.getAttribute('data-tipo') !== tipoSelecionado) {
                    mostrar = false;
                }
                
                // Filtro por quartos (mínimo)
                if (quartosSelecionados && parseInt(card.getAttribute('data-quartos')) < parseInt(quartosSelecionados)) {
                    mostrar = false;
                }
                
                // Filtro por banheiros (mínimo)
                if (banheirosSelecionados && parseInt(card.getAttribute('data-banheiros')) < parseInt(banheirosSelecionados)) {
                    mostrar = false;
                }
                
                // Mostra ou esconde o card
                if (mostrar) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    // Funcionalidade para revelar API Key com senha
    const passwordInput = document.getElementById('password-input');
    const passwordButton = document.getElementById('password-button');
    const apiKey = document.getElementById('api-key');
    const keyValue = document.getElementById('key-value');
    const groupSelect = document.getElementById('group-select');
    
    if (passwordInput && passwordButton && apiKey && keyValue) {
        // Senha definida (pode ser alterada pelo instrutor)
        const correctPassword = "aula2023";
        
        // API Keys para diferentes grupos
        const apiKeys = {
            "grupo1": "sk-openai-key-grupo1",
            "grupo2": "sk-openai-key-grupo2",
            "grupo3": "sk-openai-key-grupo3",
            "grupo4": "sk-openai-key-grupo4",
            "grupo5": "sk-openai-key-grupo5",
            "grupo6": "sk-openai-key-grupo6"
        };
        
        passwordButton.addEventListener('click', function() {
            if (passwordInput.value === correctPassword) {
                const selectedGroup = groupSelect.value;
                const selectedApiKey = apiKeys[selectedGroup];
                
                apiKey.classList.add('api-key-visible');
                keyValue.textContent = selectedApiKey;
            } else {
                alert("Senha incorreta. Por favor, consulte o instrutor para obter a senha correta.");
            }
        });
        
        // Permitir o uso da tecla Enter para verificar a senha
        passwordInput.addEventListener('keyup', function(event) {
            if (event.key === "Enter") {
                passwordButton.click();
            }
        });
    }
    
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação de entrada para cards
    function animateOnScroll() {
        const cards = document.querySelectorAll('.imovel-card, .neighborhood-card, .advantage-card, .step, .entertainment-card');
        
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Inicialmente definir a opacidade como 0 e adicionar transição
    const animatedElements = document.querySelectorAll('.imovel-card, .neighborhood-card, .advantage-card, .step, .entertainment-card');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Executar a animação no carregamento e no scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Adicionar listener para o evento de redimensionamento da janela
    window.addEventListener('resize', function() {
        // Ajustar layout responsivo se necessário
    });
    
    // Implementação do Lightbox para imagens
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxClose = document.getElementById('lightbox-close');
        
        // Seleciona todas as imagens em cards de imóveis
        const propertyImages = document.querySelectorAll('.imovel-image img, .instruction-image, .strategy-image img');
        
        // Adiciona a classe para indicar que são clicáveis
        propertyImages.forEach(img => {
            img.classList.add('clickable-image');
            
            // Adiciona o evento de clique para abrir o lightbox
            img.addEventListener('click', function() {
                lightboxImage.src = this.src;
                lightboxImage.alt = this.alt;
                
                // Abre o lightbox com animação
                lightbox.style.display = 'flex';
                setTimeout(() => {
                    lightbox.style.opacity = '1';
                }, 10);
                
                document.body.style.overflow = 'hidden'; // Impede rolagem da página
            });
        });
        
        // Fecha o lightbox quando o botão fechar é clicado
        if (lightboxClose) {
            lightboxClose.addEventListener('click', function() {
                closeLightbox();
            });
        }
        
        // Fecha o lightbox quando clicar fora da imagem
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        // Função para fechar o lightbox com animação
        function closeLightbox() {
            lightbox.style.opacity = '0';
            setTimeout(() => {
                lightbox.style.display = 'none';
                document.body.style.overflow = ''; // Restaura rolagem da página
            }, 300);
        }
        
        // Fecha o lightbox quando a tecla ESC é pressionada
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.style.display === 'flex') {
                closeLightbox();
            }
        });
    }
}); 