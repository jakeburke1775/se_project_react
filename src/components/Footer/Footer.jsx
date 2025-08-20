import "./Footer.css";

function Footer({ name, year }) {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__component">{name}</p>
        <p className="footer__component">{year}</p>
      </div>
    </footer>
  );
}

export default Footer;
