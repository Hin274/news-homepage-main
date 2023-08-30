function Header() {
    return (
        <>
            <header className="grid grid-cols-2 py-4 items-center xl:grid-cols-12">
                <img src="../assets/images/logo.svg" className="w-1/3" />
                <nav className="col-start-3 justify-self-end  xl:col-start-12">
                    <button aria-label="menu"><img src="../assets/images/icon-menu.svg" className="w-full" /></button>
                    {/* <ul>
                        <li>Home</li>
                        <li>New</li>
                        <li>Popular</li>
                        <li>Trending</li>
                        <li>Categories</li>
                    </ul> */}
                </nav>
            </header >
        </>
    )

}

export default Header