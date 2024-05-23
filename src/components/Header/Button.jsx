import React from 'react'

function Button({
    children,
    type= 'button',
    textColor= 'text-white',
    className = '',
    ...props
}) {
  return (
    <div className={`${className}`}>
        {/* <button
            type={type}
            {...props}
            className="rounded-full bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
            {children}
            </button> */}
    </div>
  )
}

export default Button