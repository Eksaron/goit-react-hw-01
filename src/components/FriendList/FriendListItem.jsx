import css from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  const { id, name, avatar, isOnline } = friend;
  return (
    <>
      <div id={id} className={css.friendlistitem}>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={css.friendlistitem_name}>{name}</p>
        <p
          className={
            isOnline ? css.friendlistitem_online : css.friendlistitem_offline
          }
        >
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </>
  );
};

export default FriendListItem;
