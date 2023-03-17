import React from 'react';
import Link from 'next/link';
const Navigation = () => {
    return (
        <header>
            <div>
                <Link href="/" passHref>
                    Shopify + Next.js
                </Link>
                <a>
                    Cart
                </a>
            </div>
        </header>
            
        
    );
};

export default Navigation;