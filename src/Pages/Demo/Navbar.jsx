

const Navbar = () => {
      return (
            <header className="bg-indigo-600">
            <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
              <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
                <div className="flex items-center">
                  <a href="#">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-10 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=white"
                      alt=""
                    />
                  </a>
                  <div className="ml-10 hidden space-x-8 lg:block">
                    <a
                      href="#"
                      className="text-base font-medium text-white hover:text-indigo-50"
                    >
                      Solutions
                    </a>
                    <a
                      href="#"
                      className="text-base font-medium text-white hover:text-indigo-50"
                    >
                      Pricing
                    </a>
                    <a
                      href="#"
                      className="text-base font-medium text-white hover:text-indigo-50"
                    >
                      Docs
                    </a>
                    <a
                      href="#"
                      className="text-base font-medium text-white hover:text-indigo-50"
                    >
                      Company
                    </a>
                  </div>
                </div>
                <div className="ml-10 space-x-4">
                  <a
                    href="#"
                    className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                  >
                    Sign in
                  </a>
                  <a
                    href="#"
                    className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                  >
                    <span className="md:hidden">Sign up</span>
                    <span className="hidden md:inline lg:hidden">Create account</span>
                    <span className="hidden lg:inline">Create an account</span>
                  </a>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-x-6 lg:hidden">
                <a
                  href="#"
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  Solutions
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  Docs
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  Zettelkasten
                </a>
              </div>
            </nav>
          </header>
      );
};

export default Navbar;