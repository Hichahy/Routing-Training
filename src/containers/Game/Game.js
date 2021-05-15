import React, { Component } from 'react';

class Game extends Component {
    state = {
        gameTitle: ""
    }

    componentDidMount () {
       this.parseQueryParams()
    }
    
    componentDidUpdate() {
        this.parseQueryParams()
    }

    parseQueryParams () {
        console.log(this.props);
        const query = new URLSearchParams(this.props.location.search)
        for (let param of query.entries()) {
            if (this.state.gameTitle !== param[1]) {
            console.log(param);
            this.setState({gameTitle: param[1]})
            }
        }
    }

    render () {
        return (
            <div>
                <h1>{this.state.gameTitle}</h1>
                <p>You selected the Game with ID: {this.props.match.params.gameId}</p>
            </div>
        );
    }
}

export default Game;