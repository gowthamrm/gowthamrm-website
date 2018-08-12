import React, { Component } from 'react';

class CodeWorks extends Component {
    render () {
        const { codeworks } = this.props;

        if (!codeworks) return;

        const codeWorks = codeworks.map((obj, i) => {
            return (
                <article className="6u 12u$(xsmall) work-item" key={i}>
                    <a
                        className="image fit thumb"
                        href={obj.src}
                        target="_blank"
                    >
                        <img src={obj.thumbnail} />
                    </a>

                    <h3>{obj.caption}</h3>
                    <p>{obj.description}</p>
                </article>
            );
        });

        return (
            <div className="row">
                {codeWorks}
            </div>
        );
    }
}

export default CodeWorks;