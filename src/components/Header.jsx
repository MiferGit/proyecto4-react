import "./Header.css";
function Header({ openAdd }) {
  return (
    <div className="header">
      <div className="header__container">
        <h1 className="header__title">Usuarios</h1>

        <button type="button" onClick={openAdd} className="header__btn">
          Agregar usuario
        </button>
      </div>
    </div>
  );
}

export default Header;
