import { ITab } from "@/interface";
import { Book1, Global, GlobalEdit, HeartTick, Home, NoteAdd, ReceiptEdit, Setting2, ShieldSecurity, TagUser, UserEdit } from "iconsax-react";

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

export const HomeTabs: ITab[] = [
    {
        name: 'global_feed',
        label: 'Global Feeds',
        Icon: Global
    },
    {
        name: 'favorited_feed',
        label: 'Favorites',
        Icon: HeartTick
    },
    {
        name: 'my_feed',
        label: 'My Articles',
        Icon: ReceiptEdit
    }
]
export const ProfileTabs: ITab[] = [
    {
        name: 'profile',
        label: 'My Profile',
        Icon: TagUser
    },
    {
        name: 'settings',
        label: 'Profile Settings',
        Icon: UserEdit
    },
    {
        name: 'security',
        label: 'Change Password',
        Icon: ShieldSecurity
    }
]