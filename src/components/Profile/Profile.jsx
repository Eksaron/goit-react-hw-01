import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <>
      <div name="Profile">
        <h2 className={css.title}>Profile</h2>
      </div>
      <div className={css.profile}>
        <div>
          <img src={image} className={css.profile_img} alt={name} />
          <p className={css.profile_name}>{name}</p>
          <p className={css.profile_tag}>@{tag}</p>
          <p className={css.profile_loc}>{location}</p>
        </div>

        <ul className={css.profile_stats}>
          <li>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span>{stats.views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
