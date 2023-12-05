import classes from "./SiteHeader.module.css"

function SiteHeader(props) {
    return (
        <div className={classes.SiteHeader}>
            <h1>{props.item.header}</h1>
            <h4>{props.item.description}</h4>
        </div>
    );
}

export default SiteHeader;