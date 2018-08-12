import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/gowthamrm_" className="icon fa-twitter"><span className="label" target="_blank">Twitter</span></a></li>
                        <li><a href="https://github.com/gowthamrm/" className="icon fa-github" target="_blank"><span className="label">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/gowtham-raj-044b25a0/" className="icon fa-linkedin-square"><span className="label" target="_blank">Linkedin</span></a></li>
                        <li><a href="mailto:hello@gowthamrm.com" className="icon fa-envelope-o" target="_blank"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Gatsby Starter Strata</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer