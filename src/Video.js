import React, { Component } from 'react'


class Video extends Component {
    render() {
        return (
            <div class='Video'>
                <h1> databiotix</h1>
                <h2>Ever wonder what happens to your data?</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/c4d0MU__esA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}

export default Video