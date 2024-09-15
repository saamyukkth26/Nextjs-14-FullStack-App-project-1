import "@/components/footer/Footer.css";


var thedate = new Date();


const Footer = () => {
    return (
        <div className="footer">Copyrights©{`${thedate.getFullYear()}`}</div>
    )
};
export default Footer;