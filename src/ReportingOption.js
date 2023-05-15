import ReportingItem from './ReportingItem'
import "./styles/ReportingOption.css"

export default function ReportingOption() {
    return (
        <div className="Reporting">
            <div className='searchLuc'>
                <ReportingItem title={"Google Search"} />
                <ReportingItem title={"I'm Feeling Lucky"} />
            </div>
        </div>
    )
}