import rasm from "../../public/imgs/rasm.jpg";

export function About() {
  return (
    <>
      <h1>About</h1>
      <p>Do'kon sayti.</p>
      <address>
        <pre>
          <cite>Muallif: O'zimizda ham ma'lumot kam.</cite>
          <cite>Muallif:Mamatqulov Azimjon.</cite>
          <cite>Imzo:yo'q.</cite>
          <cite>Sana:📅 2025-yil 2-mart</cite>
          <cite>🕒 Vaqt: 16:19 (Toshkent vaqti bo‘yicha)</cite>
        </pre>
      </address>
      <img src={rasm} alt="rasm" width={700} />
    </>
  );
}
