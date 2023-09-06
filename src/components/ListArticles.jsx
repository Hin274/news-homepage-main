const ListArticles=()=> {
    return (
        <> 
            <section className="grid my-5 gap-10 lg:grid-cols-3 lg:col-span-12">
                <article className="flex gap-4">
                    <img src="./images/image-retro-pcs.jpg" alt="retro pc" className="w-1/3"/>
                    <div className="flex flex-col justify-between">
                        <h2>01</h2>
                        <a href="#"><h3>Reviving Retro PCs</h3></a>
                        <p>What happens when old PCs are given modern upgrades?</p>
                    </div>
                </article>
                <article className="flex gap-4">
                    <img src="./images/image-top-laptops.jpg" alt="top laptops"  className="w-1/3"/>
                    <div className="flex flex-col justify-between">
                        <h2>02</h2>
                        <a href="#"><h3>Top 10 Laptops of 2022</h3></a>
                        <p>Our best picks for various needs and budgets.</p>
                    </div>
                </article>
                <article className="flex gap-4">
                    <img src="./images/image-gaming-growth.jpg" alt="game controller" className="w-1/3" />
                    <div className="flex flex-col justify-between">
                        <h2>03</h2>
                        <a href="#"><h3>The Growth of Gaming</h3></a>
                        <p>How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </article>
            </section>
        </>
    )
}

export default ListArticles