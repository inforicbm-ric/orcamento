# OrçaFácil - Controle de Orçamentos

App PWA profissional para controle e comparação de orçamentos. **100% offline** com sincronização quando online.

## Funcionalidades

- **Categorias**: Farmácia, Construção, Automotivo, Alimentação, Vestuário, Eletrônicos, Presentes, Outros
- **Produtos**: Cadastre produtos com descrição, unidade e "Produto Para" (pessoa)
- **Orçamentos**: Adicione orçamentos de múltiplos fornecedores por produto
- **Indisponível**: Marque quando a loja não tem o produto
- **Comprado**: Marque qual orçamento você comprou (com toggle para desmarcar)
- **Compartilhar**: Envie o ranking de orçamentos formatado direto pro WhatsApp
- **Faltam orçar**: Veja quais lojas da categoria ainda não cotaram o produto — clique para orçar direto!
- **Filtros de Produto**: Organize por Todos / Para Orçar / Orçados / Comprados
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
2. Ou suba no **GitHub Pages**
3. Adicione à tela inicial no celular para usar como app nativo

## Deploy no GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos desta pasta
3. Vá em **Settings > Pages**
4. Selecione a branch `main` e pasta `/ (root)`
5. Seu app estará online em `https://seuusuario.github.io/nome-do-repo/`

## Estrutura de arquivos

```
orcafacil/
├── index.html       # App completo (SPA) v2.1.5
├── manifest.json    # Config PWA
├── sw.js            # Service Worker (offline)
├── icons/           # Ícones do app
└── README.md        # Este arquivo
```

## Licença

Uso livre. Feito para você economizar tempo e dinheiro.
