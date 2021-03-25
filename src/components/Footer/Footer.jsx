import React from 'react'

function Footer(props) {
    return (
        <div className="footerComponent">
            <div className="section">
                <h5>Questions? Call 900 905 166</h5>
                <a href="https://help.netflix.com/es-es/node/412">
                    <p>FAQ</p>
                </a>
                <a href="https://www.netflix.com/es-en/login">
                    <p>Cookie Preferences</p>
                </a>
            </div>
            <div className="section section2">
            <a href="https://www.youtube.com/watch?v=OgIRAjnnJzI">
                    <p>Help Center</p>
                </a>
                <a href="https://en.wikipedia.org/wiki/Dummy_corporation">
                    <p>Corporate Information</p>
                </a>
            </div>
            <div className="section section2">
                <a href="https://www.termsofusegenerator.net/live.php?token=APTHrmfucR8zJDfFQ6X6fYssMBthVLtf">
                    <p>Terms of Use</p>
                </a>
                <a href="https://images.app.goo.gl/e7kHcjHsUHw1Hkfu8">
                    <p>Privacy</p>
                </a>
            </div>
        </div>
    )
}

export default Footer
