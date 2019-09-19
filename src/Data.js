import React, { Component } from 'react'

class Data extends Component {
    render() {
        return (
            <div className="Data" style={styles.window}>
                <div style={{ height: '12vh' }}> </div>
                <span style={styles.wordCloud}> WordCloud will go here <br/> </span>
                <div style={styles.popular}
                <span style={styles.popularSearches}>Popular Searches</span>
            </div>
        )
    }
}

const styles = {
    window: {
        height: "100vh",
        backgroundColor: "#3b8eff",
        color: 'white',
        textAlign: 'center'
    },

    wordCloud: {
        fontSize: '3rem',
    },

    popularSearches: {
        textAlign: 'left',
        paddingTop: '30vh',

    }
}

export default Data
