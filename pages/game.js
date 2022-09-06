import Link from "next/link";

export default function Game() {
  return (
    <div>
      <h1>게임</h1>
      <Link href="/game/baseball">숫자야구</Link>
    </div>
  );
}
