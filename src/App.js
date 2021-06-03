import './App.css';
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {Route, withRouter} from "react-router-dom";
import React, {useEffect} from 'react'
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

const App = (props) => {
    useEffect(()=> {
        props.initializeApp()
    }, [])

    if (!props.initialized) {
        return <Preloader/>
    }
    return <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <main className='content-wrapper'>
            <Route path='/login'
                   render={() =>
                       <Login/>
                   }
            />
            <Route path='/profile/:userId?'
                   render={() =>
                       <ProfileContainer/>
                   }
            />
            <Route path='/dialogs'
                   render={() =>
                       <DialogsContainer/>
                   }
            />
            <Route path='/users'
                   render={() =>
                       <UsersContainer/>
                   }
            />
            <Route path='/music'
                   render={() => <Music/>}/>
            <Route path='/news'
                   render={() => <News/>}/>
            <Route path='/settings'
                   render={() => <Settings/>}/>
        </main>
    </div>

}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
