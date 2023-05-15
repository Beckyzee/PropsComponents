import MenuItem from './src/MenuItem'
import AppsLauncherIcon from './src/AppsLauncherIcon'
import Avatar from './src/Avatar'
import "../src/styles/Header.css"

const Header = () => {
    return (
        <div className="app-header">
            <div className="app-header-menu">
                <MenuItem title={"Gmail"} />
                <MenuItem title={"Images"} />
                <AppsLauncherIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header;