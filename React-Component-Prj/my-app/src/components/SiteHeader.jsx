import classes from "./SiteHeader.module.css"

function SiteHeader(props) {
    return (
        <header className={classes.SiteHeader}>
            <h1>{props.item.header}</h1>
            <p>{props.item.description}</p>
        </header>
    );
}

export default SiteHeader;