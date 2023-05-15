import MenuItem from './MenuItem'
import '../src/styles/Footer.css'

const Footer = () => {
    return (
        <div className="Footer">
            <div className='RSA'><MenuItem title={"South Africa"} /></div>
            <div className="All">
                <div className="LeftFooter">
                    <MenuItem title={"About"} />
                    <MenuItem title={"Advertising"} />
                    <MenuItem title={"Business"} />
                    <MenuItem title={"How Search Works"} />
                </div>
                <div className="MidFooter">
                    <MenuItem title={"Carbon neutral since 2007"} />
                </div>
                <div className="RightFooter">
                    <MenuItem title={"Privacy"} />
                    <MenuItem title={"Terms"} />
                    <MenuItem title={"Settings"} />
                </div>
            </div>

        </div>
    )
}

export default Footer;