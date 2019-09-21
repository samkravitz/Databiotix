import React, { Component } from 'react'

import './App.css'
import Video from './Video'
import Data from './Data'
import Ad from './Ad'

import allBrowHist from "./BrowserHistory.json" // converts json file to js object

class App extends Component {

  state = {
    searches: []
  }

  componentDidMount() {
    const month = 2628000000000 //month in epoch time

    // common words that will be excluded from most common searched terms, feel free to add to this list
    let commonWords = new Set(['who', 'what', 'when', 'where', 'why', 'how', 'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'I', 'i', 'it', 'for', 'not', 'on', 'with', 'as',
                        'you', 'do', 'at', 'this', 'but', 'by', 'from', 'or','will', 'an', 'my', 'would', 'if', 'is'])

    let googSearch = allBrowHist['Browser History'].filter(d => d.title.includes(" - Google Search")) //filters out everything that isnt a google search

    let endTime = allBrowHist['Browser History'][0].time_usec // last browser data epoch time recorded
    let startTime = endTime - month // calculates the time cutoff for the data we care about
    let googSearchMonth = googSearch.filter(d => d.time_usec >= startTime) // returns data from only the past month

    let allTermsArr = [] // will be an array of terms as items, any search term with mult spaces will be split by " " and appended as its own unique term

    let numSearches = googSearchMonth.length // total number of google searches i made in the last month
    for(var i = 0; i < 997; i++) {
        let searchString = (googSearchMonth[i].title).slice(0,-16) // chops off the " - Google Search" from every title
        let searchArr = searchString.split(" ")                    // splits search term into its individual words
        for(var j = 0; j < searchArr.length; j++){             // pushes each word into the array of all terms, forming a complete array of all words I have searched
            allTermsArr.push(searchArr[j])
        }
    }

    let uniqAllTermsArr = allTermsArr.filter((v,i) => allTermsArr.indexOf(v) === i) // array of all unique search terms (words)

    let SearchTermFreq = { //empty object of key value pairs. key=search term, value=frequency

    }

    //fill SearchTermFreq object, initialize all to zero
    for (i = 0; i < uniqAllTermsArr.length; i++) {
        SearchTermFreq[uniqAllTermsArr[i]] = 0
    }

    //Iterate through all search terms, incrementing the value (freq) associated with that key (search term) in SearchTermFreq
    for (i = 0; i < allTermsArr.length; i++) {
        SearchTermFreq[allTermsArr[i]] += 1
    }

        let searches = []

        var SearchTermFreq2d = Object.keys(SearchTermFreq).map(function(key) { // stackoverflow method to convert dict to 2d array
            return [key, SearchTermFreq[key]]
        })

        SearchTermFreq2d.sort(compareSecondColumn);

        function compareSecondColumn(a, b) {
            if (a[1] === b[1]) {
                return 0;
            }
            else {
                return (a[1] > b[1]) ? -1 : 1;
            }
        }

        // THIS CAN INFINITE LOOP IF USER ONLY EVER SEARCHES COMMON WORDS INTO GOOGLE OR DOES NOT SEARCH ENOUGH SIGNIFICANT TERMS, BUT I DONT HAVE THE TIME OR ENERGY TO WRITE CHECKS FOR IT
        let count = 0
        let index = 0
        while (count < 20) { // creates 2d array of n length, EXCLUDING common english words
            // console.log(SearchTermFreq2d[index][0])
            if (!(commonWords.has(SearchTermFreq2d[index][0]))) { 
                searches.push(SearchTermFreq2d[index])
                count++
            }
            index++
        }

        console.log(searches)
        this.setState({ searches }) //2d array of searched terms in order of greatest to least, first dimension is searched term, second is frequency
    
  }

  getImage = async () => {
    var outside
    const result = fetch('https://cors-anywhere.herokuapp.com/https://serpapi.com/playground?q=Apple&tbm=isch&ijn=0')
    .then(response => response.blob())
    .then(images => {
      // Then create a local URL for that image and print it
      outside = URL.createObjectURL(images)
      console.log(outside)
      this.setState({ photoUrl: outside })
  })

  }

  render() {
    return (
      <div className="App" style={{ fontFamily: 'Lato'}}>
        <Video />
        <Data searches={this.state.searches}/>
        <Ad />
      </div>
    );
  }
}

export default App;
