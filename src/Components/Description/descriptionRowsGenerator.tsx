import { Description, DescriptionImageSide } from "../../Utils/DescriptionUtils";

export interface DescriptionRowsGeneratorProps {
    descriptionRows: Array<Description>;
}

export default function DescriptionRowsGenerator(props: DescriptionRowsGeneratorProps): JSX.Element {
    const TAGNAME = "ia-home-page";
    return (
        <div className="container">
            {
                props.descriptionRows.map((row) => {

                    if (row.imageSide == DescriptionImageSide.Right)
                        return (
                            <div className={TAGNAME + "__description-row hero-body"}>
                                <div className={TAGNAME + "__description-row-left-side"}>
                                    <h1 className="title has-text-white">{row.title}</h1>
                                    <p className="subtitle has-text-white has-text-right">{row.description}</p>
                                </div>
                                <div className={TAGNAME + "__description-row-right-side"}>
                                    <img src={row.image} alt={row.imageAlt} />
                                </div>
                            </div>
 
                        )
                    else
                        return (
                            <div className={TAGNAME + "__description-row hero-body"}>
                                <div className={TAGNAME + "__description-row-left-side"}>
                                    <img src={row.image} alt={row.imageAlt} />
                                </div>
                                <div className={TAGNAME + "__description-row-right-side"}>
                                    <h1 className="title has-text-white">{row.title}</h1>
                                    <p className="subtitle has-text-white has-text-left">{row.description}</p>
                                </div>
                            </div>
                        )
                }

                )
            }
        </div>
    )
}