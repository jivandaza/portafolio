import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";

const App = () => {

    return (
        <BrowserRouter>
            <div className='relative z-10 bg-primary'>
                <div className='bg-hero-pattern bg-cover bg-no-reapeat bg-center'>
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                <div className='relative z-10'>
                    <Contact />
                    <StarsCanvas />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
