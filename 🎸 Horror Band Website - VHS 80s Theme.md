# 🎸 Horror Band Website - VHS 80s Theme

Um site completo e responsivo para banda com tema misterioso e enigmático, inspirado na estética de filmes de terror dos anos 80 com estilo VHS, preto e branco, texturas granuladas e atmosfera de horror e suspense.

## ✨ Características Principais

### 🎨 Design e Estética
- **Tema Horror VHS dos Anos 80**: Estética retrô com efeitos de estática, scanlines e glitch
- **Paleta de Cores**: Principalmente preto e branco com acentos vermelhos
- **Tipografia Horror**: Fontes distorcidas e serrilhadas como pôsteres de filmes de terror antigos
- **Texturas Granuladas**: Efeitos VHS autênticos com ruído e interferência

### 📱 Responsividade
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Layout Adaptativo**: Grid e flexbox modernos para layouts flexíveis
- **Menu Mobile**: Menu hambúrguer com animações suaves
- **Touch-Friendly**: Elementos otimizados para dispositivos touch

### 🎭 Efeitos Interativos
- **Animações VHS**: Efeitos de estática, glitch e scanlines
- **Hover Effects**: Interações visuais em botões e elementos
- **Scroll Animations**: Elementos aparecem conforme o usuário rola a página
- **Easter Eggs**: Código Konami para ativar modo horror intenso
- **Lightbox Gallery**: Galeria de fotos com visualização ampliada

### 🎵 Seções Incluídas
- **Hero Section**: Apresentação principal com call-to-actions
- **Bio da Banda**: História e membros da banda
- **Discografia**: Álbuns com players simulados e links de streaming
- **Tour Dates**: Datas de shows com sistema de ingressos
- **Galeria**: Fotos da banda com efeitos visuais
- **Contato**: Formulário funcional e informações de contato

## 📁 Estrutura do Projeto

```
horror-band-website/
├── index.html          # Arquivo HTML principal
├── css/
│   └── style.css       # Estilos CSS com tema horror VHS
├── js/
│   └── script.js       # JavaScript para efeitos interativos
├── images/             # Pasta para imagens da banda
├── assets/             # Pasta para vídeos e outros assets
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### 1. Configuração Básica
1. Baixe todos os arquivos do projeto
2. Mantenha a estrutura de pastas intacta
3. Abra `index.html` em um navegador web

### 2. Personalização do Conteúdo

#### Informações da Banda
Procure por comentários `<!-- INSERT ... HERE -->` no arquivo `index.html` e substitua por:

- **Nome da Banda**: Substitua todas as ocorrências de `<!-- INSERT BAND NAME HERE -->`
- **Logo**: Adicione o logo em `images/band-logo.png`
- **Tagline**: Personalize a descrição da banda

#### Imagens Necessárias
Adicione as seguintes imagens na pasta `images/`:

**Imagens Principais:**
- `band-logo.png` - Logo da banda
- `band-hero-image.jpg` - Imagem principal do hero
- `band-group-photo.jpg` - Foto do grupo
- `latest-album-cover.jpg` - Capa do último álbum

**Membros da Banda:**
- `member-1.jpg` - Foto do membro 1
- `member-2.jpg` - Foto do membro 2
- `member-3.jpg` - Foto do membro 3
- `member-4.jpg` - Foto do membro 4

**Discografia:**
- `album-2.jpg` - Capa do álbum 2
- `album-3.jpg` - Capa do álbum 3
- `album-4.jpg` - Capa do álbum 4

**Galeria:**
- `gallery-1.jpg` até `gallery-6.jpg` - Fotos da galeria

#### Vídeo de Fundo (Opcional)
Para adicionar um vídeo de fundo VHS:
1. Adicione o vídeo em `assets/horror-background.mp4`
2. Descomente as linhas do vídeo no HTML:
```html
<video autoplay muted loop class="bg-video">
    <source src="assets/horror-background.mp4" type="video/mp4">
</video>
```

### 3. Personalização de Conteúdo

#### Biografia da Banda
Edite os parágrafos na seção bio:
```html
<p class="bio-paragraph">
    <!-- Substitua pelo texto da biografia -->
</p>
```

#### Informações dos Membros
Atualize nome, instrumento e foto de cada membro:
```html
<div class="member-card">
    <img src="images/member-1.jpg" alt="Member 1" class="member-photo">
    <h4 class="member-name">Nome do Membro</h4>
    <p class="member-role">Instrumento/Função</p>
</div>
```

#### Discografia
Adicione informações dos álbuns:
```html
<h3 class="album-title">Título do Álbum</h3>
<p class="album-year">Ano de Lançamento</p>
<p class="album-description">Descrição do álbum</p>
```

#### Datas de Shows
Atualize as datas de apresentações:
```html
<div class="tour-date">
    <div class="date-info">
        <span class="date-day">15</span>
        <span class="date-month">DEZ</span>
    </div>
    <div class="show-info">
        <h3 class="venue-name">Nome do Local</h3>
        <p class="venue-location">Cidade, Estado</p>
        <p class="show-time">20:00</p>
    </div>
</div>
```

#### Links de Streaming
Atualize os links para plataformas de música:
```html
<a href="URL_SPOTIFY" class="streaming-link spotify">Spotify</a>
<a href="URL_APPLE_MUSIC" class="streaming-link apple">Apple Music</a>
```

#### Informações de Contato
Substitua os emails de contato:
```html
<p class="contact-detail">seuemail@banda.com</p>
```

#### Redes Sociais
Adicione os links das redes sociais:
```html
<a href="URL_INSTAGRAM" class="social-link instagram">📷</a>
<a href="URL_FACEBOOK" class="social-link facebook">📘</a>
```

## 🎨 Personalização Visual

### Cores
Para alterar as cores principais, edite as variáveis CSS em `style.css`:
```css
/* Cores principais */
--primary-color: #ff0000;    /* Vermelho */
--bg-color: #000000;         /* Preto */
--text-color: #ffffff;       /* Branco */
```

### Fontes
As fontes horror são carregadas do Google Fonts:
- **Creepster**: Títulos principais
- **Nosifer**: Efeitos de glitch
- **Metal Mania**: Texto geral
- **Butcherman**: Logo
- **Eater**: Subtítulos

### Efeitos VHS
Os efeitos podem ser ajustados em `style.css`:
```css
/* Intensidade do ruído VHS */
.vhs-background {
    animation: vhsNoise 0.1s infinite linear;
}

/* Velocidade das scanlines */
.scanlines {
    animation: scanlineMove 2s infinite linear;
}
```

## 🎮 Recursos Interativos

### Efeitos JavaScript
- **Menu Mobile**: Navegação responsiva com animações
- **Smooth Scrolling**: Rolagem suave entre seções
- **VHS Effects**: Efeitos de estática e glitch aleatórios
- **Form Handling**: Simulação de envio de formulário
- **Gallery Lightbox**: Visualização ampliada de fotos
- **Audio Controls**: Simulação de players de música

### Easter Eggs
- **Código Konami**: ↑↑↓↓←→←→BA para ativar modo horror intenso
- **Efeitos Aleatórios**: Glitches ocasionais durante navegação
- **Hover Effects**: Efeitos especiais ao passar o mouse

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica moderna
- **CSS3**: Flexbox, Grid, animações e efeitos visuais
- **JavaScript ES6+**: Interatividade e efeitos dinâmicos
- **Google Fonts**: Tipografia horror autêntica
- **Responsive Design**: Mobile-first approach

## 📱 Compatibilidade

### Navegadores Suportados
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Dispositivos Testados
- Desktop (1920x1080+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## ⚡ Performance

### Otimizações Incluídas
- **CSS Minificado**: Estilos otimizados
- **Lazy Loading**: Carregamento otimizado de imagens
- **Throttled Scroll**: Eventos de scroll otimizados
- **Reduced Motion**: Suporte para usuários com preferências de movimento reduzido

### Dicas de Performance
1. Otimize imagens para web (WebP recomendado)
2. Use CDN para assets estáticos
3. Comprima vídeos de fundo
4. Considere lazy loading para galeria

## 🎯 SEO e Acessibilidade

### SEO
- Meta tags otimizadas
- Estrutura HTML semântica
- Alt text para imagens
- Schema markup para eventos

### Acessibilidade
- Navegação por teclado
- Contraste adequado
- Labels para formulários
- Suporte a leitores de tela
- Respeito às preferências de movimento

## 🚀 Deploy

### Hospedagem Estática
O site pode ser hospedado em qualquer serviço de hospedagem estática:
- GitHub Pages
- Netlify
- Vercel
- AWS S3

### Configuração de Servidor
Para formulário de contato funcional, configure:
1. Backend para processar formulários
2. Serviço de email (SendGrid, Mailgun)
3. Proteção contra spam (reCAPTCHA)

## 📞 Suporte

Para dúvidas sobre implementação ou personalização:
1. Verifique os comentários no código
2. Consulte a documentação das tecnologias utilizadas
3. Teste em diferentes dispositivos e navegadores

## 📄 Licença

Este projeto é fornecido como template para uso pessoal e comercial. Personalize conforme necessário para sua banda ou projeto.

---

**🎸 Rock on! Que sua banda domine os palcos com este site assombrosamente incrível! 🎸**

