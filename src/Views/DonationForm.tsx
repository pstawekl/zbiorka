import react, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './Stripe/CheckoutForm';
import { stripePublicKey } from './Stripe/stripeConfig';
import PaymentForm from './Stripe/PaymentForm';
import Logo from './../Assets/Images/logo.webp'
import { Input, Progress } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faDownLong, faScroll, faTurnDown, faUpDown } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

enum formStates {
    loading,
    error,
    loaded,
    donate,
    inStripe,
    donated,
}

export default function DonationForm() {
    const [amount, setAmount] = useState<number>(0);
    const [formState, setFormState] = useState<formStates>(formStates.loaded);
    const target = 10000;
    const [moneyReceived, setMoneyReceived] = useState<number>(1);
    const [progressValue, setProgressValue] = useState<number>(moneyReceived / target * 100);

    const stripePromise = loadStripe(stripePublicKey);

    const options = {
        clientSecret: 'sk_test_51O4U5kL50tTUi3pklblxoHJwU79hLaBj3MoJHnV92XCzcJE6OtaV1rd7BrCvCEGMENyCcieey4GIovky9Os4ThrZ00N1sp1dBh',
    };

    useEffect(() => {
        console.log(amount);
    }, [amount])

    const handleDonation = () => {
        setFormState(formStates.inStripe);
    };

    switch (formState) {
        case formStates.loading:
            return <div className="ia-donation-form">
                <h1>Wczytywanie...</h1>
            </div>
        case formStates.error:
            return <div className="ia-donation-form">
                <h1>Wystąpił błąd!</h1>
            </div>
        case formStates.loaded:
            return <div className='banner'>
                <div className="banner-content">
                    <span className='banner-subtitle'>
                        Podaruj bandaż i wesprzyj Ukrainę w walce o wolność
                    </span>

                    <Progress
                        className='banner-progress'
                        color='warning'
                        value={progressValue}
                    />
                    <button onClick={() => setFormState(formStates.donate)}>Przekaż bandaż</button>
                    <FontAwesomeIcon
                        className={'banner-scroll-down'}
                        icon={faArrowDown}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementsByClassName('ia-home-page-info')[0]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        />
                </div>
            </div>
        case formStates.donate:
            return <div className='donation-form'>
                <div className="donation-form-content">
                    <span className='donation-form-subtitle'>
                        Podaruj bandaż i wesprzyj Ukrainę w walce o wolność
                    </span>

                    <Input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        bsSize='sm'
                    />
                    <button onClick={handleDonation}>Przekaż bandaż</button>
                </div>
            </div>
        case formStates.inStripe:
            return (
                <Elements stripe={stripePromise}>
                    <PaymentForm />
                </Elements>
            );
        case formStates.donated:
            return <div className="ia-donation-form">
                <h1>Dziękujemy za wsparcie!</h1>
            </div>
        default:
            return <div className="ia-donation-form">
                <h1>Wystąpił błąd!</h1>
            </div>
    }
}