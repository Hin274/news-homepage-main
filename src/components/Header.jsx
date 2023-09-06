import NavBar from "./NavBar/NavBar"



const Header =()=> {
    return (
        <>
            <header className="grid py-3 items-center lg:col-span-12 lg:py-0">
                <img src="./images/logo.svg" className="w-14" />
                 <NavBar/>  
                   
                
            </header>
        </>
    )

}

export default Header