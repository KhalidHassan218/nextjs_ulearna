const CartIcon = ({ width }: { width?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={width ?? "w-9 h-9"}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.5l1.6 9.59a2.25 2.25 0 002.24 1.91h8.56a2.25 2.25 0 002.24-1.91l1.35-7.59H5.25"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 20.25a.75.75 0 100-1.5.75.75 0 000 1.5zM18 20.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
    />
  </svg>
);

export default CartIcon;
