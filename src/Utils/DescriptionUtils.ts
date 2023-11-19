import missionNgoal from '../Images/Description/mision-n-goal.webp';
import personalHistories from '../Images/Description/persnoal-histories.webp';
import howWeHelp from '../Images/Description/how-we-help.webp';
import transparencyNeffectiveness from '../Images/Description/transaprency-n-effectiveness.webp';

export enum DescriptionImageSide {
    Left,
    Right
}

export interface Description {
    title: string,
    description: string,
    image: string,
    imageAlt: string,
    imageSide: DescriptionImageSide
}

export class DescriptionUtils {
    public static descriptionList: Description[] = [
            {
                "title":"Misja i cel",
                "description":"Nasza misja polega na zapewnieniu natychmiastowej i długoterminowej pomocy ofiarom wojny. Celujemy w bezpośrednie wsparcie rodzin i osób poszkodowanych, dostarczając im środków pierwszej potrzeby, opieki medycznej oraz wsparcia psychologicznego. Każda złotówka przekazana przez Was trafia bezpośrednio do tych, którzy najbardziej potrzebują pomocy w tych trudnych czasach",
                "image":missionNgoal,
                "imageAlt":"Mission & Goals",
                "imageSide": DescriptionImageSide.Left
            },
            {
                "title":"Historie Osobiste",
                "description":"Poznaj historie osób, których życie zostało nieodwracalnie zmienione przez wojnę. Te wzruszające relacje są świadectwem niewyobrażalnej odwagi i determinacji w obliczu tragedii. Ich opowieści są powodem, dla którego walczymy o każdy dzień lepszej przyszłości",
                "image":personalHistories,
                "imageAlt":"Personal Histories",
                "imageSide": DescriptionImageSide.Right
            },
            {
                "title":"Jak Pomagamy?",
                "description":"Nasza organizacja koncentruje się na trzech kluczowych obszarach: zapewnieniu schronienia dla osób wysiedlonych, dostarczaniu żywności i leków oraz wsparciu psychologicznym i edukacyjnym dla dzieci i młodzieży. Dzięki Waszym darowiznom możemy kontynuować naszą pracę i rozszerzać zakres pomocy",
                "image":howWeHelp,
                "imageAlt":"How we help?",
                "imageSide": DescriptionImageSide.Left
            },
            {
                "title":"Transparentność i Skuteczność",
                "description":"Zobowiązujemy się do pełnej transparentności w zarządzaniu funduszami. Regularnie publikujemy raporty i aktualizacje dotyczące sposobu wykorzystania zebranych środków oraz efektów naszych działań. Nasz zespół składa się z doświadczonych profesjonalistów, którzy zapewniają, że każda darowizna ma realny wpływ na poprawę życia ofiar wojny",
                "image":transparencyNeffectiveness,
                "imageAlt":"Transparency & Effectiveness",
                "imageSide": DescriptionImageSide.Right
            }
    ]
}