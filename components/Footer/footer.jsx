export function Footer({ footerLinks }) {
  return (
    <footer className="py-[30px] shrink-0">
      <div className="container">
        <ul className="flex gap-[14px]">
          <li className="text-xl">© 2024</li>
          <li className="text-xl">
            <a href="#">Twitter</a>
          </li>
          {footerLinks.map((link) => (
            <li key={link.id} className="text-xl">
              <a href={link.link}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
