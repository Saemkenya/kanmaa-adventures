import React from 'react';
import { Button } from "../../globalStyles";
import { IconContext } from "react-icons/lib";
import { 
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardLength,
    PricingCardFeatures,
    PricingCardFeature
 } from "./Pricing.elements";
import Tent from '../../images/Tent';
import House from '../../images/House';
import Bed from '../../images/Bed';

function Pricing() {
    return (
        <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
            <PricingSection>
                <PricingWrapper>
                    <PricingHeading>Discounted Offers</PricingHeading>
                    <PricingContainer>
                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardPlan>Unique Stays</PricingCardPlan>
                                <PricingCardIcon>
                                    <Tent height={150} width={150} />
                                </PricingCardIcon>
                                <PricingCardCost>KSHS 15,000</PricingCardCost>
                                <PricingCardLength>per night</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Available Now</PricingCardFeature>
                                    <PricingCardFeature>15 Previous Bookings</PricingCardFeature>
                                    <PricingCardFeature>Outdoor Experience</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Camping Sites</Button>
                            </PricingCardInfo>
                        </PricingCard>

                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardPlan>Entire Homes</PricingCardPlan>
                                <PricingCardIcon>
                                    <House height={150} width={150} />
                                </PricingCardIcon>
                                <PricingCardCost>KSHS 25,000</PricingCardCost>
                                <PricingCardLength>per night</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Available Now!</PricingCardFeature>
                                    <PricingCardFeature>23 Previous Bookings</PricingCardFeature>
                                    <PricingCardFeature>Private Compounds</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Home Listing</Button>
                            </PricingCardInfo>
                        </PricingCard>

                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardPlan>Rooms</PricingCardPlan>
                                <PricingCardIcon>
                                    <Bed width={150} height={150} />
                                </PricingCardIcon>
                                <PricingCardCost>KSHS 10,000</PricingCardCost>
                                <PricingCardLength>per night</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Available Now!</PricingCardFeature>
                                    <PricingCardFeature>106 Previous Bookings</PricingCardFeature>
                                    <PricingCardFeature>With Bed and Breakfast</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Room Listings</Button>
                            </PricingCardInfo>
                        </PricingCard>

                    </PricingContainer>
                </PricingWrapper>
            </PricingSection>
        </IconContext.Provider>
    )
}

export default Pricing;
