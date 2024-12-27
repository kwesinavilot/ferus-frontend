# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.2.0] - 2024-12-27

### Added

- **Feature:**  Implemented a new "Insurance Plans" section featuring comprehensive information on various insurance products including Auto, Home, Life, and Business insurance.  This includes descriptions and links to dedicated pages for each plan.
- **Feature:** Added a navigation menu component (`MainNav`) providing a more structured way to access the different insurance plan pages and other sections (Get a Quote, File A Claim).
- **Feature:** Integrated the `@radix-ui/react-navigation-menu` library to enhance the navigation menu functionality.
- **Feature:**  Developed a dedicated footer component with links to the About Us section, contact information, office locations, and access to insurance plans.
- **Feature:** Created category cards with icons that represent the different insurance plan types in the hero section.
- **Component:** Created `MainNav` component for main navigation.
- **Component:** Created `ListItem` component used within the `MainNav` for display of insurance plans.
- **Component:** Created `NavigationMenu`, `NavigationMenuList`, `NavigationMenuItem`, `NavigationMenuContent`, `NavigationMenuTrigger`, `NavigationMenuLink`, `NavigationMenuIndicator`, and `NavigationMenuViewport` components for improved navigation menu rendering and functionality.


### Changed

- **Enhancement:** Updated the hero section to improve user experience and provide clearer information about available services.
- **Enhancement:**  Improved styling of category cards to enhance visual appeal. Added a subtle gradient to the category card dividers.
- **Enhancement:** Modified the layout of the homepage to accommodate the new sections and improve responsiveness across different screen sizes.  Uses `md:container-fluid xl:container` for better adaptive layout.
- **Enhancement:** Updated icons in the hero section to match the new insurance theme, removing previous icons (Shield, Bell, CreditCard, HelpCircle) and adding (Car, House, HeartPulse, Plane, Flame, Ship, BadgeCent, BookText).
- **Enhancement:** Redesigned the footer for improved organization and visual appeal, including social media links and reorganized content into logical sections.


## [0.1.0] - 2024-12-20

### Added

- Initial project setup using Create Next App.
- Basic UI components.
- Initial styling with Tailwind CSS.
