const EEvent = () => {
  function handleClick() {
    alert("Button clicked");
  }
  return (
    <div>
      <h2>Event</h2>
      <button onClick={handleClick}>Event button</button>
    </div>
  );
};
export default EEvent;
