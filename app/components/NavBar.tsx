import React from 'react'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div>
            <nav className="fixed flex top-0 justify-between p-5 w-full z-50">
                <div>
                    <div>
                        <Image src="/PixelFactoryLogo.svg" alt="" width={100} height={100} />
                    </div>
                </div>
            </nav>
        </div>
    )
}
