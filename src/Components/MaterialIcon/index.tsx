interface Props {
  icon: string;
  style?: React.CSSProperties;
}

export function MaterialIcon({ icon, style }: Props) {
  return (
    <span style={style} className="material-symbols-outlined">
      {icon}
    </span>
  );
}
