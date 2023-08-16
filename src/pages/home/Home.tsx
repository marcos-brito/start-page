import Header from "./components/Header.tsx";
import MarksSection from "./components/MarkSection.tsx";
import SearchBar from "./components/SearchBar.tsx";
import "./styles/Home.css";

const marks = {
    google: "https://www.google.com",
    github: "https://github.com",
};

function Home() {
    return (
        <>
            <Header />
            <section className="container">
                <SearchBar />
                <div className="marks-section">
                    <MarksSection title="testSection" marks={marks} />
                    <MarksSection title="testSection" marks={marks} />
                    <MarksSection title="testSection" marks={marks} />
                </div>
            </section>
        </>
    );
}

export default Home;
