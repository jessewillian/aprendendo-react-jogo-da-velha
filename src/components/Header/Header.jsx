import Logo from "../../objects/Sobre/Logo/Logo";
import Sobre from "../../objects/Sobre/Sobre";
import Menu from "../../objects/Menu/Menu";

export default function Header() {
    return (
        <header className="header">
            <Logo/>
            <Sobre/>
            <Menu />
        </header>
    );
}