## Objetivo
Substituir os emojis (📉 💼 ⏱️ 🛡️ ✅ 👥 💬 📞) usados no tema WordPress pelos mesmos ícones **Lucide** que a Landing Page React utiliza, embutindo-os como SVG inline no tema.

## Mapeamento (LP → Tema WP)
| Local no tema | Emoji atual | Ícone Lucide |
|---|---|---|
| Benefício 1 | 📉 | `trending-down` |
| Benefício 2 | 💼 | `briefcase` |
| Benefício 3 | ⏱️ | `clock` |
| Benefício 4 | 🛡️ | `shield` |
| Benefício 5 | ✅ | `check-circle` |
| Benefício 6 | 👥 | `users` |
| CTA Hero / CTA Final / Float | 💬 | `message-circle` (WhatsApp) |
| Header / CTA Final | 📞 | `phone` |
| Footer (contato) | 📞 / ✉️ | `phone` / `mail` |

## Implementação

### 1. Helper PHP de ícones (`functions.php`)
Adicionar uma função `mdclt_icon( $name, $args = [] )` que retorna o SVG inline do Lucide correspondente. Os SVGs ficam num array PHP interno (`paths` originais do Lucide v0.462, stroke-width 2, viewBox 24×24, `currentColor`). Aceita `class`, `size`, `aria-label`/`aria-hidden`.

```php
mdclt_icon( 'trending-down', [ 'class' => 'icon icon--lg', 'size' => 32 ] );
```

### 2. Estilos (`style.css`)
Adicionar utilitários:
```css
.icon { width: 1em; height: 1em; stroke-width: 2; vertical-align: -0.125em; }
.icon--lg { width: 2rem; height: 2rem; }
.benefit-card__icon { /* atualizar para acomodar SVG colorido com bg pill */ }
.btn .icon { width: 1.15em; height: 1.15em; }
.header-phone .icon, .hero__actions .btn .icon { color: currentColor; }
```
Manter o visual do `benefit-card__icon` (círculo/pill verde) trocando o emoji por SVG centralizado.

### 3. Substituições nos templates
- `front-page.php` — array `$benefits` passa a guardar o slug Lucide; loop chama `mdclt_icon()`. CTAs (`Simular Meu Crédito`, `Falar no WhatsApp`, telefone) passam a usar `mdclt_icon('message-circle')` / `mdclt_icon('phone')` no lugar dos emojis.
- `header.php` — telefone usa `mdclt_icon('phone')`.
- `footer.php` — itens de contato usam `mdclt_icon('phone')` e `mdclt_icon('mail')`.
- Remover `<span aria-hidden="true">📞</span>` etc.

### 4. Acessibilidade
SVGs decorativos recebem `aria-hidden="true"` + `focusable="false"`. Quando o ícone é o único conteúdo do link/botão, o link já tem `aria-label`.

### 5. Empacotamento
Regerar `/mnt/documents/md-consignado-clt-theme.zip` mantendo todos os assets/favicons já incluídos.

## Detalhes técnicos
- Sem dependência JS — SVGs são strings PHP, zero requests extras.
- Tamanho adicional do tema: ~3 KB (10 ícones).
- Cores herdadas via `currentColor` para que os ícones combinem com o contexto (verde no card de benefício, branco no header, etc).
- Licença Lucide ISC permite redistribuição.
