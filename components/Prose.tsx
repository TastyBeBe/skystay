/** Some authored bodies carry real paragraph breaks. Render them as paragraphs
 *  rather than collapsing a three-paragraph argument into one wall. */
export function Prose({
  text,
  className = "prose-serif",
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const paras = text.split(/\n{2,}/).map((t) => t.trim()).filter(Boolean);
  if (paras.length === 1) {
    return (
      <p className={className} style={style}>
        {paras[0]}
      </p>
    );
  }
  return (
    <div className={`${className} prose-stack`} style={style}>
      {paras.map((t, i) => (
        <p key={i}>{t}</p>
      ))}
    </div>
  );
}
