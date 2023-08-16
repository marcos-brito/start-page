import "../styles/MarkSection.css";

interface bookMark {
    [name: string]: string;
}

interface props {
    title: string;
    marks: bookMark;
}

function MarkSection({ title, marks }: props) {
    const bookMarks = Object.keys(marks).map((key) => (
        <a className="link" href={marks[key]} rel="noopener noreferrer">
            {key}
        </a>
    ));

    return (
        <>
            <div className="marks-container">
                <h1 className="title">{title}</h1>
                <ul className="list-container">{bookMarks}</ul>
            </div>
        </>
    );
}

export default MarkSection;
