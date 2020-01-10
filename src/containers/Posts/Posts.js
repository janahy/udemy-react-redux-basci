import React from 'react';
import { connect } from 'react-redux';

class Posts extends React.Component {

    render () {
        let _articles = [];
        for (let i = 0; i < this.props.ctr; i++) {
            _articles.push(
                <article
                        className="counter-article">
                        {`Post number ${i + 1}`}
                </article>
            )
        }
        return (
            <div style={{
                        width: '50%',
                        height: '50%',
                        margin: '0 auto',
                        textAlign: 'center'
                    }}>
                <h1
                    style={{
                        fontSize: '90px'
                    }}> {this.props.ctr} Post(s)</h1>
                <section style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '10px'
                    }}>
                    {_articles}
                </section>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

export default connect(mapStateToProps)(Posts);