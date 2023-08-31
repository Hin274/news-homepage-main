import NavBar from "./NavBar/NavBar"



const Header =()=> {
    return (
        <div>
            <header className="grid grid-cols-2 py-4 items-center xl:grid-cols-12">
                <img src="../assets/images/logo.svg" className="w-1/3" />
                 <NavBar/>  
                   
                
            </header>
        </div>
    )

}

export default Header