import './table.css';

export default function Table({children}){
    return (
        <div className="grid">
            <h3>Name</h3>
            <h3>Lastname</h3>
            <h3>Email</h3>
            <h3>Debt</h3>

            {children}
        </div>
    )
}
