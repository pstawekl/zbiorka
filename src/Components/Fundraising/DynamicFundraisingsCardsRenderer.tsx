import ProgressBar from '@ramonak/react-progress-bar';
import { Fundraising } from '../../Utils/FundraisingUtils';

interface DynamicFundraisingRendererProps {
    fundraisings: Fundraising[];
}



export default function DynamicFundraisingsCardsRenderer(props: DynamicFundraisingRendererProps) {
    const TAGNAME = "ia-dynamic-fundraising-cards";

    return (
        <div className={TAGNAME}>
            {
                props.fundraisings.map((fundraising: Fundraising) => (
                    <div className={TAGNAME + "__fundraising"}>
                        <a href={`/fundraisings/fundraising?${fundraising.serialNumber}`} className={TAGNAME + "__fundraising-card-mask"}>
                            <div className={TAGNAME + "__fundraising-title"}>
                                <h2>{fundraising.title}</h2>
                            </div>
                            <div className={TAGNAME + "__fundraising-image"}>
                                <img src={fundraising.imageSrc} alt={`Zdjęcie dla zbiórki ${fundraising.title}`} />
                            </div>
                            <div className={TAGNAME + "__progress-bar"}>
                                <ProgressBar completed={fundraising.currentAmount / fundraising.goal * 100} bgColor='#ede853' />
                            </div>
                            <div className={TAGNAME + "__fundraising-goal"}>
                                <p>Cel: {fundraising.goal} zł</p>
                            </div>
                            <div className={TAGNAME + "__fundraising-current-amount"}>
                                <p>Aktualna kwota: {fundraising.currentAmount} zł</p>
                            </div>
                            <div className={TAGNAME + "__fundraising-date-of-end"}>
                                <p>Data zakończenia: {fundraising.dateOfEnd}</p>
                            </div>
                        </a>
                    </div>
                ))
            }
        </div>
    )
}