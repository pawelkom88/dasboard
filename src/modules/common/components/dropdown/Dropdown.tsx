import { useState } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <div className="relative">
        <div
          className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
          role="menu">
          <div className="p-2">
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
              role="menuitem">
              View on Storefront
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
              role="menuitem">
              View Warehouse Info
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
              role="menuitem">
              Duplicate Product
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
              role="menuitem">
              Unpublish Product
            </a>
          </div>
        </div>
      </div> */}

      <button
        type="button"
        title="Open details"
        className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
        </svg>
      </button>
    </>
  );
}
