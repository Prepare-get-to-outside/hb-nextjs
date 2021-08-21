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
        case "/admin":
            activeItem = "Admin";
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
            case "Admin":
                router.push("/admin");
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


            <Menu.Item
                name="Admin"
                active={activeItem === 'Admin'}
                onClick={goLink}
            />
        </Menu>
    )
}