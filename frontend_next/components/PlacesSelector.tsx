export default function PlacesSelector() {
  return (
    <div className="collapse rounded-md">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        Abrir lista de Lugares
      </div>
      <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        <p>hello</p>
      </div>
    </div>
  );
}
