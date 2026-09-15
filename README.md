# OrçaFácil v2.4.0 (PWA)

Aplicativo web completo (Vanilla HTML5, CSS3 e JavaScript) para controle e comparação de orçamentos, cotações e compras com sugestão inteligente de genéricos e similares para farmácia.

## Novidades da v2.4.0
- **Medicamentos Similares e Genéricos**: Busca automática e tags clicáveis ao cadastrar ou editar remédios na categoria Farmácia (com base offline rápida e busca online em APIs públicas).
- **Dashboard com Ordenação Inteligente**: Lista de produtos recentes ordenada pela data do último orçamento (decrescente).
- **Cards e Detalhes de Produtos**: Exibição clara dos similares e genéricos cadastrados, inclusão no compartilhamento do WhatsApp e na exportação em Excel (.CSV).
- **Indicadores de Preço Confiáveis**: Exibição de Menor Preço, Maior Preço e Economia real.

## Estrutura dos Arquivos
- **`index.html`**: Toda a interface, estilos e lógica da aplicação (IndexedDB v2).
- **`sw.js`**: Service Worker para funcionamento 100% offline e atualização automática de versão.
- **`app.webmanifest`**: Manifesto PWA para permitir a instalação como aplicativo no celular e desktop.
- **`icons/`**: Mantenha a sua pasta de ícones existente junto com esses arquivos.
- **`README.md`**: Instruções de uso e publicação.

## Como Usar
1. **Localmente**: Basta abrir o arquivo `index.html` em qualquer navegador moderno.
2. **GitHub Pages (Recomendado para Celular/PWA)**:
   - Crie um repositório no GitHub.
   - Envie os arquivos desta pasta para o repositório.
   - Nas configurações do repositório, vá em **Pages** e selecione a branch `main`.
   - Acesse o link fornecido pelo GitHub no celular e clique em **"Adicionar à tela inicial"** para instalar como aplicativo!
