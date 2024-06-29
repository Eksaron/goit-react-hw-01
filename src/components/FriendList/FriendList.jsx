import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <>
      <div name="FriendList">
        <h2>FriendList</h2>
      </div>
      <ul className={css.friendlist}>
        {friends.map((friend) => {
          return (
            <li key={friend.id}>
              <FriendListItem friend={friend} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FriendList;
