import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

export default function Gnb() {
    let activeItem = "Home";
    const router = useRouter();

    switch (router.pathname) {
        case "/":
            activeItem = "Home";
            break;
        case "/about":
            activeItem = "About";
            break;
    }

    function goLink(e, data) {
        switch (data.name) {
            case "Home":
                router.push("/");
                break;
            case "About":
                router.push("/about");
                break;
        }
    };

    return (
        <Menu inverted>
            <Menu.Item
                name="Home"
                active={activeItem === 'Home'}
                onClick={goLink}
            />

            <Menu.Item
                name="About"
                active={activeItem === 'About'}
                onClick={goLink}
            />
        </Menu>
    )
}