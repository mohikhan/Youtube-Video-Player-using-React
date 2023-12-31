import React, {Component} from "react";
import ReactDOM from 'react-dom';
import SearchBar from "./components/search_bar";
import YTSearch from 'youtube-api-search';
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = 'AIzaSyBiyfENzBGsqbjNdG1NacU4OQvR5wIe-48';



// Create a new component, this component should produce some HTML.
class App extends Component { 

    constructor(props)
    {
        super(props);
        this.state = { videos: [],
        selectedVideo:null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term){

        YTSearch({key: API_KEY, term: term},  (videos) => {
            this.setState({videos:videos,
                selectedVideo:videos[0]
            });
        });

    }

    render () {
    return( <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
        onVideoSelect= { selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>

        </div>);
}
}
// Take this components generated HTML and put it on the page

ReactDOM.render(<App/>,document.querySelector('.container'));