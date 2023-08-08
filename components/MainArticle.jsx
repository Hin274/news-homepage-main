function MainArticle() {
    return (
        <>
            <section>
                <picture>
                    <source
                        media="(min-width: 1440px)"
                        srcSet="../assets/images/image-web-3-desktop.jpg"
                    />
                    <source
                        media="(min-width: 375px)"
                        srcSet="../assets/images/image-web-3-mobile.jpg"
                    />
                    <img src="../assets/images/image-web-3-mobile.jpg" alt="puzzle blocks" />
                </picture>
                <h1>The Bright Future of Web 3.0?</h1>

                <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?</p>

                <button>Read more</button>
            </section>
        </>
    )
}

export default MainArticle