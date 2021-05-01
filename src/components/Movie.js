import { React, Component } from 'react';

const IMAGES_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (rate) => {
    if(rate >= 8)
        return 'green';
    else if(rate >= 6)
        return "orange";
    else
        return "red";
}


class Movie extends Component{

    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return(
            <div className="movie">
                <img src={IMAGES_API + this.props.poster_path} alt={this.props.title} />
                <div className="movie-info">
                    <h3>{this.props.title}</h3>
                    <span className={`tag ${setVoteClass(this.props.vote_average)}`}>{this.props.vote_average}</span>
                </div>

                <div className="movie-over">
                    <h2>Overview</h2>
                    <p>{this.props.overview}</p>
                </div>
            </div>
        );
    }
}

export default Movie;