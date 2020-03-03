import Header from '../src/components/header'
import Option from '../src/components/option'
import Banner from '../src/components/banner'

function Index() {
  return (
    <div>
      <Header />
      <Banner />
      <Option />
      
      <style jsx global>{`
        body {
            margin: 0;
        }

        .container {
          max-width: 1024px;
          margin: 0 auto;
        }

        a {
          text-decoration: none;
          color: #000;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
      `}</style>
    </div>
  )
}

export default Index;