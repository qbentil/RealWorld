import { Book1, Home, NoteAdd, Setting2 } from "iconsax-react";

export { default as classNames } from "./classnames";

export const SideNavs = [
    {
        name: 'Dashboard',
        Icon: Home,
        href: ''
    },
    {
        name: 'My Articles',
        Icon: Book1,
        href: '/articles'
    },
    {
        name: 'New Article',
        Icon: NoteAdd,
        href: '/editor'
    },
    {
        name: 'Settings',
        Icon: Setting2,
        href: '/settings'
    }
]