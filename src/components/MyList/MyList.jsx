import React, {useEffect} from 'react'
import {connect} from 'react-redux'
// import {
//     pathImg, baseUrl, search, multi, discover,
//     movie, apiKey, genres, query} from '../../api/ApiMovieDB';
import ModalRender from '../../containers/Modal/ModalRender';
import Header from '../Header/Header';

import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';
import Cart from '../../components/Cart/Cart';
import NavBtn from '../../components/NavBtn/NavBtn';
import NavMenu from '../NavMenu/NavMenu';
import Footer from '../Footer/Footer';


const MyList = (props) => {
        
    useEffect(()=>{

    },[])

  
    return (
        <div className="myListComponent">
            <Header>
            <div className="navbar">
                    <NavMenu/>
                    <div className="cartCounter">
                        <Cart/>
                    </div>
                    <NavBtn>
                        <DropDownMenu/>
                    </NavBtn> 
                </div>
            </Header>
            <h4>My List...</h4>
            {
                props.list.length === 0
                ?
                <>
                    <div className="noList">
                        <h2>Nothing added to your list yet!</h2>
                    </div>
                </>
                :
                <>
                    <div className="listGrid">
                        {
                            props.list.map((film) =>{
                                if(film.imgFilm)
                                return( 
                                    <div key={film.id}>
                                        <ModalRender title={film.title} id={film.id} originalLanguage={film.originalLanguage}
                                        originalTitle={film.originalTitle} overview={film.overview} releaseDate={film.releaseDate} 
                                        voteAverage={film.voteAverage} backdropPath={film.backdropPath} genres={film.genres} imgFilm={film.imgFilm}
                                        >
                                            <img className="filmPoster" alt={film.poster_path} src={film.imgFilm}/>
                                        </ModalRender>
                                    </div>
                                )

                            })
                        }     
                    </div>
                </>

            }
            <Footer/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        list: state.listReducer.list,
    }
};

export default connect(mapStateToProps)(MyList);
