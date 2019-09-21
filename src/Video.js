import React, { Component } from 'react'


class Video extends Component {
    render() {
        return (
            <div className='Video' style={styles.window}>
                <h1><span style={{ color:'#3b8eff' }}>data</span>biotix</h1>
                <h3>Have you ever wondered what happens to your data?</h3>
                <iframe width="420" height="236" src="https://www.youtube.com/embed/jSHoiyhQYz8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {/* <iframe width="420" height="236" src="https://www.youtube.com/watch?v=jSHoiyhQYz8&feature=youtu.be" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
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
                    Find your Google data here: <br/> <br />
                </span>
                <button type="button" class="btn btn-outline-primary">Find my data</button> <br/> <br />
                <span>
                    Upload your google data to Databiotics <br/> <br />
                </span>
                <button type="button" class="btn btn-outline-primary">Analyze my data</button>
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
