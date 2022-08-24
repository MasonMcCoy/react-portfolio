import React, { useState } from 'react';

import Header from '../Header';
import Navigation from '../Navigation';
import Footer from '../Footer';

import About from '../../pages/About';
import Portfolio from '../../pages/Portfolio';
import Contact from '../../pages/Contact';
import Resume from '../../pages/Resume';

function PortfolioContainer() {
    const [currentPage, setPage] = useState('About Me');

    const renderPage = () => {
        if (currentPage === 'About Me') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact Me') {
            return <Contact />;
        }
        return <Resume />
    }

    const handlePageChange = (page) => setPage(page);

    return (
        <div>
            <Header />
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer />
        </div>
    )
}

export default PortfolioContainer;