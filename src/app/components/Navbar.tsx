"use client";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#8D6E63] to-[#E4572E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0">
              <h1 className="text-[#2C2C2C] font-montserrat font-bold text-xl"></h1>
              <h1 className="text-[#2C2C2C] font-montserrat font-bold text-xl"></h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
