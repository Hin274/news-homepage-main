
import Footer from './components/Footer'
import ListArticles from './components/ListArticles'
import MainArticle from './components/MainArticle'
import NewArticle from './components/NewArticles'
import Header from './components/Header'

const App=()=> {

  return (
    <>
    
      <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-1'>
      <Header />
      <MainArticle />
      <NewArticle />
      <ListArticles />
      <Footer />
      </div>

    </>
  )
}

export default App
