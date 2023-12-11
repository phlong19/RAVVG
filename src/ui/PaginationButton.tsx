interface Props {
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "active" | "pagination" | "icon";
}

function PaginationButton({
  onClick,
  children,
  disabled,
  type = "pagination",
}: Props) {
  const base =
    "flex items-center justify-between gap-1 rounded-md border border-white/40 bg-[#202020] px-3 py-1 shadow-sm shadow-white/70 hover:bg-white/70 hover:text-black";
  const styles = {
    pagination: base, // default
    active: base + " font-bold bg-white text-black cursor-not-allowed",
    icon: base + " font-bold",
  };
  return (
    <button disabled={disabled} onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default PaginationButton;
