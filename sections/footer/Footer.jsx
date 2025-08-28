import React from 'react'

const Footer = () => {
  return (
    <footer className='py-8 px-4 bg-[var(--color-background-second)] text-center text-light'>
        <div className="max-w-screen-xl mx-auto">
            <p className="mb-4">
                Ready to master a new Language?
                <button className="btn-primary py-2 px-4 rounded-lg ml-2">
                    Get started
                </button>
            </p>
            <div className="flex justify-center space-x-6 mb-4">
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Contact</a>
            </div>
            <p>
                &copy; {new Date().getFullYear()} N2N Language learning. All rights reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer