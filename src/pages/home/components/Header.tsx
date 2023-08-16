import "../styles/Header.css";
import ConfigIcon from "./configIcon.tsx";

function Header() {
    return (
        <>
            <header className="header">
                <div>
                    <span className="span">your</span>
                    <span className="span span--colored">/home</span>
                </div>
                <ConfigIcon width={50} height={50} />
            </header>
        </>
    );
}

export default Header;
