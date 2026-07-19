export default function Horarios({ horarios }) {
  return (
    <>
      {Object.entries(horarios).map(([dia, clases]) => (
        <div key={dia} className="gym-day">
          <strong>{dia}</strong>

          <ul>
            {clases.map((clase, index) => (
              <li key={index}>{clase}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}