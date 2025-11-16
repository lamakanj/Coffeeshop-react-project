const Footer = () => {
    return ( 
        <div className="footer">
           <p>&copy; {new Date().getFullYear()} Moonlight Café. All rights reserved.</p>
           <p><a href="https://instagram.com/moonlightcafe">Instagram</a> | <a href="https://facebook.com/moonlightcafe">Facebook</a> | <a href="https://twitter.com/moonlightcafe">Twitter</a></p>
        </div>
    );
}
 
export default Footer;