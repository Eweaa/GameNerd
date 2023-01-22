import React from "react";
import NewsCSS from './News.module.css';
import NewsCard from "../../components/NewsCard/NewsCard";
import NavBar from "../../components/NavBar/NavBar/NavBar";

const News = () => (
    <div className={NewsCSS.News}>
        <NavBar />
        <NewsCard title='Is RDR2 is the best game ever made?' desc ='Red Dead Redemption 2 is one of the best games ever made ,but some people say it is the best game ever made so is it?'/>
        <NewsCard title='Is RDR2 is the best game ever made?' desc ='Red Dead Redemption 2 is one of the best games ever made ,but some people say it is the best game ever made so is it?'/>
        <NewsCard title='Is RDR2 is the best game ever made?' desc ='Red Dead Redemption 2 is one of the best games ever made ,but some people say it is the best game ever made so is it?'/>
        <NewsCard title='Is RDR2 is the best game ever made?' desc ='Red Dead Redemption 2 is one of the best games ever made ,but some people say it is the best game ever made so is it?'/>
    </div>
);

export default News