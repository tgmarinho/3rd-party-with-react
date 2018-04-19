import React, { Component } from 'react';

/**
 * só fazer esse tipo de manipulação de DOM apenas se tiver biblioteca de terceiros 
 * que você não tem como manipular com React via props ou state.
 * 
 * Não recomendado para todas as situações
 * 
 */

class Plugin extends Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // console.log('clicou no btn', this.myInput)
        this.myInput.focus();
    }

    render() {
        return (
            <div>
                <input type='text' ref={(node) => (this.myInput = node) } />
                <button onClick={this.handleClick} >Focus</button>
            </div>
        )

    }

}

export default Plugin;