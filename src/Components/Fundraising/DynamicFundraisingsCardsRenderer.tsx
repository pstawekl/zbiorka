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
                    <div className={TAGNAME + "__fundraising card"}>
                        <a href={`/fundraisings/fundraising?${fundraising.serialNumber}`} className={TAGNAME + "__fundraising-card-mask"}>
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src={fundraising.imageSrc} alt={`Zdjęcie dla zbiórki ${fundraising.title}`} />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className={TAGNAME + "__fundraising-title subtitle has-text-white"}>
                                    <h2>{fundraising.title}</h2>
                                </div>
                                <div className={TAGNAME + "__progress-bar"}>
                                    <progress className='progress is-medium' max="100"  value={fundraising.currentAmount / fundraising.goal * 100} />
                                </div>
                                <div className="content">
                                    <div className={TAGNAME + "__fundraising-goal"}>
                                        <p className='py-2'>Cel: {fundraising.goal} zł</p>
                                    </div>
                                    <div className={TAGNAME + "__fundraising-current-amount"}>
                                        <p className='py-2'>Aktualna kwota: {fundraising.currentAmount} zł</p>
                                    </div>
                                    <div className={TAGNAME + "__fundraising-date-of-end"}>
                                        <p className='py-2'>Data zakończenia: {fundraising.dateOfEnd}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))
            }
        </div>
    )
}

{/* <div class="card">
    <div class="card-image">
        <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
    </div>
    <div class="card-content">
        <div class="media">
            <div class="media-left">
                <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
            </div>
            <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">@johnsmith</p>
            </div>
        </div>

        <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
    </div>
</div> */}