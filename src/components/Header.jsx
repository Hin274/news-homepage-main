import NavBar from "./NavBar/NavBar"



const Header =()=> {
    return (
        <div>
            <header className="grid grid-cols-2 py-3 items-center lg:grid-cols-12">
                <img src="../assets/images/logo.svg" className="w-14" />
                 <NavBar/>  
                   
                
            </header>
        </div>
    )

}

export default Header