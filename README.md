# Kanmaa Adventures responsive web client and mobile web client.
Styling with react styled components
Functional components using react hooks

## Available Scripts

In the project directory, you can run:

### `yarn start`

### GlobalStyles
- Globally accessible styled components [
    Container,
    Button
]

### Basic Component
## 1. Navbar elements module:
    Pre defined elements to load into the main navbar
    [
        Nav,
        NavbarContainer,
        NavLogo,
        NavIcon,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks,
        NavItemBtn,
        NavBtnLink,
        FirstName,
        SecondName,
        SecondNamePart
    ]

### 2. Navbar Module:
    The main Navbar component to be included in the components index.js exporter module and used in the main app.tsx module.

## 3. Footer Elements Module:
    Predefined elements to load into the footer 
    [
        FooterContainer,
        FooterSubscription,
        FooterSubHeading,
        FooterSubText,
        Form,
        FormInput,
        FooterLinksContainer,
        FooterLinksWrapper,
        FooterLinksItems,
        FooterLinkTitle,
        FooterLink,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        SocialIcon,
        WebsiteRights,
        SocialIcons,
        SocialIconLink,
        FirstName,
        SecondName
    ]

## 4. Footer Module:
    The main Footer Component comprising the subscription element, Footerlinks and copyright information. 
    The module is exported through the components index.js module to be used in the main app.tsx module.

## 5. Info Section Elements module
    Predefined elements to load into the Info Section Module.
    [
        InfoSec,
        InfoRow,
        InfoColumn,
        TextWrapper,
        TopLine,
        Heading,
        Subtitle,
        ImgWrapper,
        Img
    ]

## 6. Info Section Recyclable Module. 
    Comprising of topline, heading, subtitle, custom link and image. The component is exported through the components index module as InfoSection to be used by other modules in the project.

## 7. Pricing Elements module.
    Predefined elements to load into the Pricing Module.
    [
        Pricing Section,
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
    ]

## 8. Pricing Recyclable Module.
    Comprising of a pricing section, pricing wrapper, pricing heading, pricing card link, pricing card info, pricing card plan, pricing card icon, pricing card cost, pricing card length, pricing card features and pricing card feature.

## 9. Scroll to top module.
    Imported from the App.tsx module to aid in reversing the paging of the displayed document on page navigation.

## 10. Home Page Data.
    The default data fetching module for home page module component. Dummy data in five sections to feed to the reusable Info-section module for the home page.

## 11. Home Page, Main Landing Page.
    Comprising 6 reusable sections of 5 Info-Section components with various data inputs from the home data source component. 
    Also has 1 Pricing component with the default dummy data from the pricing component. 

## 12. Experience Page Data.
    The default data fetching module for experiences page module component. Dummy data in two sections to feed to the reusable Info-section module for the experience page.

## 13. Experience Page.
    Comprising 2 reusable sections of 2 Info-Section components with various data inputs from the experience data source component.
    Components to showcase online experience and physical experiences.

## 14. Host Page Data.
    The default data fetching module for host page module component. Dummy data in two sections to feed to the reusable Info-section module for the host page.

## 15. Host Page.
    Comprising 2 reusable sections of 2 Info-Section components with various data inputs from the host data source component.
    Components to showcase hotel hosting and home hosting.

