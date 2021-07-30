import "./KnowledgeItems.scss";

export default function KnowledgeItems({idx, content}) {
    const title= Object.keys(content)[0];
    const text= Object.values(content)[0];
    return(
        <div className="card">
            <div className="card-heading highlight">
                <span className="highlighted-text main-text">{title}</span>
            </div>
            <div className="card-body main-text">
                {text}
            </div>
        </div>
    )
}