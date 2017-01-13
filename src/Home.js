import React, { Component } from 'react';

import axios from 'axios';
import _ from 'lodash';

class Home extends Component {

  constructor(){
    super();
    this.state = {}
  }

  componentDidMount() {
    // let d = JSON.parse('{"Title":"Game of Thrones","Season":"1","totalSeasons":"8","Episodes":[{"Title":"Winter Is Coming","Released":"2011-04-17","Episode":"1","imdbRating":"9.0","imdbID":"tt1480055"},{"Title":"The Kingsroad","Released":"2011-04-24","Episode":"2","imdbRating":"8.8","imdbID":"tt1668746"},{"Title":"Lord Snow","Released":"2011-05-01","Episode":"3","imdbRating":"8.6","imdbID":"tt1829962"},{"Title":"Cripples, Bastards, and Broken Things","Released":"2011-05-08","Episode":"4","imdbRating":"8.7","imdbID":"tt1829963"},{"Title":"The Wolf and the Lion","Released":"2011-05-15","Episode":"5","imdbRating":"9.1","imdbID":"tt1829964"},{"Title":"A Golden Crown","Released":"2011-05-22","Episode":"6","imdbRating":"9.1","imdbID":"tt1837862"},{"Title":"You Win or You Die","Released":"2011-05-29","Episode":"7","imdbRating":"9.2","imdbID":"tt1837863"},{"Title":"The Pointy End","Released":"2011-06-05","Episode":"8","imdbRating":"9.0","imdbID":"tt1837864"},{"Title":"Baelor","Released":"2011-06-12","Episode":"9","imdbRating":"9.6","imdbID":"tt1851398"},{"Title":"Fire and Blood","Released":"2011-06-19","Episode":"10","imdbRating":"9.4","imdbID":"tt1851397"}],"Response":"True"}');
    
    // let url = 'http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1';
    // axios.get(url)
    //   .then((res)=>{
    //     // console.log(res.data);
    //     this.setState({data:res.data});
        
    //     // console.log(this.state.data);
    //     // console.log(this.state.data.Episodes[0].Title);


    //   });

    this.search();
    
    
  }

  updateSearch(){
  	this.search(this.refs.query.value);
  }

  render() {
	
	let movies = _.map(this.state.episodes, (movie,key) => {
		return <MovieList title={movie.Title} imdbID={movie.imdbID} key={key} />;
	});

      return (
         <div>
         	<input ref="query" onChange={ (e) => {this.updateSearch();} } type="text"/>
            <h1>Movie List</h1>
            <ul>{movies}</ul>
         </div>
      )
   }

   search(query = "1"){
   	let url = `http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=${query}`;
   	//let url = 'http://www.omdbapi.com?s=${query}&y=&r=json&plot=short';
   	axios.get(url).then((res) => {
   		console.log(res.data.Episodes);
   		this.setState({
   			episodes: res.data.Episodes			
   		});
   	});
   }
}

export default Home;

class MovieList extends Component{
	render(){
		const { title } = this.props;
		const { imdbID } = this.props;
		const url = `http://www.imdb.com/title/${imdbID}`;
		return (
			<div>
				<h5><a href={url}>{title}</a></h5>
			</div>
		)
	}
}