'use client'

import React, { useEffect, useState } from 'react';

import { useStateValue } from '@/context/StateProvider';
import { useRouter } from 'next/navigation';
import Preloader from '../preloader';

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
    const [{ token, user }, dispatch] = useStateValue();
    const [loading, setLoading] = useState<boolean>(true) // to control the user check 
    const router = useRouter();


    useEffect(() => {
        if (!user) {
            router.push('/signin');
        }
    }, [user, router]);

    // Render children if user is authenticated
    return <>{
        user ? children : <Preloader />
    }</>;
};

export default AuthWrapper;
