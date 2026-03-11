export default function Badge({ text }: { text: string }) {
  return (
    <span className="px-2 py-1 bg-black text-white text-[9px] font-bold uppercase tracking-tighter">
      {text}
    </span>
  );
}