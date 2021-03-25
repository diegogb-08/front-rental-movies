import React from 'react'

function Footer(props) {
    return (
        <div className="footerComponent">
            <div className="section">
                <h5>Questions? Call 900 905 166</h5>
                <a href="">
                    <p>FAQ</p>
                </a>
                <a href="">
                    <p>Cookie Preferences</p>
                </a>
            </div>
            <div className="section section2">
            <a href="">
                    <p>Help Center</p>
                </a>
                <a href="">
                    <p>Corporate Information</p>
                </a>
            </div>
            <div className="section section2">
                <a href="">
                    <p>Terms of Use</p>
                </a>
                <a href="">
                    <p>Privacy</p>
                </a>
            </div>
        </div>
    )
}

export default Footer
