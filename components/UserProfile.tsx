import { ProfileContainer } from "../styles/UserProfile";

interface UserProfileProps {
  name: string;
  location: string;
  login: string;
  avatar_url: string;
}

export function UserProfile({
  location,
  login,
  name,
  avatar_url,
}: UserProfileProps) {
  return (
    <ProfileContainer>
      <img src={avatar_url} />
      <div>
        <h2>{name}</h2>
        <span>{login}</span>
      </div>

      <div className="location">{location ? <span>{location}</span> : ""}</div>
    </ProfileContainer>
  );
}
