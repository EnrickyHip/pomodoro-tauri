interface Props {
  icon: string;
}

export function MaterialIcon({ icon }: Props) {
  return <span className="material-symbols-outlined">{icon}</span>;
}
