const Navbar = () => (
  <nav className="w-full bg-primary">
    <img
      src="/bg-header-mobile.svg"
      className="w-full max-h-36 sm:hidden block"
    />
    <img src="/bg-header-desktop.svg" className="w-full sm:block hidden" />
  </nav>
);

export default Navbar;
