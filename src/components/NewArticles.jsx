const NewArticle=()=> {
    return (
        <>
            <aside className="lg:col-span-4 lg:col-start-9 ml-1">
                <h2 className="lg:text-4xl">New</h2>
                <article>
                    <a href="#"><h3>Hydrogen VS Electric Cars</h3></a>
                    <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </article>
                <hr/>
                <article>
                    <a href="#"><h3>The Downsides of AI Artistry</h3></a>
                    <p>What are the possible adverse effects of on-demand AI image generation?</p>
                </article>
                <hr/>
                <article>
                    <a href="#"><h3>Is VC Funding Drying Up?</h3></a>
                    <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </article>
            </aside>
        </>
    )
}

export default NewArticle