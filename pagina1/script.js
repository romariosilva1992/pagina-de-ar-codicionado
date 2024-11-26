const products = [
    {
        id: 1,
        name: 'Split Inverter 9000 BTUs',
        brand: 'Samsung',
        price: 1899.99,
        description: 'Ideal para ambientes até 12m²',
        features: ['Tecnologia Inverter', 'Baixo Consumo', 'Ultra Silencioso']
    },
    {
        id: 2,
        name: 'Split Inverter 12000 BTUs',
        brand: 'LG',
        price: 2299.99,
        description: 'Ideal para ambientes até 20m²',
        features: ['Wi-Fi Integrado', 'Filtro 3M', 'Display LED']
    },
    {
        id: 3,
        name: 'Split Inverter 18000 BTUs',
        brand: 'Daikin',
        price: 3299.99,
        description: 'Ideal para ambientes até 30m²',
        features: ['Tecnologia Plasma', 'Auto-limpeza', 'Multi Flow']
    },
    {
        id: 4,
        name: 'Split Cassete 24000 BTUs',
        brand: 'Carrier',
        price: 4599.99,
        description: 'Ideal para ambientes comerciais',
        features: ['4 Vias', 'Controle Remoto', 'Instalação Profissional']
    }
];

function renderProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <h3>${product.name}</h3>
            <p class="brand">${product.brand}</p>
            <div class="features">
                ${product.features.map(feature => `
                    <span class="feature-badge">${feature}</span>
                `).join('')}
            </div>
            <p>${product.description}</p>
            <p class="product-price">R$ ${product.price.toFixed(2)}</p>
            <button onclick="buyProduct(${product.id})">Comprar Agora</button>
        </div>
    `).join('');
}

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('serviceForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        serviceType: document.getElementById('serviceType').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };

    try {
        // Simulação de envio para API
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form submitted:', formData);
        alert('Solicitação enviada com sucesso! Nossa equipe entrará em contato em até 24 horas.');
        e.target.reset();
    } catch (error) {
        console.error('Error:', error);
        alert('Erro ao enviar solicitação. Por favor, tente novamente ou entre em contato pelo WhatsApp.');
    }
});

function buyProduct(productId) {
    const product = products.find(p => p.id === productId);
    const message = `Olá, gostaria de saber mais sobre o ${product.name}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Inicializa a renderização dos produtos
renderProducts();