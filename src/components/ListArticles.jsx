function ListArticles() {
    return (
        <> 
            <section className="grid my-5 gap-10">
                <article className="flex gap-4">
                    <img src="../../assets/images/image-retro-pcs.jpg" alt="retro pc" className="w-1/3"/>
                    <div className="flex flex-col justify-between">
                        <h2>01</h2>
                        <h3>Reviving Retro PCs</h3>
                        <p>What happens when old PCs are given modern upgrades?</p>
                    </div>
                </article>
                <article className="flex gap-4">
                    <img src="../../assets/images/image-top-laptops.jpg" alt="top laptops"  className="w-1/3"/>
                    <div className="flex flex-col justify-between">
                        <h2>02</h2>
                        <h3>Top 10 Laptops of 2022</h3>
                        <p>Our best picks for various needs and budgets.</p>
                    </div>
                </article>
                <article className="flex gap-4">
                    <img src="../../assets/images/image-gaming-growth.jpg" alt="game controller" className="w-1/3" />
                    <div className="flex flex-col justify-between">
                        <h2>03</h2>
                        <h3>The Growth of Gaming</h3>
                        <p>How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </article>
            </section>
        </>
    )
}

export default ListArticles