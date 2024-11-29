export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>{`Roma is waiting for you! Start packing 💼`}</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numLeftToPack = Math.abs(numPacked - numItems);

  return (
    <footer className="stats">
      <em>
        {numLeftToPack === 0
          ? `Roma is ready for you! ✈`
          : `You have ${numLeftToPack} item${
              numLeftToPack === 1 ? "" : "s"
            } left to pack. You're almost there!`}
      </em>
    </footer>
  );
}
