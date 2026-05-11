/**
 * Inject un schema JSON-LD dans le HTML rendu côté serveur.
 * Pour rich snippets Google.
 */
interface JsonLdProps {
  data: object | object[];
  id?: string;
}

export default function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      id={id}
      // safe : on contrôle entièrement le contenu (pas d'input utilisateur)
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
