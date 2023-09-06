const MainArticle=()=> {
    return (
        <>
            <section className="lg:col-span-8">
                <picture>
                    <source
                        media="(min-width: 769px)"
                        srcSet="/images/image-web-3-desktop.jpg"
                    />
                    <source
                        media="(min-width: 320px)"
                        srcSet="/images/image-web-3-mobile.jpg"
                    />
                    <img src="/images/image-web-3-mobile.jpg" alt="puzzle blocks" className="py-4 mainImg" />
                </picture>
                <div className="lg:flex lg:justify-between">
                <h1 className="lg:text-6xl">The Bright Future of Web 3.0?</h1>
                <div>
                <p className="lg:text-xl">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?</p>
                <button className="readMore">Read more</button>
                </div>
                </div>
            </section>
        </>
    )
}

export default MainArticle