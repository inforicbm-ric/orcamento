# OrçaFácil - Controle de Orçamentos

App PWA profissional para controle e comparação de orçamentos. **100% offline** com sincronização quando online.

## Funcionalidades

- **Categorias**: Farmácia, Construção, Automotivo, Alimentação, Vestuário, Eletrônicos, Presentes, Outros
- **Produtos**: Cadastre produtos com descrição e unidade
- **Orçamentos**: Adicione orçamentos de múltiplos fornecedores por produto
- **Comparação**: Ranking automático por preço (ouro/prata/bronze)
- **Economia**: Veja quanto você economiza escolhendo o melhor preço
- **Exportar/Importar**: Backup em JSON dos seus dados
- **100% Offline**: Funciona sem internet graças ao IndexedDB + Service Worker
- **Design Moderno**: Interface dark mode profissional com ícones

## Dados de Exemplo

O app já vem com dados de exemplo:
- **Farmácia**: LAVITAN com 15 orçamentos de farmácias
- **Construção**: Cimento CP-II com 5 orçamentos de lojas

## Como usar

1. Abra o `index.html` no navegador
2. Ou suba no **GitHub Pages** (veja abaixo)
3. Adicione à tela inicial no celular para usar como app nativo

## Deploy no GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos desta pasta
3. Vá em **Settings > Pages**
4. Selecione a branch `main` e pasta `/ (root)`
5. Seu app estará online em `https://seuusuario.github.io/nome-do-repo/`

## Banco de Dados

Os dados ficam salvos localmente no **IndexedDB** do navegador. Para sincronizar com a nuvem:

### Opção 1: Google Sheets (FREE)
1. Crie uma planilha no Google Sheets
2. Abra **Extensões > Apps Script**
3. Cole o script de API fornecido
4. Use a URL do deploy como endpoint

### Opção 2: Supabase (FREE tier)
1. Crie projeto em supabase.com
2. Crie tabelas: categorias, produtos, orcamentos
3. Use a URL e anon key no app

### Opção 3: Firebase (FREE tier)
1. Crie projeto em firebase.google.com
2. Ative Firestore
3. Configure as regras de segurança
4. Use a configuração no app

## Estrutura de arquivos

```
orcamento-app/
├── index.html       # App completo (SPA)
├── manifest.json    # Config PWA
├── sw.js            # Service Worker (offline)
├── icons/           # Ícones do app
└── README.md        # Este arquivo
```

## Licença

Uso livre. Feito para você economizar tempo e dinheiro.
