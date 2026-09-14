import Logo from '../assets/logo.png'

const Navber = () => {
    return (
        <div className="container mx-auto mb-10 sticky top-0 z-50">
            <div className="navbar bg-base-100/90 backdrop-blur-md shadow-md px-4 lg:px-8">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                            <li>
                                <a href="/" className="font-bold italic text-[#5F3F29] hover:text-[#5F3F29] hover:bg-primary/10">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="/about" className="font-bold italic text-[#5F3F29] hover:text-[#5F3F29] hover:bg-[#5F3F29]/10">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="/continents" className="font-bold italic text-[#5F3F29] hover:text-[#5F3F29] hover:bg-primary/10">
                                    Continents
                                </a>
                            </li>

                            <li>
                                <a href="/countries" className="font-bold italic text-[#5F3F29] hover:text-[#5F3F29] hover:bg-primary/10">
                                    Countries
                                </a>
                            </li>
                        </ul>
                    </div>

                    <a href="/" className="btn btn-ghost text-xl font-bold">
                        <img src={Logo} alt="Logo" />
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <li>
                            <a href="/" className="font-bold italic text-[#5F3F29] hover:text-[#5F3F29] hover:bg-primary/10">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="/about" className="font-bold italic text-[#5F3F29] hover:text-[#5F3F29] hover:bg-primary/10">
                                About
                            </a>
                        </li>

                        <li>
                            <details>
                                <summary className="font-bold italic text-[#5F3F29] hover:text-[#5F3F29] hover:bg-primary/10">
                                    Continents
                                </summary>

                                <ul className="p-2 bg-base-100 w-44 z-10 shadow-sm">
                                    <li>
                                        <a href="/continents/asia" className="font-bold italic text-[#5F3F29] hover:text-[#5F3F29] hover:bg-primary/10">
                                            Asia
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/continents/europe" className="font-bold italic text-[#5F3F29] hover:text-[#5F3F29] hover:bg-primary/10">
                                            Europe
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/continents/africa" className="font-bold italic text-[#5F3F29] hover:text-[#5F3F29] hover:bg-primary/10">
                                            Africa
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/continents/north-america" className="font-bold italic text-[#5F3F29] hover:text-[#5F3F29] hover:bg-primary/10">
                                            North America
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/continents/south-america" className="font-bold italic text-[#5F3F29] hover:text-[#5F3F29] hover:bg-primary/10">
                                            South America
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/continents/oceania" className="font-bold italic text-[#5F3F29] hover:text-[#5F3F29] hover:bg-primary/10">
                                            Oceania
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>

                        <li>
                            <a href="/countries" className="font-bold italic text-[#5F3F29] hover:text-[#5F3F29] hover:bg-primary/10">
                                Countries
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <label className="input input-bordered flex items-center gap-2 w-40 sm:w-52 lg:w-64">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70 text-[#5F3F29]">
                            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l3.755 3.754a.75.75 0 1 1-1.06 1.06l-3.755-3.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                        </svg>

                        <input type="text" placeholder="Search country..." className="grow font-bold italic text-[#5F3F29] placeholder:text-[#5F3F29]/60" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navber;