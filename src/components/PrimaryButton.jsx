function PrimaryButton({ children, href, variant = "primary" }) {

  const base = `
    px-16 py-3
    border-2
    uppercase font-semibold tracking-widest
    transition-all duration-200 text-base

    shadow-[2px_2px,4px_4px,6px_6px_0px_0px]
    hover:translate-x-[3px] hover:translate-y-[3px]
    active:translate-x-[5px] active:translate-y-[5px]
  `;

  const variants = {
    primary: `
      border-[#1691DB] bg-white text-[#1691DB]
      shadow-[2px_2px_#1691DB,4px_4px_#1691DB,6px_6px_0px_0px_#1691DB]
      hover:shadow-[2px_2px_#1691DB,4px_4px_#1691DB]
      active:shadow-[2px_2px_#1691DB]
    `,
    dark: `
      border-black bg-white text-black
      shadow-[2px_2px_black,4px_4px_black,6px_6px_0px_0px_black]
      hover:shadow-[2px_2px_black,4px_4px_black]
      active:shadow-[2px_2px_black]
    `
  };

  const className = base + variants[variant];

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button className={className}>{children}</button>
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}

export default PrimaryButton;
