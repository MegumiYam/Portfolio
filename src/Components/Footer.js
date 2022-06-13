import "../CSS/Footer.css"

const Footer= () => {    

    return (
        <div className="Footer pt-3 text-center" bg="dark" variant="dark">
            &copy; {new Date().getFullYear()}  Megumi Yamazaki
        </div>
    )
}
export default Footer;