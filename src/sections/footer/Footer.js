import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
        <footer>{`Copyright © ${year}`}</footer>
    </div>
  )
}

export default Footer