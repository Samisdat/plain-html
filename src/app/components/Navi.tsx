import Link from 'next/link'
export const Navi = () => {
  return (
    <ul>
      <li>
          <Link href="/">Startseite</Link>
          <Link href="/simon-card">Simon Card</Link>
          <Link href="/grid-layout">GridLayout</Link>

      </li>
    </ul>
  );
};
