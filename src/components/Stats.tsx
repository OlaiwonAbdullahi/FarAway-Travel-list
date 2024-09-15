export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding Some items to your Packing List🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You Got Everything! Ready to go🚀"
          : `
          💼you have ${numItems} item on your List,and you already packed 
          ${numPacked} (${percent}%)`}
      </em>
    </footer>
  );
}
