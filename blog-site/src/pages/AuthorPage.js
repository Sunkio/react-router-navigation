import Header from "../components/Header";
import {my_blogs} from "../blogs";

const AuthorPage = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="inner-container">
                    <h1 className="page-title">About the Author: Tanja</h1>

                    <img src="./img/author.jpg" className="hero-image" alt="" />
                    <div className="blog-content">
                        <p className="blog-text">Tanja has been interested in programming in general and in web development in particular for a very long time. But it was only six years ago that she started learning HTML, CSS, JavaScript, and jQuery. She took courses but found it hard to build her own projects at that time. Fast forward a few years: Tanja got accepted to a software engineering school and learned programming in C. She got very interested in web3 development and, via this, found her way back to web2 development as well. She finally enjoys programming in JavaScript and exploring the vast ecosystem of libraries, frameworks, and tools that surround it.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthorPage;