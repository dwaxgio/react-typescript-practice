const GEnums = () => {
  enum Direction {
    Up,
    Down,
    Left,
    Right,
  }
  let move: Direction = Direction.Down;
  return (
    <div>
      <h2>Enums</h2>
      {move}
    </div>
  );
};

export default GEnums;
