


const Form = ({handleSubmitEvent, handleChangeEvent, handleCheckbox, chosenDisplay}) => {


    return (
        <div className="form-container">
        <h1 className="form">Input Form</h1>
        <form onSubmit={handleSubmitEvent}>
            <label>
                Merchant Group ID:
                <input type="number" name="merchantGroupId" onChange={handleChangeEvent}></input>
            </label>
            <label>
                Merchant ID:
                <input type="number" name="merchantId" onChange={handleChangeEvent}></input>
            </label>
            <label>
                API Key:
                <input type="text" name="apiKey" onChange={handleChangeEvent}></input>
            </label>
            <label>
                Page ID:
                <input type="text" name="pageId" onChange={handleChangeEvent}></input>
            </label>
            <label>
                Display Type:
                <select name="displayType" onChange={handleChangeEvent}>
                    <option>-</option>
                    <option value="display">Display</option>
                    <option value="collect">WAR</option>
                </select>
            </label>
            {chosenDisplay === "display" ? <div className="additional-display-fields">
                <h3>Display Configurations:</h3>
                <label>
                    Simple Display
                    <input type="checkbox" name="simpleSnap" value="REVIEW_DISPLAY_SNAPSHOT_TYPE=SIMPLE" onChange={handleCheckbox}></input>
                </label>
                <label>
                    Vertical Pagination
                    <input type="checkbox" name="verticalPagination" value="REVIEW_DISPLAY_PAGINATION_TYPE=VERTICAL" onChange={handleCheckbox}></input>
                </label>
                <label>
                    Condensed List
                    <input type="checkbox" name="condensed" value="REVIEW_DISPLAY_LIST_TYPE=CONDENSED" onChange={handleCheckbox}></input>
                </label>
                <label>
                    Review Filtering
                    <input type="checkbox" name="reviewFilter" value="ENABLE_REVIEW_FILTERING=1" onChange={handleCheckbox}></input>
                </label>
            </div> : null}
            <input type="submit"></input>
        </form>
      </div>
    );
};

export default Form;