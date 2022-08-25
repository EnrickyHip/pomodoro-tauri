interface Props {
  children: JSX.Element | JSX.Element[];
  id?: string;
}

export function Form({ children, id }: Props) {
  return <form id={id}>{children}</form>;
}
