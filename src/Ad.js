import React, { Component } from 'react'

import ad from './walmart.jpg'

class Ad extends Component {
    render() {
        return (
            <div className="Ad" style={styles.window}>
                <div style={{ height: '10vh'}}></div>
                <span style={styles.intro}>Here's an image we found based on your Google history.</span>
                <br/>
                <br/>
                <span>Video Games + Wal-Mart =</span>
                <br/>
                <br/>
                <img src={ad} alt={'none'} style={styles.pic}/>
                <br/>
                <br />
                <span style={{ fontSize: '1rem' }}>Ask the program to re-analyze your data for a new image!</span>
                <br/>
                <button type="button" style={styles.button}>Analyze and Predict</button>
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