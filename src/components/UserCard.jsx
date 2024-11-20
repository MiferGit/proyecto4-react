import { ImGift } from "react-icons/im";
import { FaPencilAlt } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import "./UserCard.css";

function UserCard({ user, openEdit, deleteUser }) {
  return (
    <div className="card">
      <h3 className="card__name">
        {user?.first_name} {user?.last_name}
      </h3>
      <div className="card__info">
        <div>
          <span className="card__label">Correo</span>
          {user?.email}
        </div>
        <div>
          <span className="card__label">Cumpleaños</span>
          <span className="card__data">
            <ImGift className="card__gift" /> {user?.birthday}
          </span>
        </div>
      </div>

      <div className="card__btns">
        <button
          className="card__btns--delete"
          onClick={() => deleteUser(user?.id)}
        >
          <IoTrashOutline />
        </button>
        <button className="card__btns--edit" onClick={() => openEdit(user)}>
          <FaPencilAlt />
        </button>
      </div>
    </div>
  );
}

export default UserCard;
