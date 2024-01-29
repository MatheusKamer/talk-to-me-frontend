interface IButton {
  title?: string;
  type: 'button' | 'submit' | 'reset'
}

export default function Button({ title, type }: IButton) {
  return (
    <button className="bg-ciano-100 w-full rounded-md px-3 py-2 text-black font-medium" type={type}>
      <span>{title}</span>
    </button>
  )
}
