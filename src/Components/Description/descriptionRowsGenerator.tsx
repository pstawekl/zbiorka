import { Description, DescriptionImageSide } from "../../Utils/DescriptionUtils";

export interface DescriptionRowsGeneratorProps {
    descriptionRows: Array<Description>;
}

export default function DescriptionRowsGenerator(props: DescriptionRowsGeneratorProps): JSX.Element {
    const TAGNAME = "ia-home-page";
    return (
        <div>
            {
                props.descriptionRows.map((row) => {

                    if (row.imageSide == DescriptionImageSide.Right)
                        return (
                            <div className={TAGNAME + "__description-row"}>
                                <div className={TAGNAME + "__description-row-left-side"}>
                                    <h1>{row.title}</h1>
                                    <p>{row.description}</p>
                                </div>
                                <div className={TAGNAME + "__description-row-right-side"}>
                                    <img src={row.image} alt={row.imageAlt} />
                                </div>
                            </div>

                        )
                    else
                        return (
                            <div className={TAGNAME + "__description-row"}>
                                <div className={TAGNAME + "__description-row-left-side"}>
                                    <img src={row.image} alt={row.imageAlt} />
                                </div>
                                <div className={TAGNAME + "__description-row-right-side"}>
                                    <h1>{row.title}</h1>
                                    <p>{row.description}</p>
                                </div>
                            </div>
                        )
                }

                )
            }
        </div>
    )
}