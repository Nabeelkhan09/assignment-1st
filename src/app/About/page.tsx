import React from 'react'
import Link from 'next/link'

function AboutPage ()  {
    return (
        <div>
        <h1>WELCOME TO My PAGE</h1>
        <br />
        <br />
        <Link href="/">Home</Link>
        <br />
        <br />
        <Link href="/Services">Service</Link>
        <br />
        <br />
        <Link href="/Contact">Contact</Link>
        </div>

    )
}
export default AboutPage