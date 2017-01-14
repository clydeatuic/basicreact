import React, { Component } from 'react';

import axios from 'axios';
import _ from 'lodash';
import $ from 'jquery';

class Home extends Component {

  constructor(){
    super();
    this.state = {}
  }

  componentDidMount() {
    this.search();
  }

  updateSearch(){
  	this.search(this.refs.query.value);
  }

  render() {
	

	let movies = _.map(this.state.episodes, (movie,key) => {
		return <MovieList rating={movie.imdbRating} episode={movie.Episode} title={movie.Title} imdbID={movie.imdbID} key={key} />;
	});

      return (
         <div>



         	<input placeholder="Type Season here" ref="query" onChange={ (e) => {this.updateSearch();} } type="text"/>
            <h1>Movie List</h1>
            <center>
              <div className="preloader-wrapper big active" id="loader">
                <div className="spinner-layer spinner-blue-only">
                  <div className="circle-clipper left">
                    <div className="circle"></div>
                  </div><div className="gap-patch">
                    <div className="circle"></div>
                  </div><div className="circle-clipper right">
                    <div className="circle"></div>
                  </div>
                </div>
              </div>
            </center>
            <ul className="collection" id="movies">{movies}</ul>
         </div>
      )
   }

   search(query = "1"){
    $('#loader').show();    
    $('#movies').hide();   
   	let url = `http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=${query}`;
   	//let url = 'http://www.omdbapi.com?s=${query}&y=&r=json&plot=short';

   	axios.get(url).then((res) => {
   		console.log(res.data.Episodes);
   		this.setState({
   			episodes: res.data.Episodes			
   		});

      setTimeout(function(){
        $('#loader').hide();
        $('#movies').show();
      },3000);
        
   	});
   }
}

export default Home;

class MovieList extends Component{
	render(){
		const { title } = this.props;
    const { imdbID } = this.props;
    const { episode } = this.props;
		const { rating } = this.props;

		const url = `http://www.imdb.com/title/${imdbID}`;
		return (

    <li className="collection-item avatar">
      {/*<img src="images/yuna.jpg" alt="" class="circle">*/}
      <i className="material-icons circle red">play_arrow</i>
      <span className="title">{title}</span>
      <p>Episode {episode}<br/>
         IMDB Rating: {rating}
      </p>
      
        <a href={url} className="secondary-content"><i className="material-icons">grade</i></a>

    </li>
		)
	}
}