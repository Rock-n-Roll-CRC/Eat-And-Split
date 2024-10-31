import Friend from "./Friend";

export default function FriendsList({
  friends,
  selectedFriend,
  onSelectFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          selectedFriend={selectedFriend}
          onSelectFriend={onSelectFriend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
