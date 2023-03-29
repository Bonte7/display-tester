


const Form = ({handleSubmitEvent, handleChangeEvent, handleCheckbox, chosenDisplay}) => {


    return (
        <div className="form-container">
        <h1 className="form">Standalone Generator</h1>
        <form onSubmit={handleSubmitEvent}>
            <div className="cred-fields">
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
            </div>
            {chosenDisplay === "display" ? <div className="additional-display-container">
                <h3>Display Configurations:</h3>
                <div className="display-options">
                <label>
                    <input type="checkbox" name="simpleSnap" value="REVIEW_DISPLAY_SNAPSHOT_TYPE=SIMPLE" onChange={handleCheckbox}></input>
                    Simple Display
                </label>
                <label>
                    <input type="checkbox" name="verticalPagination" value="REVIEW_DISPLAY_PAGINATION_TYPE=VERTICAL" onChange={handleCheckbox}></input>
                    Vertical Pagination
                </label>
                <label>
                    <input type="checkbox" name="condensed" value="REVIEW_DISPLAY_LIST_TYPE=CONDENSED" onChange={handleCheckbox}></input>
                    Condensed List
                </label>
                <label>
                    <input type="checkbox" name="reviewFilter" value="ENABLE_REVIEW_FILTERING=1" onChange={handleCheckbox}></input>
                    Review Filtering
                </label>
                </div>
            </div> : null}
            <input className="submit-button" type="submit"></input>
        </form>
      </div>
    );
};

export default Form;