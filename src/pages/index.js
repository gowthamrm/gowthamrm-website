import React from 'react'
import Helmet from 'react-helmet'

import CodeWorks from '../components/CodeWorks'

import emberScrollProgressThumbnail from '../assets/images/codeworks/ember-scroll-progress.png'
import emberScrollPreviewThumbnail from '../assets/images/codeworks/ember-scroll-preview.png'

import emberThumbnail from '../assets/images/codeworks/ember-min.png'
import emberimageMagnifierThumbnail from '../assets/images/codeworks/ember-image-magnifier.png'
import emberRouterScrollThumbnail from '../assets/images/codeworks/ember-router-scroll.png'
import socketYoutubePlayerThumbnail from '../assets/images/codeworks/socket-youtube-player.png'


const OWN_CODE_WORKS = [
    { id: '1', src: 'https://gowthamrm.github.io/ember-scroll-progress/', thumbnail: emberScrollProgressThumbnail, caption: 'Ember Scroll Progress', description: `An ember addon component for displaying an amount a page is scrolled via a progress bar.`},
    { id: '2', src: 'https://gowthamrm.github.io/ember-scroll-preview/', thumbnail: emberScrollPreviewThumbnail, caption: 'Ember Scroll Preview', description: 'A simple ember addon to preview the scroll progress of the page.'}
];

const CONTRIBUTED_CODE_WORKS = [
    { id: '1', src: 'https://github.com/emberjs/ember.js/pulls?q=is%3Apr+author%3Agowthamrm+is%3Aclosed', thumbnail: emberThumbnail, caption: 'EmberJS', description: `Contributed to the ember core during the Ember 3.0 related cleanup process.`},
    { id: '2', src: 'https://github.com/selvagsz/ember-image-magnifier', thumbnail: emberimageMagnifierThumbnail, caption: 'Ember Image Magnifier', description: 'An ember addon to magnify and preiview the selected part of the given image.'},
    { id: '3', src: 'https://github.com/bossbossk20/youtube-player-socket.io/pulls?q=is%3Apr+author%3Agowthamrm+is%3Aclosed', thumbnail: socketYoutubePlayerThumbnail, caption: 'Socket.io Youtube Player', description: 'Simple web app built using react and websocket to share music playlist with friends. Got chance to contribute to this project during Hactoberfest 2017.'},
    { id: '4', src: 'https://github.com/dollarshaveclub/ember-router-scroll/pulls?q=is%3Apr+author%3Agowthamrm+is%3Aclosed', thumbnail: emberRouterScrollThumbnail, caption: 'Ember Router Scroll', description: 'Scroll to top with preserved browser history scroll position. Got my hands in hosting the demo app in the github pages.'}
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="about-me">
                        <header className="major">
                            <h2>About Me</h2>
                        </header>
                        <p>
                            I am a full time front-end developer, interested in learning and exploring current web technologies. Have couple of years of expertise in building apps using EmberJS and NodeJS.
                            Apart from web application, I have special interests in building native mobile applications. This intereset attracted me to learn and expand my views on React and React Native.
                        </p>
                    </section>

                    <section id="code-works">
                        <header className="major">
                            <h2>Code Works</h2>
                        </header><br />
                        <h2>Own Projects</h2>
                        <CodeWorks codeworks={OWN_CODE_WORKS.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />
                        <br />
                        <h2>Contributed Projects</h2>
                        <CodeWorks codeworks={CONTRIBUTED_CODE_WORKS.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p></p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Nesapakkam, Chennai<br />
                                        Tamil Nadu - 600078<br />
                                        India
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        +91-8870072949
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:hello@gowthamrm.com">hello@gowthamrm.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`