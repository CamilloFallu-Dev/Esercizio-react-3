function Message({ age }) {
  return <p>{age > 18 ? "Benvenuto!" : "Sei molto giovane!"}</p>;
}

export default Message;
