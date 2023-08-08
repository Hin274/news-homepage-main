function Header() {
    return (
        <>
            <header>
                <img src="../assets/images/logo.svg" />
                <nav>
                    <button aria-label="menu"><img src="../assets/images/icon-menu.svg" /></button>
                    <ul>
                        <li>Home</li>
                        <li>New</li>
                        <li>Popular</li>
                        <li>Trending</li>
                        <li>Categories</li>
                    </ul>
                </nav>
            </header>
        </>
    )

}

export default Header