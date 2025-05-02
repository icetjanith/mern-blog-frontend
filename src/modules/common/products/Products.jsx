import React from 'react';
import Navbar from "../navbar/Navbar.jsx";
import { Search, Filter, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';

function Products() {
    return (
        <div>
            <Navbar/>
            <div className="bg-indigo-700 text-white py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Explore Our Blog Posts</h1>
                    <p className="text-lg opacity-90 max-w-2xl">Discover the latest insights, tutorials, and stories from our team of experts and contributors.</p>
                </div>
            </div>

        </div>
    );
}

export default Products;