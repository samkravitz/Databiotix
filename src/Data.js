import React, { Component } from 'react'
import wordcloud from './wordcloud.png'

class Data extends Component {

    render() {
        const { searches } =  this.props
        return (
            <div className="Data" style={styles.window}>
                <div style={{ height: '12vh' }}> </div>
                
                <img src={wordcloud} alt={'none'} style={styles.pic} height="200"/>


                <div style={{ paddingTop: '15vh' }}>
                    <div style={styles.popularSearches}>
                        <span style={styles.popularSearches}>Popular Searches</span>
                    </div>
                    <div style={styles.searches}>
                        <span>{'purdue'
                        
                        }</span>
                        <span>{'google'}</span>
                        <span>{'integral'}</span>
                        <span>{'drive'}</span>
                        <span>{'python'}</span>
                    </div>
                    <div style={styles.popularSearches}>
                        <span style={styles.popularSearches}>Recent Locations</span>
                    </div>
                    <div style={styles.searches}>
                        <span>Walmart</span>
                        <span>McDonald's</span>
                        <span>Subway</span>
                    </div>
                </div>
                <button type="button" style={styles.button}>Analyze and Predict</button>
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
        marginBottom: '20vh',
    },

    popularSearches: {
        textAlign: 'left',
        paddingLeft: '35vh',
    },

    searches: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '20vh'
    },

    button: {
        marginTop: '10vh',
        borderRadius: '20px',
        backgroundColor: 'transparent',
        color: 'white',
        padding: '15px, 0px',
        border: '2px solid white'
    }
}

export default Data
