import React from "react";
import ReactMarkdown from "react-markdown";

/**
 * Componente para renderizar contenido Markdown
 * @param {Object} props - Propiedades del componente
 * @param {string} props.content - Contenido Markdown a renderizar
 * @returns {React.ReactElement} Componente React que renderiza Markdown
 */
export default function MarkdownContent({ content }) {
  // Si no hay contenido, no renderizamos nada
  if (!content) return null;

  // Renderizamos el contenido Markdown
  return <ReactMarkdown>{content}</ReactMarkdown>;
}
