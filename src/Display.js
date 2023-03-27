

function Display(props) {

    return (
        <div className="display-container">
            <h1>Results</h1>
            <iframe className="pwr-display" src={`https://ui.powerreviews.com/stable/4.1/standalone/${props.standaloneType}/index.html?pr_merchant_id=${props.merchantId}&pr_merchant_group_id=${props.merchantGroupId}&pr_page_id=${props.pageId}&pr_api_key=${props.apiKey}&${props.simpleSnap}&${props.verticalPag}&${props.condensed}&${props.reviewFilter}`} title="pwr"></iframe>
        </div>
    );
}

export default Display;
