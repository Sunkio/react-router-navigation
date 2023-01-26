import Header from "../components/Header";
import {my_blogs} from "../blogs";

const AuthorPage = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="inner-container">
                    <h1 className="page-title">About the Author: Tanja</h1>

                    <img src="./img/header.jpg" className="hero-image" alt="" />
                    <div className="blog-content">
                        <p className="blog-text">TBA - 50 words or more discussing my interest in web development</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthorPage;