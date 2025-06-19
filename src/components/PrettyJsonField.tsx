import { useRecordContext } from "react-admin";

export const PrettyJsonField = ({
  source,
  label,
}: {
  source: string;
  label?: string;
}) => {
  const record = useRecordContext();
  if (!record) return null;

  const value = record[source];

  // Якщо null/undefined
  if (!value) return <span style={{ color: "#888" }}>—</span>;

  // Якщо не обʼєкт, відображаємо як є
  if (typeof value !== "object") return <span>{String(value)}</span>;

  // Виводимо кожен ключ:значення у новому рядку
  return (
    <div>
      {Object.entries(value).map(([key, val]) => (
        <div key={key}>
          <span style={{ color: "#444", fontWeight: 500 }}>{key}</span>:{" "}
          <span>{String(val)}</span>
        </div>
      ))}
    </div>
  );
};
