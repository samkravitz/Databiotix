import React, { Component } from 'react'


class Video extends Component {
    render() {
        return (
            <div className='Video' style={styles.window}>
                <h1> databiotix</h1>
                <h2>Have you ever wondered what happens to your data?</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/c4d0MU__esA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <br/>
                <span>
                    Has Facebook been showing you advertisements for the sneakers you searched for on Google lately? <br/>
                    Do you feel like your data is being tracked in ways you don't like?
                    Predictive AI is the new norm, and your data is easily accessible. <br/>
                </span>
                <span>
                    Databiotics wants to help everyone understand the data they create and bring light to how companies like Facebook use your data. <br/>
                </span>
                <span>
                    Find your Google data here: <br/>
                </span>
                <button>Find my data</button>
                <span>
                    Upload your google data to Databiotics <br/>
                </span>
                <button>Analyze my data</button>
            </div>
        )
    }
}

const styles = {
    window: {
        height: "100vh",
        textAlign: 'center'
    }
}

export default Video
