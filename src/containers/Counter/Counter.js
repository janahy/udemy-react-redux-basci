import React from 'react';
import { connect } from 'react-redux';
import './Counter.css'

class Counter extends React.Component {

    state= {
        counter: 0
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    };

    render () {
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
                    }}> {this.props.ctr} </h1>
                <section style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '10px'
                }}>
                    <article
                        onClick={this.props.increment}
                        className="counter-article">
                        Incrémenter
                    </article>
                    <article
                        onClick={this.props.decrement}
                        className="counter-article">
                        Décrémenter
                    </article>
                    <article
                        onClick={this.props.add_10}
                        className="counter-article">
                        + 10
                    </article>
                    <article
                        onClick={this.props.reset}
                        className="counter-article">
                        Réinitialiser
                    </article>
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

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type: 'INC'}),
        decrement: () => dispatch({type: 'DEC'}),
        add_10: () => dispatch({type: 'ADD_TEN'}),
        reset: () => dispatch({type: 'RESET'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);