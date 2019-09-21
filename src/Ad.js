import React, { Component } from 'react'

import flume from './flumeAND2019.jpg'
import purdueEx from './Purdue AND Exponent ad.jpg'
import integral from './integral AND formula ad.jpg'
import python from './python AND code ad.png'
import reddit from './Reddit AND value ad.png'


class Ad extends Component {
    combos = [
        'Python + Code',
        'Flume + 2019',
        'Purdue + Exponent',
        'Integral + Formula',
        'Reddit + Value'
    ]

    ads = [
        python,
        flume,
        purdueEx,
        integral,
        reddit

    ]

    state = {
        combo: this.combos[0],
        ad: this.ads[0]
    }

    handleClick = () => {
        const index = Math.floor(Math.random(0, 5) * 5)
        console.log(index)
        this.setState({ combo: this.combos[index] })
        this.setState({ ad: this.ads[index] })
    }
    render() {
        return (
            <div className="Ad" style={styles.window}>
                <div style={{ height: '10vh'}}></div>
                <span style={styles.intro}>Here's an image we found based on your Google history.</span>
                <br/>
                <br/>
                <span>{this.state.combo}</span>
                <br/>
                <br/>
                <img src={this.state.ad} alt={'none'} style={styles.pic}/>
                <br/>
                <br />
                <span style={{ fontSize: '1rem' }}>Ask the program to re-analyze your data for a new image!</span>
                <br/>
                <button type="button" onClick={this.handleClick} style={styles.button}>Analyze and Predict</button>
            </div>
        )
    }
}

const styles = {
    window: {
        height: '100vh',
        fontSize: '1.5em'
    },

    intro: {
        color:'#3b8eff'
    },

    pic: {
        width: '12.5em',
        height: '12.5em'
    },

    button: {
        marginTop: '10vh',
        borderRadius: '20px',
        backgroundColor: 'transparent',
        color: '#3b8eff',
        padding: '15px, 0px',
        border: '2px solid #3b8eff',
        fontSize: '1rem',
        marginBottom: '10px'
    }
}

export default Ad